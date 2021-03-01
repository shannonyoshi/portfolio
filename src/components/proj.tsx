import React, { FC } from "react";

import "../scss/proj.scss";

import { ProjInter } from "../types";
import { projList } from "../info";

import ImgSlider from "./img-slider";

const Projects: FC = (): JSX.Element => {
  return (
    <section>
      {/* <h2>Projects</h2> */}
      {projList.map((proj, index) => <div key={`proj:${proj.id}`}>

        <Project project={proj} />
      </div>
      )}
    </section>
  )
}

type ProjectProps = {
  project: ProjInter,
}

const Project: FC<ProjectProps> = ({ project }): JSX.Element => {
  const prettyUrl = project.url.replace("https://", "").replace("www.", "").slice(0, -1)

  return (
    <div className={`bg-wrapper`}>

      <div className={`proj-wrapper ${project.id}`}>
        <div className="text-wrapper">

          <h3>{project.name}</h3>
          <h4>{project.role}</h4>
          <p><span className="label">Description: </span>{project.description}</p>
          <div className="layout">
            <div className="left">

              <p id="stack"><span className="label">Stack: </span>{project.stack.join(", ")}</p>
              <p><span className="label">URL: </span>
                <a className="link" href={project.url} target="_blank" rel="noopener noreferrer">
                  {prettyUrl}
                </a>
              </p>
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon" /></a>
          </div>
        </div>
        <ImgSlider images={project.images} />
      </div>
    </div>
  )
}

export default Projects;