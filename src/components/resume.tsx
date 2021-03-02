import React, { FC } from "react";

import { ExpInter, Skill } from "../types"
import { skillsList, expList } from "../info"

import "../scss/resume.scss"

const Resume: FC = () => {
  return (
    <div className="resume-wrapper">
      <Skills />
      {expList.map(exp =>
        <Experience exp={exp} key={`exp-${exp.id}`} />
      )}
    </div>
  )
}

type ExpProps = {
  exp: ExpInter
}

const Experience: FC<ExpProps> = ({ exp: { id, role, company, location, time, text, bullets } }): JSX.Element => {
  console.log('exp')
  return (
    <div className="exp-wrapper">
      <h3>{role}, {company}</h3>
      <h4>{time}, {location}</h4>
      <p>{text}</p>
      <ul className="exp-list">{bullets.map((point, index) => <li className="exp-item" key={`${id}, ${index}`}>{point}</li>)}</ul>
    </div>
  )
}

const Skills: FC = (): JSX.Element => {
  return <div className="skills-wrapper">
    <h3 className="skills-heading">Skills</h3>
    <ul className="main-list">
      {skillsList.map((skill: Skill, index: number) =>
        <li className="main-item" key={`skill-${index}`}>{skill.main}
          <ul className="sub-list">
            {skill.sub.length > 0 ? skill.sub.map((sub, i) =>
              <li  className="sub-item" key={`skill-${skill} ${i}`}>{sub}</li>) : ""}
          </ul>
        </li>
      )}
    </ul>
  </div>
}

export default Resume;