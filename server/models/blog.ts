import mongoose, { Schema, Types, model } from "mongoose";

export interface IBlog {
  title: string;
  imageUrl: string;
  description: string;
  date: Date;
  ownerId: string;
}

const blogSchema = new Schema<IBlog>({
  title: { type: String },
  imageUrl: { type: String },
  description: { type: String },
  date: { type: Date },
  ownerId: { type: String },
});

export const Blog = model<IBlog>("Blog", blogSchema);
