/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import { ThemeProvider } from "styled-components"

const davidRonnlidTheme = {
  RG: "#000",
  SG: "#ACBEA3",
  S: "#AD5D4E",
  O: "#EB6534",
}

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={davidRonnlidTheme}>
      <main>{children}</main>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
