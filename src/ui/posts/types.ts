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

export interface postsProps {
  heading: string
  link: Link
  posts: Post[]
}
