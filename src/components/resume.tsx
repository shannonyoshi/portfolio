import React from "react";

import {ExpInter} from "../types"


const Resume = ()=> {
  return (
    <div>
      Resume
    </div>
  )
}

const Experience = ({id, role, company , time, text, bullets}: ExpInter):JSX.Element => {
  return (

    <div>
    <p>{role}, {company}, {time} </p>
    <p>{text}</p>
    <ul>{bullets.map((point, index)=><li key={`${id}, ${index}`}>{point}</li>)}</ul>
  </div>
)
}

export default Resume;