import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
//import HeaderAccueil from "../components/header-accueil"
import '../styles/bootstrap.min.css';
import SwitchDarkMode from "./switch-dark-mode"
import { ThemeContext } from "../context/ThemeContext"
import styled from "@emotion/styled"

const themes = {
  light: {
    foreground: "inherit",
    background: "inherit",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
}

const ThemedLayout = styled.div`
  color: ${props => themes[props.theme.name].foreground};
  background-color: ${props => themes[props.theme.name].background};
  transition: all 0.4s ease;
  min-height: 100vh;

  & a {
    color: ${props => (props.theme.name === "dark" ? "#B38CD9" : "inherit")};
  }
`
// permet le smooth scroll sur les liens ancre #
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a.scroll[href*="#"]')
}

const Layout = ({ children }) => (
    <ThemeContext.Consumer>
      {theme => (
        <ThemedLayout theme={theme}>
        <div id="top">
          <Navigation />
          {/* <HeaderAccueil/> */}
          <div className="mt-4 pb-5 pt-5">
            <SwitchDarkMode theme={theme} />
            {children}
          </div>
          <Footer/>
        </div>
        </ThemedLayout>
        )}
    </ThemeContext.Consumer>
  )

export default Layout
