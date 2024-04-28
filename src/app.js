import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes/people.routes.js";
import { FRONTEND_URI } from "./config.js";

const app = express();

app.use(
  cors({
    origin: FRONTEND_URI || "http://localhost:4321"
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", routes);

export default app;
