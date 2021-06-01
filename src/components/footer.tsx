
import React, { FC } from "react";


import "../scss/footer.scss";

const Footer: FC = (): JSX.Element => {
  return (
    <footer>
      <img src={`/assets/seattle(eric-zhang)crop.jpg`} alt="upside down seattle skyline" className="bg" />
      <div className="contact">
        <h3>Contact</h3>
        <p>shannon.yoshikawa<span><i className="fas fa-at at-icon" /></span>gmail.com</p>
        <a href="https://github.com/shannonyoshi/" target="_blank"><i className="fab fa-github contact-icon" /></a>
        <a href="https://www.linkedin.com/in/shannon-yoshi/"><i className="fab fa-linkedin contact-icon" /></a>
      </div>
    </footer>
  )
}


export default Footer;