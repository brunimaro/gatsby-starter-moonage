/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 module.exports = {
   siteMetadata: {
      title: 'Gatsby Bootstrap Starter nono'
    },
   plugins: [
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: 'images',
         path: `${__dirname}/src/images/`,
       },
     },
     {
   resolve: 'gatsby-source-strapi',
   options: {
     apiURL: 'https://strapi.brunimaro.tk',
     contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
       'article',
       'user'
         ],
         queryLimit: 1000,
       },
     },
     `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
     `gatsby-plugin-styled-components`,
     'gatsby-plugin-emotion'
   ]
 }
