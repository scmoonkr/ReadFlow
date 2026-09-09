import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config/env.js";
import { connectDB } from "./config/db.js";
import api from "./routes/index.js";

const app = express();

app.use(cors({ origin: config.corsOrigins, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.json({ service: "ReadFlow API", port: config.port }));
app.use("/api", api);

// 404
app.use((req, res) => res.status(404).json({ error: "요청한 경로를 찾을 수 없습니다." }));

// 에러 핸들러
app.use((err, req, res, next) => {
  console.error("[error]", err.message);
  res.status(err.status || 500).json({ error: err.message || "서버 오류" });
});

async function start() {
  try {
    await connectDB();
  } catch (e) {
    console.error("[db] 연결 실패 — API 는 기동하되 DB 기능은 제한됩니다:", e.message);
  }
  app.listen(config.port, () => {
    console.log(`[server] ReadFlow API → http://localhost:${config.port}`);
  });
}

start();
