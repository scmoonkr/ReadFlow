import { Router } from "express";
import { Holding, Event } from "../models/index.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { localBook, status, barcode, accessionNumber } = req.query;
    const filter = {};
    if (localBook) filter.localBook = localBook;
    if (status) filter.status = status;
    if (barcode) filter.barcode = barcode;
    if (accessionNumber) filter.accessionNumber = accessionNumber;
    const items = await Holding.find(filter).populate("localBook").limit(200);
    res.json({ count: items.length, items });
  } catch (e) { next(e); }
});

/** 소장 등록 → HOLDING_REGISTERED 이벤트 기록. */
router.post("/", async (req, res, next) => {
  try {
    const holding = await Holding.create(req.body);
    await Event.create({
      type: "HOLDING_REGISTERED",
      subjectType: "Holding",
      subjectId: holding._id,
      payload: { accessionNumber: holding.accessionNumber },
    });
    res.status(201).json(holding);
  } catch (e) { next(e); }
});

/** 상태 변경 (분실/수선/위치이동 등). */
router.patch("/:id", async (req, res, next) => {
  try {
    const holding = await Holding.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!holding) return res.status(404).json({ error: "소장책을 찾을 수 없습니다." });
    res.json(holding);
  } catch (e) { next(e); }
});

export default router;
