import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** Reader — 독립 Entity. 특정 도서관 회원에 종속되지 않는다 (docs 12). */
const readerSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, index: true },
    phone: String,
    avatarColor: String,
    settings: {
      visibility: { type: String, enum: ["PUBLIC", "FRIENDS", "PRIVATE"], default: "FRIENDS" },
    },
  },
  { timestamps: true, collection: "readers" }
);

export const Reader = mongoose.model("Reader", readerSchema);
