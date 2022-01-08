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
        <img src={`/assets/${imageBG}`} alt={altBG} className="bg"/>
      </div>
      <div className="portrait-info-container">

        {/* <div className="portrait-container"> */}
        <img src={`/assets/${imageMe}`} alt="head shot" className="portrait" />
        {/* </div> */}
        <div className="header-text">
          <div className="wrap-text dark">

            <h3>Shannon  &nbsp;</h3><h3 className="indented">Yoshikawa</h3>
          </div>
          <div className="wrap-text light">

            <h3 className="indented">Full Stack  &nbsp;</h3><h3>Web Developer</h3>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;