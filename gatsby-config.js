/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `krmrhmn`,
    siteUrl: `https://kerimrahman.github.io/`
  },
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
