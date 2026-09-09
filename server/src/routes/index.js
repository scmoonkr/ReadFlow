import { Router } from "express";
import globalBooks from "./globalBooks.routes.js";
import localBooks from "./localBooks.routes.js";
import holdings from "./holdings.routes.js";
import loans from "./loans.routes.js";
import reading from "./reading.routes.js";
import readers from "./readers.routes.js";
import acquisitions from "./acquisitions.routes.js";
import events from "./events.routes.js";

const api = Router();

api.get("/health", (req, res) => res.json({ ok: true, service: "readflow-server" }));

api.use("/global-books", globalBooks);
api.use("/local-books", localBooks);
api.use("/holdings", holdings);
api.use("/loans", loans);
api.use("/reading", reading);
api.use("/readers", readers);
api.use("/acquisitions", acquisitions);
api.use("/events", events);

export default api;
