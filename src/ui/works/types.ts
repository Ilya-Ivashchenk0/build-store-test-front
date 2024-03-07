import { StaticImageData } from 'next/image'

interface Work {
  img: StaticImageData
  title: string
  year: number
  description: string
  subtitle: string
}

export interface worksProps {
  heading: string
  works: Work[]
}
