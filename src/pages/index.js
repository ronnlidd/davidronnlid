import React, { Component } from "react"
import Helmet from "react-helmet"

import "../styles/indexPage/allScreenSizesIndexPage.css"
import "../styles/indexPage/forPhoneIndexPage.css"
import "../styles/indexPage/forTabletPortraitUpIndexPage.css"
import "../styles/indexPage/forTabletLandscapeUpIndexPage.css"
import "../styles/indexPage/forDesktopUpIndexPage.css"

import SEO from "../components/seo"

import { ContactMediums } from "../components/contactMediums"
import { WhatIDo } from "../components/whatIDo"
// import ThirdPage from "../components/thirdPage"

import DavidTalking from "../components/loadedImages/davidImgLoadedTwo"
import DavidSmile from "../components/loadedImages/davidImgLoaded"
import WhoIAmComponent from "../components/whoIam/whoIAmComponent"

export class IndexPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossorigin="anonymous"
          />
        </Helmet>
        <SEO />
        <WhoIAmComponent />

        <ContactMediums />

        <DavidSmile />
        <WhatIDo />
        <DavidTalking />
        {/* <ThirdPage /> */}
      </div>
    )
  }
}

export default IndexPage
