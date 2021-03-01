import { ProjInter, ExpInter, EduInter, Skill } from "./types";

export const projList: ProjInter[] = [{
  id: 1,
  name: "Baking Unit Converter",
  role: "Front and Back End Development",
  description: "Allows users to convert ingredients for cooking and baking. Users input amount as decimal or fraction, starting unit, target unit, and ingredient name. The front end handles weight to weight and volume to volume conversions. The backend stores ingredient specific information, converts weight to volume and vice versa, and calls a 3rd party API for new ingredients. Creates an editable list of ingredients for ease of use.",
  stack: ["React", "Golang"],
  url: "https://bakingunits.com/",
  github: "https://github.com/shannonyoshi/unit-conversion",
  images: [{ src: "baking-units.png", alt: "Baking Units Homepage" }, { src: "baking-units-volume-chart.png", alt: "Baking Units Volume Chart" }, { src: "baking-units-custom-chart.png", alt: "Baking Units custom unit chart" }, { src: "baking-units-suggestion-form.png", alt: "Baking Units Suggestion Form" }]
}, {
  id: 2,
  name: "Match-Game",
  role: "Front End Development",
  description: "A front end only card game web application using only hooks for state management. Users can change the color scheme of the site, and play a game. The game consists of finding matches of 3 cards until all of the 81 unique cards have been drawn. Users can utilize hints when stuck.",
  stack: ["React with TypeScript"],
  url: "https://match-game.syoshi.dev/",
  github: "https://github.com/shannonyoshi/match-game",
  images: [{ src: "match-game-instructions-default.png", alt: "Instructions Default Mode" }, { src: "match-game-hint.png", alt: "Match Game Hint Default Mode" }, { src: "match-game-error-dark.png", alt: "Match Game Error Dark Mode" }, { src: "match-game-mono-matches.png", alt: "Match Game Matches Mono Mode" }, { src: "match-game-mono-dark.png", alt: "Match Game Instructions Mono-Dark Mode" },]
}, {
  id: 3,
  name: "Training in the 21st Century Website",
  role: "Front and Backend Development",
  description: "Worked with a client to create an updated website for a 3D Training Company using client images, colors, and copy. Netlify CMS ensures the client can add e-learnings, blog posts and update content on demand.",
  stack: ["Hugo with React admin portal", "Golang"],
  url: "https://www.traininginthe21stcentury.com/",
  github: "https://github.com/shannonyoshi/match-game",
  images: [{ src: "t21c-home.png", alt: "T21C Homepage" }, { src: "t21c-home-lower.png", alt: "T21C Homepage:Why use blended learning?" }, { src: "t21c-services.png", alt: "T21C Services Page" }]
},
]

export const expList: ExpInter[] = [{
  id: 1,
  role: "Facilities Coordinator",
  company: "Jones Lang LaSalle",
  location: "San Francisco",
  time: "November 2017 - March 2019",
  text: "Beginning as a contractor, and hired on as full-time staff a few months.",
  bullets: ["Maintained and ran a building with 100-140 employees by coordinating vendors, inventory and ordering of supplies, reorganizing storage system and processing invoices", "Worked to improve employee and client experiences by encouraging interagency mingling, improving amenities, planning and hosting happy hours, and organizing tournaments"],
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

export const skillsList: Skill[] = [{
  main: "Golang", sub: ["Hugo"]
}, {
  main: "Javascript", sub: ["React", "Node", "Express", "Jest"]
}, {
  main: "Python", sub: ["Django"]
}, {
  main: "PostgreSQL", sub: [""]
}
]