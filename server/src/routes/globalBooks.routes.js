import { Router } from "express";
import { GlobalBook } from "../models/index.js";

const router = Router();

/** 검색 (ISBN / 제목). ISBN 검색 결과 건수로 신규/사용/충돌 분기 (docs 5.2). */
router.get("/", async (req, res, next) => {
  try {
    const { q, isbn, status } = req.query;
    const filter = {};
    if (isbn) filter.isbn = isbn;
    if (status) filter.status = status;
    if (q) filter.title = { $regex: q, $options: "i" };
    const items = await GlobalBook.find(filter).limit(50).sort({ createdAt: -1 });
    res.json({ count: items.length, items });
  } catch (e) { next(e); }
});

router.get("/:id", async (req, res, next) => {
  try {
    const book = await GlobalBook.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "책을 찾을 수 없습니다." });
    res.json(book);
  } catch (e) { next(e); }
});

/** 신규(임시) 등록 — 최소 정보. 기본 status=PENDING (docs 7.1). */
router.post("/", async (req, res, next) => {
  try {
    const book = await GlobalBook.create({ ...req.body, status: req.body.status || "PENDING" });
    res.status(201).json(book);
  } catch (e) { next(e); }
});

/** 운영자 서지 보완 / 상태 변경. */
router.patch("/:id", async (req, res, next) => {
  try {
    const book = await GlobalBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ error: "책을 찾을 수 없습니다." });
    res.json(book);
  } catch (e) { next(e); }
});

export default router;
