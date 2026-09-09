import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** Library — 도서관 Entity. */
const librarySchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, index: true },
    address: String,
    phone: String,
  },
  { timestamps: true, collection: "libraries" }
);

export const Library = mongoose.model("Library", librarySchema);
