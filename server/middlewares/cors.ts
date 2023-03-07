import express from "express";

export const cors =
  () =>
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, HEAD, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "X-Authorization");
    next();
  };
