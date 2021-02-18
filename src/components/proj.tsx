import React, {FC} from "react";

import { ProjInter } from "../types"
import { projList } from "../info"

const Projects: FC = (): JSX.Element => {
  return (
    <section>
      <h2>Projects</h2>
      {projList.map(proj => <div key={`proj:${proj.id}`}>

        <Project project={proj} />
      </div>
      )}
    </section>
  )
}

type ProjectProps = {
  project:ProjInter,
}

const Project:FC<ProjectProps> = ({ project }): JSX.Element => {
  return (
    <div className={`proj-wrapper ${project.id}`}>
      <h3>{project.name}</h3>
      <h4>{project.role}</h4>
      <p>Description: {project.description}</p>
      <p>Stack: {project.stack}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
      <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
      <img src={project.image} alt={`${project.name} website image`} />
    </div>
  )
}

export default Projects