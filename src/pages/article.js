import React from 'react'
//import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout'

const ArticleTemplate = ({ data }) => (
  <Layout>
  <Container>
    <Row className="mt-2 mb-2" key={data.strapiArticle.slug}>
        <Col md={{span: 8, offset:2}}>
        <h1>{data.strapiArticle.titre}</h1>
        <Img fluid={data.strapiArticle.couverture.childImageSharp.fluid}/>
        <div className="pt-4">{data.strapiArticle.contenu}</div>
        </Col>
     </Row>
    </Container>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($slug: String) {
    strapiArticle(slug: {eq: $slug}) {
      titre
      contenu
      couverture {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
  }
`
