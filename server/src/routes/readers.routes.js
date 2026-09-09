import { Router } from "express";
import { Reader, Membership } from "../models/index.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { q } = req.query;
    const filter = q ? { name: { $regex: q, $options: "i" } } : {};
    const items = await Reader.find(filter).limit(100);
    res.json({ count: items.length, items });
  } catch (e) { next(e); }
});

router.get("/:id", async (req, res, next) => {
  try {
    const reader = await Reader.findById(req.params.id);
    if (!reader) return res.status(404).json({ error: "이용자를 찾을 수 없습니다." });
    const memberships = await Membership.find({ reader: reader._id }).populate("library");
    res.json({ reader, memberships });
  } catch (e) { next(e); }
});

router.post("/", async (req, res, next) => {
  try {
    const reader = await Reader.create(req.body);
    res.status(201).json(reader);
  } catch (e) { next(e); }
});

export default router;
