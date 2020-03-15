import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

import Layout from "../components/layout"
import Maps from "../components/Maps"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="container section">
      <Img fluid={data.landSchapImage.childImageSharp.fluid} />
    </div>
    <Maps />
    <div className="container section">
      <Img className="flower-img" fluid={data.flower.childImageSharp.fluid} />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    flower: file(relativePath: { eq: "paintbrush.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    landSchapImage: file(relativePath: { eq: "landschap.png" }) {
      childImageSharp {
        fluid(maxWidth: 1980) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
