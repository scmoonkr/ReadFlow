import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** Membership — Reader 와 Library 의 관계. 회원번호는 도서관 로컬 정보 (docs 13). */
const membershipSchema = new Schema(
  {
    reader: { type: Schema.Types.ObjectId, ref: "Reader", required: true, index: true },
    library: { type: Schema.Types.ObjectId, ref: "Library", required: true, index: true },
    memberNo: { type: String, required: true }, // 도서관 자체 회원번호
    joinedAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["ACTIVE", "SUSPENDED", "EXPIRED", "WITHDRAWN"],
      default: "ACTIVE",
      index: true,
    },
  },
  { timestamps: true, collection: "memberships" }
);

export const Membership = mongoose.model("Membership", membershipSchema);
