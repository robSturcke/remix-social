import { db } from "./db.server";
export type { Post } from '@prisma/client';

export const getPosts = () => db.post.findMany();