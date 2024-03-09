import { DetailedHTMLProps, HTMLAttributes } from 'react'

type FooterLink = {
  src: string
  href: string
}

export interface footerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string
  links: FooterLink[]
}
