import React, { Component } from "react"
import Helmet from "react-helmet"

import "../styles/indexPage.css"
import SEO from "../components/seo"

import { ContactMediums } from "../components/contactMediums"
import { WhatIDo } from "../components/whatIDo"
// import ThirdPage from "../components/thirdPage"

import DavidTalking from "../components/davidImgLoadedTwo"
import DavidSmile from "../components/davidImgLoaded"

export class IndexPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossorigin="anonymous"
          />
        </Helmet>
        <SEO />
        <DavidSmile />
        <ContactMediums />
        <WhatIDo />
        <DavidTalking />
        {/* <ThirdPage /> */}
      </>
    )
  }
}

export default IndexPage
