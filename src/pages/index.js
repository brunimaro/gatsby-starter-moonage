import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import {Container, Row, Col } from 'react-bootstrap';
import BgImage from "../components/BgImage";



const IndexPage = ({ data }) => (
  <Layout>
     <Container>
        <Header headerText="Bonjour Gatsby!" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum augue eu vulputate posuere. Sed at purus et velit molestie ornare quis nec nulla. Nam quis lectus dui. Etiam nisi nisi, consectetur vitae venenatis vel, commodo at libero. Etiam egestas sapien vestibulum orci laoreet, a varius purus ullamcorper. Integer in erat dui. Vestibulum rutrum condimentum ullamcorper. Aliquam posuere, magna quis dapibus venenatis, nisl dolor ultrices ligula, non porttitor ex massa a le</p>
        <p>Sed imperdiet risus libero, a dignissim ex cursus ut. Phasellus quis massa neque. Sed hendrerit gravida massa vitae accumsan. Cras in leo viverra, ullamcorper velit ut, feugiat turpis. Suspendisse eget gravida nibh. Praesent nec consectetur massa. Pellentesque quis orci purus. Nam gravida eros eget neque lobortis, sollicitudin molestie odio iaculis. Donec magna erat, fringilla nec sapien id, blandit bibendum elit. Nam suscipit consectetur orci, pretium consequat elit. Phasellus viverra tincidunt lacus, non porta felis consequat nec.</p>
        <img className="img-fluid" src="https://source.unsplash.com/random/1200x200" alt="" />
     </Container>

     <div className="mt-4 mb-4">
       <BgImage
        title="astronaut"
        fluid={data.intercalaire.childImageSharp.fluid}
        overlayColor="#04040454"
        className="p-4"
        height="400px"
        >
        <h2 style={{ color: "white" }}>Look at me!</h2>
        </BgImage>
     </div>

     <Container>
       <Row className="mt-2 mb-2">
         <Col md={{span: 7}}>
         <BgImage
          title="astronaut"
          fluid={data.astronaut.childImageSharp.fluid}
          overlayColor="#04040454"
          className="p-4"
          height="100%"
          >
          <h2 style={{ color: "white" }}>Look at me!</h2>
          </BgImage>
         </Col>
         <Col md={{span: 5}}>
         <h3>Lorem ipsum dolor sit amet</h3>
          <p>Sed imperdiet risus libero, a dignissim ex cursus ut. Phasellus quis massa neque. Sed hendrerit gravida massa vitae accumsan. Cras in leo viverra, ullamcorper velit ut, feugiat turpis. Suspendisse eget gravida nibh..</p>
         </Col>
       </Row>
     </Container>

  </Layout>
);

export const query = graphql`
  query {
    astronaut: file(relativePath: { eq: "9291ea6465f57157d620347c90b8241d.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    intercalaire: file(relativePath: { eq: "magdalena-mudlaff-2016-02-df-night-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`;

export default IndexPage;
