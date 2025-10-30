export type TechnologiesType = string[]

export interface LinksType {
  web: string
  github: string
}

export interface CaptureType {
  imageName: string
  alt: string
}

export interface ProjectType {
  capture: CaptureType
  title: string
  description: string
  technologies: TechnologiesType
  links: LinksType
}
