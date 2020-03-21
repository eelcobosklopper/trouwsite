import React from "react"
import image from "../images/cutout.png"

const Footer = ({ data }) => {
  return (
    <footer className="site-footer">
      <div className="container section">
        <p>
          Illustraties gemaakt door Tineke de Boer:{" "}
          <a
            href="https://www.tinekefrancisca.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            tinekefrancisca.nl
          </a>
        </p>
      </div>
      <div className="footer-image">
        <img src={image} alt="Mooie rotsen" />
      </div>
    </footer>
  )
}

export default Footer
