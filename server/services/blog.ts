import { Blog, IBlog } from "../models/blog";

export const create = async (blog: IBlog) => {
  const result = new Blog(blog);

  await result.save();

  return result;
};
