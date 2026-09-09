import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** Global Book Master — 플랫폼 전체 공통 대표 책 정보. book_id 가 최종 고유 ID, isbn 은 검색/매칭용. */
const editionHistorySchema = new Schema(
  {
    editionStatement: String, // 판사항 (초판, 2판...)
    publicationDate: Date,
    price: Number,
    pages: Number,
    size: String,
  },
  { _id: true }
);

const globalBookSchema = new Schema(
  {
    title: { type: String, required: true, index: "text" },
    author: { type: String },
    publisher: { type: String },
    isbn: { type: String, index: true }, // UNIQUE 강제하지 않음 (docs 5.2)
    publicationDate: { type: Date },
    price: { type: Number },
    editionStatement: { type: String },
    pages: { type: Number },
    size: { type: String },
    cover: { type: String },
    summary: { type: String },
    toc: { type: String },
    subject: { type: String },
    classification: { type: String },
    editionHistory: [editionHistorySchema],
    // PENDING / VERIFIED / ACTIVE / MERGED / ARCHIVED
    status: {
      type: String,
      enum: ["PENDING", "VERIFIED", "ACTIVE", "MERGED", "ARCHIVED"],
      default: "PENDING",
      index: true,
    },
    mergedInto: { type: Schema.Types.ObjectId, ref: "GlobalBook" },
  },
  { timestamps: true, collection: "global_books" }
);

export const GlobalBook = mongoose.model("GlobalBook", globalBookSchema);
