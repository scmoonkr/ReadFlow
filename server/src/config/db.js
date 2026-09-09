import mongoose from "mongoose";
import { buildMongoUri, config } from "./env.js";

export async function connectDB() {
  const uri = buildMongoUri();
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
  console.log(`[db] MongoDB 연결됨 → ${config.mongo.addr}/${config.mongo.db}`);
  return mongoose.connection;
}

export { mongoose };
