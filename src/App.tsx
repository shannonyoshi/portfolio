import React, { FC, useState } from 'react';

import Header from "./components/header"
import Navigation from "./components/nav"
import Projects from "./components/proj"
import About from "./components/about"
import Resume from "./components/resume"

import { PageOpts } from "./types";

const App: FC = () => {
  const [page, setPage] = useState<PageOpts>("portfolio")
  return (
    <div className="App">
      <Header imageBG="seattle(eric-zhang)crop.jpg" altBG="Seattle Skyline" imageMe="../assets/ProfessionalPortrait.JPG" blurb="Hello!" />
      <Navigation setPage={setPage} />
      {page === "portfolio" ?
        <Projects /> :
        page === "resume" ?
          <Resume /> :
          <About />
      }
    </div>
  );
}

export default App;
