import React, { Component } from "react"

export default class SocialMedia extends Component {
  render() {
    return (
      <a href={this.props.link} rel="noopener noreferrer" target="_blank">
        <i
          style={{
            fontSize: "20vw",
            margin: "0 auto",
            color: `${this.props.color}`,
          }}
          className={`fab fa-${this.props.where.toLowerCase()}`}
        />
      </a>
    )
  }
}
