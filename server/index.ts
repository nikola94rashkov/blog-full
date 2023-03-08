import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import { cors } from "./middleware/cors";

import { blogController } from "./controllers/blog";

enum ServerData {
  port = 3030,
  url = "mongodb://127.0.0.1:27017/",
}

(async () => {
  await mongoose.connect(ServerData.url);

  const app: Express = express();

  app.use(express.json());
  app.use(cors());
  app.use("/blogs", blogController);

  app.get("/", (req: Request, res: Response) =>
    res.json({ message: "rest service operational" })
  );

  app.listen(ServerData.port, () => console.log("REST on 3030"));
})();
