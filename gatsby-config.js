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
    "gatsby-source-hnapi",
    "gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kerim Rahman`,
        short_name: `krmrhmn`,
        start_url: `/`,
        background_color: `#0A1117`,
        theme_color: `#121E28`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Bungee Inline',
          `Montserrat\:400,700`,
        ],
        // display: 'swap'
      }
    }
  ]
};
