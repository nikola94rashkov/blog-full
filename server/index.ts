import express from "express";
import mongoose from "mongoose";
import { cors } from "./middlewares/cors";

const PORT = 3030;
const URL = "mongodb://localhost:27017/blogs";

(async () => {
  await mongoose.connect(URL);

  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get("/", (req: express.Request, res: express.Response) =>
    res.json({ message: "rest service operational" })
  );

  app.listen(PORT, () => console.log("REST on 3030"));
})();
