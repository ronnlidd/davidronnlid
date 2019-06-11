module.exports = {
  siteMetadata: {
    title: `David Rönnlid`,
    description: `David Rönnlid is an entrepreneur, full-stack developer, biohacker and writer.`,
    author: `@davidronnlid`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Rönnlid personal website`,
        short_name: `David Rönnlid`,
        start_url: `/`,
        background_color: `#49494b`,
        theme_color: `#bd8c7d`,
        display: `minimal-ui`,
        icon: `./public/icons/TransparentMe.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
