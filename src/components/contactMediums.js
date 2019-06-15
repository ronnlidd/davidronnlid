import React, { Component } from "react"
import RwLogoLoaded from "./loadedImages/rwLogoLoaded"
import Tooltip from "react-tooltip-lite"
import SocialMedia from "./socialMedia"

export class ContactMediums extends Component {
  render() {
    return (
      <div className="contact--wrapper">
        <SocialMedia
          link="https://twitter.com/davidronnlid/"
          whatToDo="Follow"
          where="twitter"
          color="#00acee"
          className="hey"
        />
        <SocialMedia
          link="https://www.linkedin.com/in/davidronnlid/"
          whatToDo="Add"
          where="LinkedIn"
          color="#4875B4"
        />
        <SocialMedia
          link="https://medium.com/@davidronnlid/"
          whatToDo="Follow"
          where="Medium"
          color="#000"
        />
        <a
          href="https://ronnlidwebsites.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Tooltip
            content="I will build a website for you or your business!"
            useDefaultStyles={true}
          >
            <RwLogoLoaded />
          </Tooltip>
        </a>
      </div>
    )
  }
}

export default ContactMediums
