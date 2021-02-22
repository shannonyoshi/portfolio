import React, { FC, SetStateAction, Dispatch } from "react";

import { PageOpts } from "../types"

interface NavProps {
  setPage: Dispatch<SetStateAction<PageOpts>>
}

const Navigation = ({ setPage }: NavProps): JSX.Element => {
  return (
    <nav>
      <button onClick={() => setPage("portfolio")}>Portfolio</button>
      <button onClick={() => setPage("resume")}>Resume</button>
      <button onClick={() => setPage("about")}>About Me</button>
    </nav>
  )
}

export default Navigation;