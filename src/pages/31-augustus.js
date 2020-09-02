import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <div className="homepage">
      <SEO title="Home" />
      <div className="container section">
        <Img fluid={data.taart.childImageSharp.fluid} />
      </div>
      <div className="container section">
        <Img imgStyle={{ objectFit: 'contain' }} fluid={data.ceremonie.childImageSharp.fluid} />
      </div>
      <div className="container section">
        <Img fluid={data.stadhuis.childImageSharp.fluid} />
      </div>
      <div className="container section">
        <Img fluid={data.tuin.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    taart: file(relativePath: { eq: "31aug-taart.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    ceremonie: file(relativePath: { eq: "31aug-ceremonie.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    stadhuis: file(relativePath: { eq: "31aug-stadhuis.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    tuin: file(relativePath: { eq: "31aug-tuin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
