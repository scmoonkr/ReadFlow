import { Router } from "express";
import { Loan, Holding, Event } from "../models/index.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { reader, status, library } = req.query;
    const filter = {};
    if (reader) filter.reader = reader;
    if (status) filter.status = status;
    if (library) filter.library = library;
    const items = await Loan.find(filter)
      .populate({ path: "holding", populate: { path: "localBook" } })
      .populate("reader")
      .sort({ loanedAt: -1 })
      .limit(200);
    res.json({ count: items.length, items });
  } catch (e) { next(e); }
});

/** 대출: Loan 생성 + Holding.status=LOANED + LOAN_CREATED 이벤트 (docs 14.2). */
router.post("/", async (req, res, next) => {
  try {
    const { holding: holdingId, reader, library, dueAt } = req.body;
    const holding = await Holding.findById(holdingId);
    if (!holding) return res.status(404).json({ error: "소장책을 찾을 수 없습니다." });
    if (holding.status === "LOANED")
      return res.status(409).json({ error: "이미 대출 중인 책입니다." });

    const loan = await Loan.create({ holding: holdingId, reader, library, dueAt });
    holding.status = "LOANED";
    await holding.save();
    await Event.create({
      type: "LOAN_CREATED", subjectType: "Loan", subjectId: loan._id,
      actor: reader, library, payload: { holding: holdingId },
    });
    res.status(201).json(loan);
  } catch (e) { next(e); }
});

/** 반납: Loan.status=RETURNED + Holding.status=AVAILABLE + LOAN_RETURNED 이벤트. */
router.post("/:id/return", async (req, res, next) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) return res.status(404).json({ error: "대출 정보를 찾을 수 없습니다." });
    loan.status = "RETURNED";
    loan.returnedAt = new Date();
    await loan.save();
    await Holding.findByIdAndUpdate(loan.holding, { status: "AVAILABLE" });
    await Event.create({
      type: "LOAN_RETURNED", subjectType: "Loan", subjectId: loan._id,
      actor: loan.reader, library: loan.library, payload: { holding: loan.holding },
    });
    res.json(loan);
  } catch (e) { next(e); }
});

/** 연장. */
router.post("/:id/renew", async (req, res, next) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) return res.status(404).json({ error: "대출 정보를 찾을 수 없습니다." });
    const extend = Number(req.body.days || 14);
    loan.dueAt = new Date(loan.dueAt.getTime() + extend * 86400000);
    loan.renewCount += 1;
    await loan.save();
    await Event.create({ type: "LOAN_EXTENDED", subjectType: "Loan", subjectId: loan._id });
    res.json(loan);
  } catch (e) { next(e); }
});

export default router;
