import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** Loan — 대출 Transaction. holding_id 를 대상으로 처리 (docs 14.2). */
const loanSchema = new Schema(
  {
    holding: { type: Schema.Types.ObjectId, ref: "Holding", required: true, index: true },
    reader: { type: Schema.Types.ObjectId, ref: "Reader", required: true, index: true },
    library: { type: Schema.Types.ObjectId, ref: "Library", index: true },
    loanedAt: { type: Date, default: Date.now },
    dueAt: { type: Date, required: true },
    returnedAt: { type: Date },
    renewCount: { type: Number, default: 0 },
    status: { type: String, enum: ["ACTIVE", "RETURNED", "OVERDUE"], default: "ACTIVE", index: true },
  },
  { timestamps: true, collection: "loans" }
);

export const Loan = mongoose.model("Loan", loanSchema);
