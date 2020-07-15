import React, { useState } from "react"
//import navigationStyles from "./navigation.module.css"
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu'

import Nav from 'react-bootstrap/Nav'
import styled from '@emotion/styled'

export default function Navigation() {

  const [menuState, setMenuOpen] = useState({menuOpen: false});

  const closeMenu = () => {
    setMenuOpen({menuOpen: false})
  }



  return (
    <TopNav className="navbar navbar-expand-md navbar-light sticky-top">
    <NavItems defaultActiveKey="/home" className="navbar-nav" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/about/">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/contact/">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/style-guide/">Style guide</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/blog/">Blog</Nav.Link>
            </Nav.Item>
    </NavItems>


                <SideMenu>
                  <Menu isOpen={ menuState.menuOpen }>

                    <Link className="menu-item" to="/" onClick={() => closeMenu() }>
                      Accueil
                    </Link>
                    <Link className="menu-item" to="/blog/" onClick={() => closeMenu() }>
                      About
                    </Link>
                    <Link className="menu-item" to="/contact/" onClick={() => closeMenu() }>
                      Contact
                    </Link>
                    <Link className="menu-item" to="/style-guide/" onClick={() => closeMenu() }>
                      Style guide
                    </Link>
                    <Link className="menu-item" to="/blog/" onClick={() => closeMenu() }>
                      Blog
                    </Link>

                  </Menu>
                </SideMenu>

    </TopNav>
  )
}

const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fafafa;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1101;
  top: 0;
  width: 100vw;
`
//const Logo = styled.div`
  //padding: 1em 1em 0 1em;
//`

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;

  a {
    color: #888;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    font-size: 1em;
    &:hover {
      color: #333;
    }
  }
  @media(max-width: 721px) {
    display: none;
  }
`

const SideMenu =  styled.div`
    /* Individual item */
    .bm-item {
      display: inline-block;
      /* Our sidebar item styling */
      text-decoration: none;
      margin-bottom: 10px;
      color: #d1d1d1;
      transition: color 0.2s;
    }
    /* Change color on hover */
    .bm-item:hover {
      color: white;
    }
    /* The rest copied directly from react-burger-menu docs */
    /* Position and sizing of burger button */
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      right: 36px;
      top: 36px;
    }
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #373a47;
    }
    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }
    /* General sidebar styles */
    .bm-menu {
      background: #373a47;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }
    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }
    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
    }
    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    @media(min-width: 720px) {
      display: none;
    }
`
