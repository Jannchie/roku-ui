import { ReactNode } from 'react'

export interface CommentDataUser {
  name: ReactNode
  avatar?: ReactNode
  link?: string
}

export interface CommentData {
  id: string | number
  user: CommentDataUser
  content: string
  time?: ReactNode
  [key: string]: any
}

export type CommentDataWithReplies = CommentData & {
  replies?: CommentData[]
}

export interface CommentOptions {
  maxReplies?: number
  getMoreRepliesBtnText?: (cnt: number) => string
  refoldable?: boolean
}
