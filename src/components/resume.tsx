import React, { FC } from "react";

import { ExpInter, EduInter } from "../types"
import { skillsList, expList, eduList } from "../info"

import "../scss/resume.scss"

const Resume: FC = () => {
  return (
    <div className="resume-wrapper">
      <div className="left">
        <Skills />
      </div>
      <div className="right">
        <section className="exp-section">
          <h2>Experience</h2>
          {expList.map(exp =>
            <Experience exp={exp} key={`exp-${exp.id}`} />
          )}
        </section>
        <section className="edu-section">
          <h2>Education</h2>
          {eduList.map(edu =>
            <Education edu={edu} />)}
        </section>
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
      {skillsList.map((skill: string, index: number) =>
        <li className="skill" key={`skill-${index}`}>{skill}</li>
      )}
    </ul>

    <h4 className="lang-heading">Languages</h4>
    <p className="lang">Russian</p>  
  </div>
}

export default Resume;