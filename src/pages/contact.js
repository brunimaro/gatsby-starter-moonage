import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import {Container} from 'react-bootstrap';

export default function Contact() {
  return (
    <Layout>
    <Container style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </Container>
    </Layout>
  )
}
