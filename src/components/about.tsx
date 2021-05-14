import React, { FC } from "react";

import { HobbyInter, HobbyProj } from "../types";
import { hobbyList } from "../info";

import Slider from "./img-slider";
import "../scss/about.scss";

const About: FC = (): JSX.Element => {
  return (
    <div className="page-about">
      <div className="text">

        {/* <h3>Hobbies & Interests</h3> */}
        <p>My main hobbies right now are leather working, metalworking, baking, and cycling.</p>

      </div>

      {hobbyList.map(hobby => <Hobby hobby={hobby} key={`hobby-${hobby.id}`} />)}

    </div>
  )
}

type HobbyProps = {
  hobby: HobbyInter
}

const Hobby: FC<HobbyProps> = ({ hobby }): JSX.Element => {
  return (
    <div className="hobby-wrapper">
      <div className="text">

      <h3>{hobby.name}</h3>
      <p>{hobby.blurb}</p>
      </div>
    <div className="h-projects">
      {hobby.projects.map(proj=><HobProj project={proj} key={`hID-${hobby.id} pID=${proj.id}`}/>)}
      </div>
    </div>
  )
}

type HobbyProjProps = {
  project: HobbyProj,
}

const HobProj: FC<HobbyProjProps> = ({ project }): JSX.Element => {
  return (
    <div className="h-proj-wrapper">
      <div className="proj-text">
        <div className="text">
          <h5>{project.name}</h5>

          <p>{project.description}</p>
        </div>
      </div >
        <div className="project-slider">
          <Slider images={project.images} directory={project.directory} small={true} />
        </div>
    </div >
  )
}


export default About;