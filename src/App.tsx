import React, { FC, useState } from 'react';

import "./scss/app.scss"

import Header from "./components/header"
import Navigation from "./components/nav"
import Projects from "./components/proj"
import About from "./components/about"
import Resume from "./components/resume"
import Footer from "./components/footer"

import { PageOpts } from "./types";

const App: FC = (): JSX.Element => {
  const [page, setPage] = useState<PageOpts>("portfolio")
  return (
    <div className="App">
      <div className="contact-header">
        <h3>Contact</h3>
        <p>shannon.yoshikawa<span><i className="fas fa-at" /></span>gmail.com</p>
        <a href="https://github.com/shannonyoshi/" target="_blank"><i className="fab fa-github" /></a>
        <a href="https://www.linkedin.com/in/shannon-yoshi/"><i className="fab fa-linkedin" /></a>
      </div>
      <Header imageBG="seattle(eric-zhang)crop.jpg" altBG="Seattle Skyline" imageMe="../assets/professionalportrait(400px).jpg" blurb="Hello!" />
      <section className="page">
        <Navigation setPage={setPage} page={page} />
        {page === "portfolio" ?
          <Projects /> :
          page === "resume" ?
            <Resume /> :
            <About />
        }
      </section>
      <Footer />
    </div>
  );
}

export default App;
