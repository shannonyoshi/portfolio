import React, { FC } from "react";
import "../scss/header.scss";

interface HeaderProps {
  imageBG: string,
  altBG: string,
  imageMe: string,
  blurb: string,
}

const Header: FC<HeaderProps> = ({ imageBG, altBG, imageMe, blurb }): JSX.Element => {

  return (
    <header>
      <div className="bg-container">
        <img src={`/assets/${imageBG}`} alt={altBG} className="bg" />
      </div>
      <div className="portrait-container">
        <img src={`/assets/${imageMe}`} alt="head shot" className="portrait" />

        <div className="header-text">
          <h2>Shannon Yoshikawa</h2>
          <h3>Full Stack Web Developer</h3>
          {/* <p>{blurb}</p> */}
        </div>
      </div>
    </header>
  )
}

export default Header;