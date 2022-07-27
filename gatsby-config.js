const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: 'Wem gehoert die Stadt?',
  },

  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'houses',
        path: `${__dirname}/static/images/houses`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'hands',
        path: `${__dirname}/static/images/hands`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'map',
        path: `${__dirname}/static/images/map`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'thumbs',
        path: `${__dirname}/static/images/thumbs`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'social-media',
        path: `${__dirname}/static/images/social-media`,
      },
    },

    'gatsby-transformer-json',
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/data/intl`,
        languages: ['de', 'en'],
        defaultLanguage: 'de',
        redirect: false,
      },
    },

    'gatsby-plugin-emotion',
    'gatsby-plugin-hooked-head',
    'gatsby-plugin-sharp',

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Studie: Wem gehört die Stadt?`,
        short_name: `Studie: Wem gehört die Stadt?`,
        start_url: `/`,
        background_color: `#ff986d`,
        theme_color: `#ff986d`,
        display: `standalone`,
        icon: `static/images/favicon.png`,
      },
    },

    {
      resolve: 'gatsby-plugin-netlify',
      options: {},
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/icons/,
        },
      },
    },
  ],

  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
      })
    );
  },
};
