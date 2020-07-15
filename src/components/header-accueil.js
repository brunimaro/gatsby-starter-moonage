import React from "react"
import { graphql, StaticQuery } from 'gatsby'
//import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {Container } from 'react-bootstrap';

const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "1492b4daa17f1cdc1bf3864ba05a2eb7.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="div"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
            <Container className="m-auto">
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
            </Container>
          </BackgroundImage>
       )
     }
     }
    />
)

const HeaderAccueil = styled(BackgroundSection)`
  width: 100%;
  display: flex;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
  color: #FFF;
  padding : 6rem 4rem;
  margin: 0 auto;
  min-height:50vh;
`

export default HeaderAccueil
