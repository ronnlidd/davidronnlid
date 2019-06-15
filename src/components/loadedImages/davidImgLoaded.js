import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => (
  <StaticQuery
    query={graphql`
      query TM {
        file(relativePath: { regex: "/ConfidentSmile/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="david--smile">
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    )}
  />
)
