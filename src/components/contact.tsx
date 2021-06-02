import React, { FC } from "react";

const Contact: FC = ({ }): JSX.Element => {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <p>shannon.yoshikawa<span><i className="fas fa-at at-icon" /></span>gmail.com</p>
      <a href="https://github.com/shannonyoshi/" target="_blank"><i className="fab fa-github contact-icon" /></a>
      <a href="https://www.linkedin.com/in/shannon-yoshi/"><i className="fab fa-linkedin contact-icon" /></a>
    </div>

  )
}

export default Contact;