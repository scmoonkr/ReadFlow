import { Router } from "express";
import { ReadingActivity, Event } from "../models/index.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { reader, state } = req.query;
    const filter = {};
    if (reader) filter.reader = reader;
    if (state) filter.state = state;
    const items = await ReadingActivity.find(filter).populate("book").sort({ updatedAt: -1 });
    res.json({ count: items.length, items });
  } catch (e) { next(e); }
});

const STATE_EVENT = {
  WANT_TO_READ: "WANT_TO_READ",
  READING: "START_READING",
  FINISHED: "FINISH_READING",
  STOPPED: "STOP_READING",
};

/** 독서 상태 설정/변경 (읽고 싶어요 / 읽기 시작 / 다 읽었어요). upsert. */
router.put("/", async (req, res, next) => {
  try {
    const { reader, book, state, currentPage, totalPages } = req.body;
    const patch = { state };
    if (state === "READING") patch.startedAt = new Date();
    if (state === "FINISHED") patch.finishedAt = new Date();
    if (currentPage != null) patch.currentPage = currentPage;
    if (totalPages != null) patch.totalPages = totalPages;

    const activity = await ReadingActivity.findOneAndUpdate(
      { reader, book }, { $set: patch }, { new: true, upsert: true }
    );
    await Event.create({
      type: STATE_EVENT[state] || "READING_PROGRESS",
      subjectType: "ReadingActivity", subjectId: activity._id, actor: reader,
    });
    res.json(activity);
  } catch (e) { next(e); }
});

export default router;
