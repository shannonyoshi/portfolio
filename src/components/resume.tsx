import React, { FC } from "react";

import { ExpInter, Skill } from "../types"
import { skillsList, expList } from "../info"


const Resume: FC = () => {
  return (
    <div>
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
    <div>
      <p>{role}, {company}, {location}</p>
      <p>{time}</p>
      <p>{text}</p>
      <ul>{bullets.map((point, index) => <li key={`${id}, ${index}`}>{point}</li>)}</ul>
    </div>
  )
}

const Skills: FC = (): JSX.Element => {
  console.log('skillsList', skillsList)
  return <div className="skills-wrapper">
    <h4>Skills</h4>
    <ul>
      {skillsList.map((skill: Skill, index: number) =>
        <li key={`skill-${index}`}>{skill.main}
          <ul>

            {skill.sub.map((sub, i) =>
              <li key={`skill-${skill} ${i}`}>{sub}</li>)}
          </ul>
        </li>
      )}
    </ul>
  </div>
}

export default Resume;