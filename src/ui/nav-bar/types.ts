import { ReactElement } from 'react'

export interface navBarProps {
  isOpen: boolean
  toggle: () => void
  children: ReactElement
}
