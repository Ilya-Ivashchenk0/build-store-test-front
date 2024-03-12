import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Work {
  img: StaticImageData
  title: string
  year: number
  description: string
  subtitle: string
}

export interface workProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  work: Work
}
