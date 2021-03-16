import React, { FC } from "react";

import { ExpInter, Skill, EduInter } from "../types"
import { skillsList, expList, eduList } from "../info"

import "../scss/resume.scss"

const Resume: FC = () => {
  return (
    <div className="resume-wrapper">
      <div className="left">
        <Skills />
      </div>
      <div className="right">
        <div className="exp-section">
          <h2>Experience</h2>
          {expList.map(exp =>
            <Experience exp={exp} key={`exp-${exp.id}`} />
          )}
        </div>
        <div className="edu-section">
          <h2>Education</h2>
          {eduList.map(edu =>
            <Education edu={edu} />)}
        </div>
      </div>
    </div>
  )
}

type EduProps = {
  edu: EduInter
}
const Education: FC<EduProps> = ({ edu: { school, time, fieldLabel, field, subfieldLabel=null,subfield = null } }) => {
  return (
    <div className="edu-wrapper">
      <h4>{school}</h4>
      <p><span className="label">{fieldLabel} </span>{field}</p>
      {subfield ? <p>{subfieldLabel?<span className="label">{subfieldLabel} </span>:""}{`${subfield}`}</p> : ""}
      <p><span className="label">Years </span>{time}</p>
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
      <h4>{role}, {company}</h4>
      <p>{time}, {location}</p>
      <p className="exp-text">{text}</p>
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
              <li className="sub-item" key={`skill-${skill} ${i}`}>{sub}</li>) : ""}
          </ul>
        </li>
      )}
    </ul>
  </div>
}

export default Resume;