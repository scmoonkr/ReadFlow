import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** Holding — 실제로 존재하는 책 한 권. 한 권이라도 반드시 Holding 으로 관리 (docs 10).
 * 대표 서지와 다른 예외 판정보만 *_override 로 기록. */
const holdingSchema = new Schema(
  {
    localBook: { type: Schema.Types.ObjectId, ref: "LocalBook", required: true, index: true },
    accessionNumber: { type: String, index: true }, // 등록번호 (도서관 실물 주요 식별자)
    barcode: { type: String, index: true },
    location: String,
    acquiredAt: Date,
    purchasePrice: Number,
    // AVAILABLE / LOANED / RESERVED / LOST / REPAIR / WITHDRAWN / DISCARDED / TRANSFERRED
    status: {
      type: String,
      enum: [
        "AVAILABLE", "LOANED", "RESERVED", "LOST",
        "REPAIR", "WITHDRAWN", "DISCARDED", "TRANSFERRED",
      ],
      default: "AVAILABLE",
      index: true,
    },
    // 예외 판정보 override (docs 10.3)
    editionStatementOverride: String,
    publicationDateOverride: Date,
    priceOverride: Number,
    pagesOverride: Number,
    sizeOverride: String,
  },
  { timestamps: true, collection: "holdings" }
);

export const Holding = mongoose.model("Holding", holdingSchema);
