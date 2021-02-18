import React, { FC } from 'react';

import Header from "./components/header"

import Projects from "./components/proj"

const App: FC = () => {
  return (
    <div className="App">
      <Header imageBG="seattle(eric-zhang)crop.jpg" altBG="Seattle Skyline" imageMe="../assets/ProfessionalPortrait.JPG" blurb="Hello!" />
      <Projects />
    </div>
  );
}

export default App;
