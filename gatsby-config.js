/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Profile Overview`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: '/profile-overview',
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Bungee Inline'
        ],
        // display: 'swap'
      }
    }
  ]
};
