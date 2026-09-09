import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** Local Book Master — 도서관/개인이 GlobalBook 에 대해 관리하는 로컬 책 정보.
 * 값이 없으면 Global 값을 fallback (docs 9.2). 도서관/개인 동일 구조. */
const localBookSchema = new Schema(
  {
    ownerType: { type: String, enum: ["LIBRARY", "READER"], required: true, index: true },
    ownerId: { type: Schema.Types.ObjectId, required: true, index: true },
    book: { type: Schema.Types.ObjectId, ref: "GlobalBook", required: true, index: true },
    localClassification: String, // 로컬 분류 / 청구기호
    localSubject: String,
    localTags: [String],
    localMemo: String,
    collection: String,
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "ARCHIVED"],
      default: "ACTIVE",
      index: true,
    },
  },
  { timestamps: true, collection: "local_books" }
);

export const LocalBook = mongoose.model("LocalBook", localBookSchema);
