import { Router } from "express";
import { AcquisitionRequest, Event } from "../models/index.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { library, status } = req.query;
    const filter = {};
    if (library) filter.library = library;
    if (status) filter.status = status;
    const items = await AcquisitionRequest.find(filter).sort({ createdAt: -1 }).limit(200);
    res.json({ count: items.length, items });
  } catch (e) { next(e); }
});

router.post("/", async (req, res, next) => {
  try {
    const request = await AcquisitionRequest.create(req.body);
    await Event.create({ type: "REQUEST_CREATED", subjectType: "AcquisitionRequest", subjectId: request._id });
    res.status(201).json(request);
  } catch (e) { next(e); }
});

/** 상태 전이: 신청 → 승인/반려 → 주문 → 입고 → 완료. */
router.patch("/:id/status", async (req, res, next) => {
  try {
    const { status } = req.body;
    const request = await AcquisitionRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!request) return res.status(404).json({ error: "희망도서 신청을 찾을 수 없습니다." });
    await Event.create({ type: `REQUEST_${status}`, subjectType: "AcquisitionRequest", subjectId: request._id });
    res.json(request);
  } catch (e) { next(e); }
});

export default router;
