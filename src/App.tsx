import React, { FC, useState } from 'react';

import "./scss/app.scss"

import Header from "./components/header"
import Navigation from "./components/nav"
import Projects from "./components/proj"
import About from "./components/about"
import Resume from "./components/resume"

import { PageOpts } from "./types";

const App: FC = () :JSX.Element=> {
  const [page, setPage] = useState<PageOpts>("about")
  return (
    <div className="App">
      <Header imageBG="seattle(eric-zhang)crop.jpg" altBG="Seattle Skyline" imageMe="../assets/ProfessionalPortrait.JPG" blurb="Hello!" />
      <section className="page">
        <Navigation setPage={setPage} page={page} />
        {page === "portfolio" ?
          <Projects /> :
          page === "resume" ?
            <Resume /> :
            <About />
        }
      </section>
      <footer>
      <img src={`/assets/seattle(eric-zhang)crop.jpg`} alt="upside down seattle skyline" className="bg" />
      </footer>
    </div>
  );
}

export default App;
