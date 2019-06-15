import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => (
  <StaticQuery
    query={graphql`
      query RW {
        file(relativePath: { regex: "/newLogov4/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ width: "4rem", margin: "-.1rem 0 -0 -.5rem" }}
        />
      </>
    )}
  />
)
