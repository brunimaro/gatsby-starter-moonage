import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {Container} from 'react-bootstrap'
import Img from 'gatsby-image'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const IndexBlog = ({ data }) => (
  <Layout>
  <Container>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>


      <CardDeck>
      {data.allStrapiArticle.edges.map(document => (
          <Card key={document.node.slug}>
            <Img variant="top" fluid={document.node.couverture.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title><Link to={`/${document.node.slug}`}>{document.node.titre}</Link></Card.Title>
              <Card.Text>
                {document.node.resume}
              </Card.Text>
              <Card.Link to={`/${document.node.slug}`}>Card Link</Card.Link>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
      ))}
      </CardDeck>

    </Container>
  </Layout>
)

export default IndexBlog

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          slug
          titre
          contenu
          resume
          couverture {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
