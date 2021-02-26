import React, { FC, SetStateAction, Dispatch } from "react";

import "../scss/nav.scss"

import { PageOpts } from "../types"

interface NavProps {
  setPage: Dispatch<SetStateAction<PageOpts>>,
  page: PageOpts,
}

const Navigation = ({ setPage, page }: NavProps): JSX.Element => {
  return (
    <nav>
      <button className={`nav-btn raise ${page==="portfolio"? "selected": ""}`} onClick={() => setPage("portfolio")}>Portfolio</button>
      <button className={`nav-btn raise ${page==="resume"? "selected": ""}`} onClick={() => setPage("resume")}>Resume</button>
      <button className={`nav-btn raise ${page==="about"? "selected": ""}`} onClick={() => setPage("about")}>About&nbsp;Me</button>
    </nav>
  )
}

export default Navigation;