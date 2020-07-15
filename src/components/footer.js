import React from "react"
import { Link } from "gatsby"
import {Container, Row, Col} from 'react-bootstrap'
import { FaChevronUp } from "react-icons/fa";

export default function Footer() {
  return <footer className="pl-0 pr-0 pt-5 pb-5 bg-darker">
      <Container>
        <Row className="pre-footer">
          <Col md={{span: 4}}>
            <h5>footer 1</h5>
            <ul>
              <li><Link to="#">Lorem lipsum</Link></li>
              <li><Link to="#">Lorem lipsum</Link></li>
              <li><Link to="#">Lorem lipsum</Link></li>
            </ul>
          </Col>
          <Col md={{span: 4}}>
          <h5>footer 2</h5>
          <p>Donec magna erat, fringilla nec sapien id, blandit bibendum elit.</p>
          </Col>
          <Col md={{span: 4}}><h5>footer 3</h5></Col>
        </Row>
        <Row>
          <Col className="text-right">
          <Link className="scroll" to="#top"><FaChevronUp />Top</Link>
          </Col>
        </Row>
      </Container>
      </footer>
}
