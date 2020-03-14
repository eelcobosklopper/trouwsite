module.exports = {
  siteMetadata: {
    title: `Jolien & Eelco Bruiloft`,
    description: `De grote trouwsite voor de twee donders`,
    author: `Eelco Bosklopper`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jolien-eelco-trouwen`,
        short_name: `trouwsite`,
        start_url: `/`,
        background_color: `#237055`,
        theme_color: `#237055`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
