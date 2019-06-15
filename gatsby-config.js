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
  ],
}
