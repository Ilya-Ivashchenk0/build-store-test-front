import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface authLinksProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  pathname: string
  toggle?: () => void
}
