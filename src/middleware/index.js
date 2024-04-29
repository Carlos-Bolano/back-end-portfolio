import { FRONTEND_URI } from "../config";

export const middleware = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", FRONTEND_URI);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
