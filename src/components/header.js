import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="container section">
      <h1><Link to="/" style={{color: 'white'}}>{siteTitle}</Link></h1>
      <h2 className="sub-title">Op 31 augustus 2020</h2>
      <p>(maar volgend jaar gaan we nog een leuk feest geven!)</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
