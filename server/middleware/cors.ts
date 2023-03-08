import { Response, Request, NextFunction } from "express";

export const cors = () => (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, HEAD, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "X-Authorization");
  next();
};
