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
        {props.styled ? (
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ width: "15vw", margin: "1rem auto" }}
          />
        ) : (
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ width: "30vw" }}
          />
        )}
      </>
    )}
  />
)
