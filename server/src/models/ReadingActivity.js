import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** ReadingActivity — 독서 활동은 기본적으로 GlobalBook 대상 (docs 11, 18).
 * 소장/대출과 분리된 관계. state 는 현재 상태, progress 는 선택적. */
const readingActivitySchema = new Schema(
  {
    reader: { type: Schema.Types.ObjectId, ref: "Reader", required: true, index: true },
    book: { type: Schema.Types.ObjectId, ref: "GlobalBook", required: true, index: true },
    state: {
      type: String,
      enum: ["WANT_TO_READ", "READING", "FINISHED", "STOPPED"],
      default: "WANT_TO_READ",
      index: true,
    },
    startedAt: Date,
    finishedAt: Date,
    currentPage: Number,
    totalPages: Number,
    rating: Number,
    review: String,
  },
  { timestamps: true, collection: "reading_activities" }
);

readingActivitySchema.index({ reader: 1, book: 1 }, { unique: true });

export const ReadingActivity = mongoose.model("ReadingActivity", readingActivitySchema);
