import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** Event / History — 의미 있는 업무·독서 변화만 기록 (docs 15).
 * 모든 DB UPDATE 를 Event 로 남기지 않는다. */
const eventSchema = new Schema(
  {
    // LOAN_CREATED, LOAN_RETURNED, HOLDING_REGISTERED, START_READING, FINISH_READING ...
    type: { type: String, required: true, index: true },
    subjectType: String, // Holding / Loan / Reader / GlobalBook ...
    subjectId: { type: Schema.Types.ObjectId, index: true },
    actor: { type: Schema.Types.ObjectId, ref: "Reader" },
    library: { type: Schema.Types.ObjectId, ref: "Library" },
    payload: Schema.Types.Mixed,
    occurredAt: { type: Date, default: Date.now, index: true },
  },
  { collection: "events" }
);

export const Event = mongoose.model("Event", eventSchema);
