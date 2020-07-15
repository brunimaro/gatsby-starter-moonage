import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import {Container} from 'react-bootstrap'
import Img from "gatsby-image"


const Page_404 = () => {

    const data = useStaticQuery(graphql`
      query Images {
        image: file(relativePath: {eq: "obi-wan.jpg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid(
          maxWidth: 800,
          grayscale: false,
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    }
  `)

  console.log(data)

  return (
    <Layout>
       <Container>
       <Header headerText="Bonjour Gatsby!" />
       <p>Oups! cette page n'est pas celle que vous recherchez...</p>
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt ="lorem lipsum"
         />
       </Container>
    </Layout>
  )

}

export default Page_404
