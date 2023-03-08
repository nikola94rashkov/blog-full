import express, { Request, Response } from "express";
import { create } from "../services/blog";

const router = express.Router();

router.get("/", [], (req: Request, res: Response) => {
  console.log("read");
  res.end();
});

router.post("/", async (req: Request, res: Response) => {
  const item = {
    title: "title 1",
    imageUrl:
      "https://www.thespruce.com/thmb/p_UNZ5EDFNtNkNcHQA8wzmHLX-8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plants-with-big-flowers-4138211-hero-b10becb169064cc4b3c7967adc1b22e1.jpg",
    description: "description 1",
    date: new Date(),
    ownerId: "kolo1",
  };

  try {
    const result = await create(item);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
  res.end();
});

router.get("/:id", (req: Request, res: Response) => {
  console.log("get by id");
  res.end();
});

router.put("/:id", (req: Request, res: Response) => {
  console.log("update by id");
  res.end();
});

router.delete("/:id", (req: Request, res: Response) => {
  console.log("delete by id");
  res.end();
});

export { router as blogController };
