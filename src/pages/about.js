import React from "react"
import Header from "../components/header"
import Section from "../components/section"
import User from "../components/user"
import Layout from "../components/layout"
import {Container} from 'react-bootstrap'


export default function About() {
  return (
    <Layout>
      <Container>
        <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
        <Header headerText="It's pretty cool" />
        <p>Such wow. Very React.</p>
        <Section  style={{ color: `teal` }}>
          <User
            username="Jane Doe"
            avatar="https://source.unsplash.com/random/128x128"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <User
            username="Bob Smith"
            avatar="https://source.unsplash.com/random/128x128"
            excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </Section>
        </Container>
      </Layout>
  )
}
