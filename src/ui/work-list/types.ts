import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Work {
  img: StaticImageData
  title: string
  year: number
  description: string
  subtitle: string
}

export interface worksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: string
  works: Work[]
}
