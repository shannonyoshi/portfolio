import React, { FC } from "react";

import { HobbyInter } from "../types";
import { hobbyProjs } from "../info";

import Slider from "./img-slider";
import "../scss/about.scss";

const About: FC = (): JSX.Element => {
  return (
    <div className="page-about">
      <h3>Hobbies</h3>

      <p>I'm not really sure what to say here, so I'll just share some of my hobbies and projects.</p>

      {hobbyProjs.map(proj => <Hobby hobby={proj} key={`hobby-${proj.id}`} />)}

    </div>
  )
}

type HobbyProps = {
  hobby: HobbyInter,
}

const Hobby: FC<HobbyProps> = ({ hobby }): JSX.Element => {
  return (
    <div className="hobby-wrapper">
      <h4>{hobby.name}</h4>

      <p>{hobby.description}</p>
      <div className="hobby-slider">

      <Slider images={hobby.images} directory={hobby.directory} small={true}/>
      </div>

    </div>
  )
}


export default About;