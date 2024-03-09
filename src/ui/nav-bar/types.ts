import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'

export interface navBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean
  toggle: () => void
  children: ReactElement
}
