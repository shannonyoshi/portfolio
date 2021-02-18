import { ProjInter, ExpInter, EduInter } from "./types";

export const projList: ProjInter[] = [{
  id: 1,
  name: "Baking Unit Converter",
  role: "Front and Back End Development",
  description: "Can convert between volume and weight for ingredients, creates a list of converted ingredients to ease of use",
  stack: ["React", "Golang"],
  url: "https://bakingunits.com/",
  github: "https://github.com/shannonyoshi/unit-conversion",
  image: ""
}, {
  id: 2,
  name: "Match-Game",
  role: "Front End Development",
  description: "A front end only game web application to find matches of 3 in a card game with 81 unique cards",
  stack: ["React", "Golang"],
  url: "https://match-game.syoshi.dev/",
  github: "https://github.com/shannonyoshi/match-game",
  image: ""
}, {
  id: 3,
  name: "Training in the 21st Century Website",
  role: "Front and Backend Development",
  description: "Used Netlify CMS to create a company website",
  stack: ["Hugo with React admin portal", "Golang"],
  url: "https://www.traininginthe21stcentury.com/",
  github: "https://github.com/shannonyoshi/match-game",
  image: ""
},
]

export const expList: ExpInter[] = [{
  id: 1,
  role: "string",
  company: "string",
  time: "string",
  text: "string",
  bullets: ["string"],
}]

export const eduList: EduInter[] = [{
  id: 1,
  school: "Mount Holyoke College",
  time: "2009-2013",
  field: "B.A. in Russian Literature & Culture with a minor is history",
  subfield: "Minor: History",
}, {
  id: 2,
  school: "Lambda School",
  time: "2019-2020",
  field: "Course: Web Development",
}]

