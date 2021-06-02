
import React, { FC } from "react";
import Contact from "./contact"

import "../scss/footer.scss";

const Footer: FC = (): JSX.Element => {
  return (
    <footer>
      <img src={`/assets/seattle(eric-zhang)crop.jpg`} alt="upside down seattle skyline" className="bg" />
        <Contact/>
    </footer>
  )
}


export default Footer;