import { Router } from "express";
import { Event } from "../models/index.js";

const router = Router();

/** 이력 조회 (활동/Timeline 용). */
router.get("/", async (req, res, next) => {
  try {
    const { actor, subjectId, type } = req.query;
    const filter = {};
    if (actor) filter.actor = actor;
    if (subjectId) filter.subjectId = subjectId;
    if (type) filter.type = type;
    const items = await Event.find(filter).sort({ occurredAt: -1 }).limit(100);
    res.json({ count: items.length, items });
  } catch (e) { next(e); }
});

export default router;
