type Link = {
  text: string
  href: string
}

export interface navLinksProps {
  pathname: string
  links: Link[]
  toggle?: () => void
}
