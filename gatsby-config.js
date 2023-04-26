/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `HopfenStop PWA`,
    siteUrl: `https://www.pwa.hopfenstop.de`,
    pathPrefix: "/hopfenstop-light",
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HopfenStop`,
        short_name: `HopfenStop`,
        icon: `src/images/logo.png`,
        start_url: `/`,
        background_color: `#E8B119`,
        theme_color: `#`,
        display: `standalone`,
      },
    },
  ],
};
