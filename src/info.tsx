import { ProjInter, ExpInter, EduInter } from "./types";

export const projList: ProjInter[] = [{
  id: 1,
  name: "Baking Unit Converter",
  role: "Front and Back End Development",
  description: "Allows users to convert ingredients for cooking and baking. Users input amount as decimal or fraction, starting unit, target unit, and ingredient name. The front end handles weight to weight and volume to volume conversions. The backend stores ingredient specific information, converts weight to volume and vice versa, and calls a 3rd party API for new ingredients. Creates an editable list of ingredients for ease of use.",
  stack: ["React", "Golang"],
  url: "https://bakingunits.com/",
  github: "https://github.com/shannonyoshi/unit-conversion",
  image: "baking-units.png"
}, {
  id: 2,
  name: "Match-Game",
  role: "Front End Development",
  description: "A front end only card game web application using only hooks for state management. Users can change the color scheme of the site, and play a game. The game consists of finding matches of 3 cards until all of the 81 unique cards have been drawn. Users can utilize hints when stuck.",
  stack: ["React with TypeScript"],
  url: "https://match-game.syoshi.dev/",
  github: "https://github.com/shannonyoshi/match-game",
  image: "baking-units.png"
}, {
  id: 3,
  name: "Training in the 21st Century Website",
  role: "Front and Backend Development",
  description: "Used Netlify CMS to create a company website",
  stack: ["Hugo with React admin portal", "Golang"],
  url: "https://www.traininginthe21stcentury.com/",
  github: "https://github.com/shannonyoshi/match-game",
  image: "baking-units.png"
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

