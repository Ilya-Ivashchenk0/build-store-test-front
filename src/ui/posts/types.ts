import { DetailedHTMLProps, HTMLAttributes } from 'react'

type Link = {
  text: string
  href: string
}

interface Post {
  title: string
  date: string
  description: string
  subtitle: string
}

export interface postsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: string
  link: Link
  posts: Post[]
}
