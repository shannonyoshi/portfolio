import { ProjInter, ExpInter, EduInter, Skill, HobbyInter } from "./types";

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
  main: "PostgreSQL", sub: []
}
]

export const hobbyProjs: HobbyInter[] = [
  {
    id: 1,
    name: "Carved Steel Leaf",
    description: 'This wall-mounted leaf is carved from mild steel with welded mounting brackets. First, cut from a 1/2" sheet of steel using a plasma cutter. Followed by many hours of grinding with an angle grinder.(After finishing the grinding on this project, I promised myself that I would never grind steel like this again--softer metals only.) Then several hours of sanding, before welding on the mounting brackets. I finished the piece off with patina and a clear coat to prevent rust.',
    images: [{ src: "leaf-patina.jpg", alt: "Leaf after application of patina" }, { src: "leaf-polishing.jpg", alt: "Leaf after polishing" }, { src: "leaf-grinding.jpg", alt: "Leaf after grinding" }, { src: "leaf-start.jpg", alt: "Partially ground leaf" }],
    directory:"leaf"
  },
  {
    id: 2,
    name: "Blue Alhambra Purse",
    description: "The brass design was inspired by the Alhambra Palace in Grenada, Spain. This was my first time combining metal and leather and my first self-drafted leather pattern.",
    images: [{ src: "blue-finished-front.jpg", alt: "Finished Blue Purse" }, { src: "blue-finished-corner.jpg", alt: "Angled Finished Blue Purse" }, { src: "blue-side-pieces.jpg", alt: "Unfinished sides" }, { src: "blue-sides.jpg", alt: "Finished sides" }],
    directory:"blue-purse"
  }
  ,
  {
    id: 3,
    name: "Purple Kojitsugani and Sakura Purse",
    description: "My second self-drafted pattern, borrowing inspiration from my Japanese heritage. In this project I explored a new method of attaching metal to leather using prongs.",
    images: [{ src: "purple-metal-1.jpg", alt: "Metal cutting progress pic" }, { src: "purple-metal-2.jpg", alt: "Finished metal cutting and filing" }, { src: "purple-shaping", alt: "Shaping the leather around a form" }],
    directory:"small-purple-pure"
  },
  {
    id: 4,
    name: "Art-Deco Purple Purse",
    description: "Worked with a client to create an updated website for a 3D Training Company using client images, colors, and copy. Netlify CMS ensures the client can add e-learnings, blog posts and update content on demand.",
    images: [{ src: "t21c-home.png", alt: "" }, { src: "t21c-home.png", alt: "" },],
    directory:"round-purple-purse"
  },
  {
    id: 5,
    name: "Married Metal Projects",
    description: "Married metal is a process to cut and solder pieces together into a patterned flat sheet of metal. These are a functional box clasp, closing storage tubes. I lost studio access before being able to finish the paisley tube, but I look forward to finishing it when I have access to the required equipment",
    images: [{ src: "married-metal.jpg", alt: "Married metal box clasp, and tubes" }, { src: "mm-paisley-1.jpg", alt: "First pieces cut" }, { src: "mm-paisley-2.jpg", alt: "Most pieces cut" }, { src: "mm-paisley-3.jpg", alt: "All pieces cut and fit into place" }],
    directory:"married-metal"
  },
  {
    id: 6,
    name: "Wallets",
    description: "So far I have made 3 bifold wallets. It's gratifying to see so much improvement. I've enjoyed coming up with new card slot patterns.",
    images: [{ src: "wallet1-partially-sewed.jpg", alt: "Partially sewed wallet" }, { src: "wallet1-pieces.jpg", alt: "Assembled pieces of the wallet" }, { src: "wallet2-partially-sewed.jpg", alt: "Partially sewed wallet" }, { src: "wallet2-pieces-stacked", alt: "Assembled pieces of the wallet" }, { src: "wallet2-pieces-separated.jpg", alt: "Separated card slot pieces" }],
    directory:"wallets"
  }
]
