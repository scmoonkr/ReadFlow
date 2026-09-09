import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** AcquisitionRequest — 수서(희망도서) Transaction.
 * 신청 → 선정 → 주문 → 입고 → 등록 (docs 22.6). */
const acquisitionRequestSchema = new Schema(
  {
    library: { type: Schema.Types.ObjectId, ref: "Library", index: true },
    requestedBy: { type: Schema.Types.ObjectId, ref: "Reader" },
    title: { type: String, required: true },
    author: String,
    isbn: String,
    publisher: String,
    reason: String,
    status: {
      type: String,
      enum: ["REQUESTED", "APPROVED", "REJECTED", "ORDERED", "RECEIVED", "COMPLETED"],
      default: "REQUESTED",
      index: true,
    },
  },
  { timestamps: true, collection: "acquisition_requests" }
);

export const AcquisitionRequest = mongoose.model("AcquisitionRequest", acquisitionRequestSchema);
