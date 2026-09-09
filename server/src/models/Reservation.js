import { mongoose } from "../config/db.js";

const { Schema } = mongoose;

/** Reservation — 예약 Transaction. */
const reservationSchema = new Schema(
  {
    localBook: { type: Schema.Types.ObjectId, ref: "LocalBook", index: true },
    holding: { type: Schema.Types.ObjectId, ref: "Holding" },
    reader: { type: Schema.Types.ObjectId, ref: "Reader", required: true, index: true },
    library: { type: Schema.Types.ObjectId, ref: "Library", index: true },
    reservedAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["WAITING", "READY", "COMPLETED", "CANCELLED", "EXPIRED"],
      default: "WAITING",
      index: true,
    },
  },
  { timestamps: true, collection: "reservations" }
);

export const Reservation = mongoose.model("Reservation", reservationSchema);
