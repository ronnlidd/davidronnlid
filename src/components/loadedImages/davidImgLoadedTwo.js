import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => (
  <StaticQuery
    query={graphql`
      query Two {
        file(relativePath: { regex: "/InTheCall/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="david--calling">
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    )}
  />
)
