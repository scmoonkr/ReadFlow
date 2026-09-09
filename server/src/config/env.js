import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 루트 .env 를 우선 로드하고, server/.env 가 있으면 덮어쓴다.
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });
dotenv.config({ path: path.resolve(__dirname, "../../.env"), override: true });

export const config = {
  port: Number(process.env.SERVER_PORT || 9910),
  mongo: {
    addr: process.env.MONGODB_ADDR,
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PWD,
    db: process.env.MONGODB_DB || "LibrarySchool",
    readingDb: process.env.MONGODB_READING || "Reading",
  },
  // Reader(9913) / Library(9912) / Manager(9911) dev 오리진 허용
  corsOrigins: [
    "http://localhost:9911",
    "http://localhost:9912",
    "http://localhost:9913",
  ],
};

export function buildMongoUri() {
  const { addr, username, password, db } = config.mongo;
  if (!addr) throw new Error("MONGODB_ADDR 환경변수가 설정되지 않았습니다 (.env 확인)");
  const auth = username ? `${encodeURIComponent(username)}:${encodeURIComponent(password)}@` : "";
  return `mongodb://${auth}${addr}/${db}?authSource=admin`;
}
