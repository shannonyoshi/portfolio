import React, { FC } from "react";
import "../"

interface HeaderProps {
  imageBG: string,
  altBG: string,
  imageMe: string,
  blurb: string,
}

const Header: FC<HeaderProps> = ({ imageBG, altBG, imageMe, blurb }): JSX.Element => {
  
  return (
    <header>
      <img src={`/assets/${imageBG}`} alt={altBG} />
      <img src={`/assets/${imageMe}`} alt="head shot" />
      <div className="header-text">
        <h2>Shannon Yoshikawa</h2>
        <h3>Web Dev</h3>
        <p>{blurb}</p>
      </div>
    </header>
  )
}

export default Header;