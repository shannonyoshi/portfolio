import { ProjInter, ExpInter, EduInter, HobbyInter } from "./types";

export const projList: ProjInter[] = [{
  id: 1,
  name: "Baking Unit Converter",
  description: "Converts ingredient measurements between weight and volume. Uses data fetched from 3rd party API.",
  stack: ["React", "Golang", "PostgreSQL"],
  url: "https://bakingunits.com/",
  github: "https://github.com/shannonyoshi/unit-conversion",
  images: [
    { srcset: ["baking-units-768w.jpg", "baking-units-1280w.jpg", "baking-units-3168w.jpg"], src: "baking-units-3168w.jpg", alt: "Baking Units Homepage" },
    { srcset: ["baking-units-volume-chart-768w.jpg", "baking-units-volume-chart-1280w.jpg", "baking-units-volume-chart-3168w.jpg"], src: "baking-units-volume-chart-3168w.jpg", alt: "Baking Units Volume Chart" },
    { srcset: ["baking-units-custom-chart-768w.jpg", "baking-units-custom-chart-1280w.jpg", "baking-units-custom-chart-3168w.jpg"], src: "baking-units-custom-chart-3168w.jpg", alt: "Baking Units custom unit chart" },
    { srcset: ["baking-units-suggestion-form-768w.jpg", "baking-units-suggestion-form-1280w.jpg", "baking-units-suggestion-form-3168w.jpg"], src: "baking-units-suggestion-form-3168w.jpg", alt: "Baking Units Suggestion Form" }]
}, {
  id: 2,
  name: "Match-Game",
  description: "Pattern recognition card game built with Typescript and React.",
  stack: ["React", "TypeScript"],
  url: "https://match-game.syoshi.dev/",
  github: "https://github.com/shannonyoshi/match-game",
  images: [
    { srcset: ["match-game-instructions-768w.jpg", "match-game-instructions-1280w.jpg", "match-game-instructions-3168w.jpg"], src: "match-game-instructions-3168w.jpg", alt: "Instructions Default Mode" },
    { srcset: ["match-game-hint-768w.jpg", "match-game-hint-1280w.jpg", "match-game-hint-3168w.jpg"], src: "match-game-hint-3168w.jpg", alt: "Match Game Hint Default Mode" },
    { srcset: ["match-game-error-dark-768w.jpg", "match-game-error-dark-1280w.jpg", "match-game-error-dark-3168w.jpg"], src: "match-game-error-dark-3168w.jpg", alt: "Match Game Error Dark Mode" },
    { srcset: ["match-game-mono-matches-768w.jpg", "match-game-mono-matches-1280w.jpg", "match-game-mono-matches-3168w.jpg"], src: "match-game-mono-matches-3168w.jpg", alt: "Match Game Matches Mono Mode" },
    { srcset: ["match-game-mono-dark-768w.jpg", "match-game-mono-dark-1280w.jpg", "match-game-mono-dark-3168w.jpg"], src: "match-game-mono-dark-3168w.jpg", alt: "Match Game Instructions Mono-Dark Mode" },]
}, {
  id: 3,
  name: "Training in the 21st Century Website",
  description: "Migrated Wordpress site to Netlify CMS.",
  stack: ["Hugo", "React", "Netlify"],
  url: "https://www.traininginthe21stcentury.com/",
  github: "https://github.com/shannonyoshi/netlify-hugo-cms",
  images: [
    { srcset: ["t21c-home-768w.jpg", "t21c-home-1280w.jpg", "t21c-home-3168w.jpg"], src: "t21c-home-3168w.jpg", alt: "T21C Homepage" },
    { srcset: ["t21c-home-lower-768w.jpg", "t21c-home-lower-1280w.jpg", "t21c-home-lower-3168w.jpg"], src: "t21c-home-lower-3168w.jpg", alt: "T21C Homepage:Why use blended learning?" },
    { srcset: ["t21c-services-768w.jpg", "t21c-services-1280w.jpg", "t21c-services-3168w.jpg"], src: "t21c-services-3168w.jpg", alt: "T21C Services Page" }]
},
]

export const expList: ExpInter[] = [{
  id: 1,
  role: "Facilities Coordinator",
  company: "Jones Lang LaSalle",
  location: "San Francisco",
  time: "November 2017 - March 2019",
  text: "Managed a commercial building with 100-140 employees. Originally hired as a contractor, then transitioned into full-time employment",
  bullets: ["Contrived projects to maximize improvements while maintaining costs", "Improved and ran a building with 100-140 employees by increasing amenities; coordinating vendors, inventory, and ordering of supplies; creating a storage system; and processing invoices", "Worked to improve employee and client experiences by encouraging and planning interagency social events"],
}, {
  id: 2,
  role: "Contract Administrator",
  company: "Various Companies",
  location: "San Francisco",
  time: "September 2016 - November 2017",
  text: "Held administrative roles at financial firms",
  bullets: ["Managed logistics including flights, hotels, and expense reports for business trips for two Vice Presidents and a Managing Director", "Ordered daily catering, organized meetings and building access"]

}, {
  id: 3,
  role: "Sourcer",
  company: "T3 Intelligence",
  location: "San Francisco",
  time: "October 2015 - September 2016",
  text: "Used boolean search parameters to find qualified candidates",
  bullets: ["Collected feedback and requirements from clients to define search requirements", "Reviewed 2 colleagues’ search queries and advised on methods to improve", "Collaborated with a team to source an average of 100 candidates per role to front-load the recruitment funnel for opportunities in the consumer packaged goods, mortgage, and banking industries"]
}
]

export const eduList: EduInter[] = [{
  id: 1,
  school: "Mount Holyoke College",
  time: "2009-2013",
  fieldLabel: "Degree",
  field: "B.A. in Russian Literature & Culture",
  subfieldLabel: "Minor",
  subfield: "History",
}, {
  id: 2,
  school: "Lambda School",
  time: "2019-2020",
  fieldLabel: "Course",
  field: "Web Development",
}]

export const skillsList: string[] = ["Golang", "Hugo", "Javascript", "Typescript", "React", "Node", "Express", "Jest", "Python", "Django", "PostgreSQL", "HTML", "CSS", "SCSS"]

export const hobbyBlurb: string = "Check out a few of my current hobbies below. In addition to leather and metal working, I like to spend my spare time cycling, baking, playing ukulele, and camping."

export const hobbyList: HobbyInter[] = [
  {
    id: 1,
    name: "Metal Working",
    blurb: "I took lost wax casting and metal fabrication courses at City College of San Francisco for a few years. Then, I gained access to a fabrication shop where I learned to weld and worked on larger projects. ",
    projects: [
      {
        id: 1,
        name: "Carved Steel Leaf",
        description: 'This wall-mounted leaf is carved from mild steel with welded mounting brackets. First, cut from a 1/2" sheet of steel using a plasma cutter. Followed by many hours of grinding with an angle grinder.(After finishing the grinding on this project, I promised myself that I would never grind steel like this again--softer metals only.) Then several hours of sanding, before welding on the mounting brackets. I finished the piece off with patina and a clear coat to prevent rust.',
        images: [{ src: "leaf-patina.jpg", alt: "Leaf after application of patina" }, { src: "leaf-polishing.jpg", alt: "Leaf after polishing" }, { src: "leaf-grinding.jpg", alt: "Leaf after grinding" }, { src: "leaf-start.jpg", alt: "Partially ground leaf" }],
        directory: "leaf"
      },
      {
        id: 2,
        name: "Married Metal Projects",
        description: "Married metal is a process to cut and solder pieces together into a patterned flat sheet of metal. I designed and made a functional box clasp and closing storage tubes (pictured below) with this technique. All are a combination of of brass, copper, and silver solder.",
        images: [{ src: "married-metal.jpg", alt: "Married metal box clasp, and tubes" }, { src: "mm-paisley-3.jpg", alt: "All pieces cut and fit into place" }, { src: "mm-paisley-2.jpg", alt: "Most pieces cut" }, { src: "mm-paisley-1.jpg", alt: "First pieces cut" },],
        directory: "married-metal"
      },
    ]
  },
  {
    id: 2,
    name: "Leather Working",
    blurb: "I started teaching myself leather working at the end of 2019 through online tutorials. I'm really enjoying figuring out how to add and adhere metal elements to create unique items.",
    projects: [
      {
        id: 1,
        name: "Blue Alhambra Purse",
        description: "The brass design was inspired by the Alhambra Palace in Grenada, Spain. This was my first time combining metal and leather and my first self-drafted leather pattern.",
        images: [{ src: "blue-finished-w-strap.jpg", alt: "Finished purse with strap" }, { src: "blue-finished-front.jpg", alt: "Finished Blue Purse" }, { src: "blue-finished-corner.jpg", alt: "Angled Finished Blue Purse" }, { src: "blue-sides.jpg", alt: "Finished sides" }, { src: "blue-side-pieces.jpg", alt: "Unfinished sides" },],
        directory: "blue-purse"
      },
      {
        id: 2,
        name: "Purple Kojitsugani and Sakura Purse",
        description: "My second self-drafted pattern, borrowing inspiration from my Japanese heritage. In this project I explored a new method of attaching metal to leather using prongs.",
        images: [{ src: "small-purple-finished.jpg", alt: "Finished purse front" }, { src: "purple-shaping.jpg", alt: "Shaping the leather around a form" }, { src: "purple-metal-2.jpg", alt: "Finished metal cutting and filing" }, { src: "purple-metal-1.jpg", alt: "Metal cutting progress pic" },],
        directory: "small-purple-purse"
      },
      {
        id: 3,
        name: "Art-Deco Purple Purse",
        description: "I originally created the center design for a different project, then expanded on it for this purse. I improved upon a previous design to include an additional interior pocket, and key clip",
        images: [{ src: "round-purple-finished.jpg", alt: "Finished purse front" }, { src: "round-purple-finished-side.jpg", alt: "Finished purse side angle" }, { src: "purple-interior.jpg", alt: "Interior of unfinished purse" }, { src: "purple-side-front.jpg", alt: "Front and side of purse" }, { src: "purple-side-2.jpg", alt: "Sewn side of purse" }, { src: "purple-side-1.jpg", alt: "Layed out side of purse" }, { src: "purple-metal-3.jpg", alt: "" }, { src: "purple-metal-2.jpg", alt: "" }, { src: "purple-metal-1.jpg", alt: "" }],
        directory: "round-purple-purse"
      },
      {
        id: 4,
        name: "Wallets",
        description: "So far I have made 3 bifold wallets. It's gratifying to see so much improvement. I've enjoyed coming up with new card slot patterns.",
        images: [{ src: "wallets-finished.jpg", alt: "Finished wallets open" }, { src: "wallets-finished-closed.jpg", alt: "Closed finished wallets" }, { src: "wallet1-partially-sewn.jpg", alt: "Partially sewn wallet" }, { src: "wallet1-pieces.jpg", alt: "Assembled pieces of the wallet" }, { src: "wallet2-partially-sewn.jpg", alt: "Partially sewn wallet" }, { src: "wallet2-stacked.jpg", alt: "Assembled pieces of the wallet" }, { src: "wallet2-separate.jpg", alt: "Separated card slot pieces" }],
        directory: "wallets"
      }

    ]
  }
]




