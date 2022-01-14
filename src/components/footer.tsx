
import React, { FC } from "react";
import Contact from "./contact"

import "../scss/footer.scss";

const Footer: FC = (): JSX.Element => {
  return (
    <footer>
      <img srcSet="/assets/seattle(eric-zhang)crop-480px.jpg 480w, /assets/seattle(eric-zhang)crop.jpg 5472w"
        sizes="(max-width: 480px) 480px,5472px"
      src={`/assets/seattle(eric-zhang)crop.jpg`} alt="upside down seattle skyline" className="bg" />
        <Contact/>
    </footer>
  )
}


export default Footer;