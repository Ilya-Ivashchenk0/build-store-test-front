import { DetailedHTMLProps, HTMLAttributes } from 'react'

type Link = {
  text: string
  href: string
}

export interface navLinksProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  pathname: string
  links: Link[]
  toggle?: () => void
}
