import React, { FC } from "react";
import "../scss/header.scss";

interface HeaderProps {

  imageMe: string,
  blurb: string,
}

const Header: FC<HeaderProps> = ({ imageMe }): JSX.Element => {

  return (
    <header>
      <div className="bg-container">
        <img
          srcSet="/assets/seattle(eric-zhang)crop-480w.jpg 480w, /assets/seattle(eric-zhang)crop-768w.jpg 768w, /assets/seattle(eric-zhang)crop-1024w.jpg 1024w, /assets/seattle(eric-zhang)crop-3000w.jpg 3000w"
          sizes="(max-width: 480px) 480px,5472px"
          src={`/assets/seattle(eric-zhang)crop.jpg`}
          alt="Seattle Space Needle" className="bg" />
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