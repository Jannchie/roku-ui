import { ReactNode } from 'react';

export type CommentDataUser = {
  name: ReactNode;
  avatar?: ReactNode;
  link?: string;
}

export type CommentData = {
  id: string | number;
  user: CommentDataUser;
  content: ReactNode;
  time?: ReactNode;
  [key: string]: any;
}

export type CommentDataWithReplies = CommentData & {
  replies?: CommentData[];
}

export type CommentOptions = {
  maxReplies?: number;
  getMoreRepliesBtnText?: (cnt: number) => string;
  refoldable?: boolean;
}
