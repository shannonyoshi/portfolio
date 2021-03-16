export interface ProjInter {
  id: number,
  name: string,
  role: string,
  description: string,
  stack: string[],
  url: string,
  github: string,
  images: Image[]
}

export interface Image {
  src: string,
  alt: string
}

export interface ExpInter {
  id: number,
  role: string,
  company: string,
  location: string,
  time: string,
  text: string,
  bullets: string[],
}

export interface EduInter {
  id: number,
  school: string,
  time: string,
  fieldLabel: string,
  field: string,
  subfieldLabel?:string,
  subfield?: string,
}

export interface Skill {
  main: string,
  sub: string[]
}

export interface HobbyInter {
  id: number,
  name: string,
  description: string,
  images: Image[],
  directory?:string
}
  
export type PageOpts = "portfolio" | "resume" | "about"