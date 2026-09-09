import { Router } from "express";
import { LocalBook } from "../models/index.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { ownerType, ownerId, book, status } = req.query;
    const filter = {};
    if (ownerType) filter.ownerType = ownerType;
    if (ownerId) filter.ownerId = ownerId;
    if (book) filter.book = book;
    if (status) filter.status = status;
    const items = await LocalBook.find(filter).populate("book").limit(200).sort({ createdAt: -1 });
    res.json({ count: items.length, items });
  } catch (e) { next(e); }
});

router.post("/", async (req, res, next) => {
  try {
    const localBook = await LocalBook.create(req.body);
    res.status(201).json(localBook);
  } catch (e) { next(e); }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const localBook = await LocalBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!localBook) return res.status(404).json({ error: "로컬 책을 찾을 수 없습니다." });
    res.json(localBook);
  } catch (e) { next(e); }
});

export default router;
