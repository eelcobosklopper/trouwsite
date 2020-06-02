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
      <div id="meer-info" className="container section meer-info-blok">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile is-parent">
              <div className="tile is-child is-vertical notification is-flower">
                <h2 className="title">2021 is het nieuwe 2020!</h2>
                <div
                  className="content"
                  style={{ maxWidth: "800px", margin: "0 auto" }}
                >
                  <p>
                    Helaas moeten wij het bruiloftsfeest nogmaals uitstellen. De
                    locatie heeft aangegeven dat een feest geven voor 50 man
                    niet gaat lukken in de ruimte die wij hiervoor in gedachten
                    hadden met alle Corona-maatregelen. 
                  </p>
                  <p>
                    Waarschijnlijk zullen wij dit jaar wel een zeer kleine
                    ceremonie houden bij het gemeentehuis. Volgend jaar gaat het
                    feest dan alsnog door! We weten alleen nog niet precies
                    wanneer. Deze keer gaan we wat langer wachten tot alles
                    duidelijk is qua maatregelen.
                  </p>
                  <p>
                    Dus verwacht in de loop van dit jaar nog een mail met een
                    nieuwe datum voor het feest!  Wij hopen jullie dan (en
                    daarvoor natuurlijk ook al) te zien!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="programma-extra">
          <p>
            Dineren is op eigen gelegenheid. Dit kan op locatie bij Restaurant
            Vroeg of bij andere restaurants in de buurt. Het is wel aan te raden
            om hiervoor te reserveren, zodat je ook op tijd bij de ceremonie
            aanwezig kunt zijn.
          </p>
          <br />
          <p>Kom dus met een gevulde maag, maar laat ruimte voor de taart!</p>
        </div>
      </div>
      <div id="meer-info" className="container section meer-info-blok">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            {/* <div className="tile is-parent">
              <div className="tile is-child is-vertical notification is-primary">
                <h2 className="title">COVID-19 (Corona) business</h2>
                <div
                  className="content"
                  style={{ maxWidth: "800px", margin: "0 auto" }}
                >
                  <p>
                    Het zijn vreemde tijden! We hopen uiteraard dat tegen de
                    tijd dat de bruiloft is, dat iedereen nog/weer gezond is en
                    dat wij samen een mooi feest kunnen vieren. 
                  </p>
                </div>
              </div>
            </div> */}
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child is-vertical notification is-primary">
                  <h2 className="title">Dresscode</h2>
                  <div className="content">
                    <p>
                      Feestelijk! Kom vooral in een pak of jurk met wat kleur!
                      Je wordt wel verwacht om mee te doen op de dansvloer, dus
                      houd hier rekening mee.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child is-vertical notification is-green-bag">
                  <h2 className="title">Cadeautip</h2>
                  <div className="content">
                    <p>
                      Een envelopje! We willen graag de meubels in onze huidige
                      of toekomstige woning een upgrade geven. Weg{" "}
                      <i>‘bij-elkaar-geraapte-studenten’</i>-spullen en welkom{" "}
                      <i>‘it-really-ties-the-room-together’</i>-spullen!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tile is-parent">
              <div className="tile is-child is-vertical notification is-secondary">
                <h2 className="title">Ceremoniemeesters</h2>
                <div
                  className="content"
                  style={{ maxWidth: "800px", margin: "0 auto" }}
                >
                  <p>
                    Tijdens de taart enzo is er beperkte tijd voor speeches en
                    stukjes. Mocht je erg graag iets willen doen, overleg dit
                    dan met onze ceremoniemeesters: Britt & Kasper!
                    <br />
                    Ook voor overige vragen kun je terecht bij onze
                    ceremoniemeesters!
                    <br />
                    Zij zijn te bereiken via JolienEnEelcoGaanTrouwen@gmail.com
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
          <h3>Achterdijk 1 te Bunnik</h3>
        </div>
        <Maps />
        <div className="container section">
          <div className="columns">
            <div className="column">
              <h3>Parkeren bij Vroeg</h3>
              <p>
                Je kunt bij Vroeg gratis parkeren op hun eigen terrein met 120
                parkeerplaatsen. Mocht de parkeerplaats van Vroeg onverhoopt
                toch vol zijn, dan verwijzen we jou graag naar de parkeerplaats
                P3 Oud Amelisweerd. Deze parkeerplaats ligt op ongeveer 150
                meter van Vroeg (inrijden mogelijk van zonsopgang tot
                zonsondergang, uitrijden altijd mogelijk).
              </p>
            </div>
            <div className="column">
              <h3>Openbaar vervoer</h3>
              <p>
                Vanaf Utrecht CS, circa 10 minuten met de bus. Halte Oud
                Amelisweerd. Bus 41 naar Wijk bij Duurstede. Vanaf Station
                Bunnik, circa 15 minuten met de bus. Halte Oud Amelisweerd. Bus
                41 naar Utrecht. Deze bus rijdt over het algemeen ‘s avonds elk
                half uur, tot ongeveer half 1 ‘s nachts.
                <br />
                Check dit van te voren wel op{" "}
                <a
                  href="https://9292.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  9292.nl!
                </a>
              </p>
            </div>
          </div>
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
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
