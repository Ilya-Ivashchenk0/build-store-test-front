import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Post {
  title: string
  date: string
  description: string
  subtitle: string
}

export interface postProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  post: Post
}