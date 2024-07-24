import { User } from "./user";

export type CommentType = {
  id: string;
  author: User;
  createdAt: Date;
  content: string;
  likes: number,
}

export type PostInfo = {
  id: string
  author: User;
  publishedAt: Date;
  content: {
      type: 'paragraph' | 'link';
      content: string;
  }[];
  comments?: CommentType[]
}

