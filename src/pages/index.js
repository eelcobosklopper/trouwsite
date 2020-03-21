import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

import Layout from "../components/layout"
import Maps from "../components/Maps"

const IndexPage = ({ data }) => (
  <Layout>
    <div className="homepage">
      <SEO title="Home" />
      <div className="container section">
        <Img fluid={data.landSchapImage.childImageSharp.fluid} />
      </div>
      <div id="programma" className="section programma-blok box">
        <h2>Het programma</h2>
        <div className="programma-blok-content">
          <div className="programma-blok-row">
            <span className="programma-blok-key">Aanvang</span>
            <span className="programma-blok-value">18:30</span>
          </div>
          <div className="programma-blok-row">
            <span className="programma-blok-key">Ceremonie</span>
            <span className="programma-blok-value">19:00</span>
          </div>
          <div className="programma-blok-row">
            <span className="programma-blok-key">Taart enzo</span>
            <span className="programma-blok-value">19:45</span>
          </div>
          <div className="programma-blok-row">
            <span className="programma-blok-key">Party</span>
            <span className="programma-blok-value">21:00</span>
          </div>
          <div className="programma-blok-row">
            <span className="programma-blok-key">Uitzwaaien</span>
            <span className="programma-blok-value">0:30</span>
          </div>
        </div>
      </div>
      <div id="meer-info" className="container section meer-info-blok">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child is-vertical notification is-flower">
                  <h2 className="title">Dresscode</h2>
                  <div className="content">
                    <p>
                      Feestelijk! Kom vooral in een pak of jurk met wat kleur!
                      Je wordt wel verwacht om mee te doen op de dansvloer, dus
                      hou hier rekening mee.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child is-vertical notification is-green-bag">
                  <h2 className="title">Cadeautip</h2>
                  <div className="content">
                    <p>Een envelopje!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tile is-parent">
              <div className="tile is-child is-vertical notification is-secondary">
                <h2 className="title">Ceremoniemeesters</h2>
                {/* <h3 className="sub-title">Ceremoniemeesters</h3> */}
                <div className="content">
                  <p>
                    Voor overige vragen kun je bij onze ceremoniemeester
                    terecht: Britt & Kasper!
                  </p>
                  <p>
                    Zij zijn te bereiken op JolienEnEelcoGaanTrouwen@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container section">
        <Img className="flower-img" fluid={data.flower.childImageSharp.fluid} />
      </div>
      <div id="locatie" className="locatie-blok">
        <div className="container section">
          <h2>De Locatie</h2>
        </div>
        <Maps />
        <div className="container section">
          <p>Allemaal tekst!</p>
        </div>
      </div>
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
