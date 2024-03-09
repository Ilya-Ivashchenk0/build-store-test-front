import { DetailedHTMLProps, HTMLAttributes } from 'react'

type Link = {
  text: string
  href: string
}

export interface headerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  links: Link[]
}
