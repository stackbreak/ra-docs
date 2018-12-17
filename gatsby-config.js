/* ========================================================================== */
/*                            GATSBY PLUGINS CONFIG                           */
/* ========================================================================== */

const config = require('./src/config');

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'media',
        path: `${__dirname}/src/media/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 780,
              quality: 100,
              wrapperStyle: 'margin-left: 0px !important;'
            }
          },
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps'
    },
    'gatsby-plugin-sharp',
    `gatsby-plugin-remove-trailing-slashes`,
    'gatsby-plugin-catch-links'
  ]
};
