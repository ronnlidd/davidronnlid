import React, { Component } from "react"
import { WhoAmI } from "./whoAmI"

export class WhoIAmComponent extends Component {
  constructor() {
    super()

    this.state = {
      closed: false,
    }

    this.closeWhoIAm = this.closeWhoIAm.bind(this)
  }

  closeWhoIAm() {
    this.setState({
      closed: true,
    })
  }

  render() {
    const { closed } = this.state
    return (
      <>
        {closed ? null : (
          <>
            <button className="closeWhoIam" onClick={this.closeWhoIAm}>
              <i className="fas fa-times fa-2x" />
            </button>
            <h1 className="who--I-am">
              Hi, I'm David Rönnlid <br />
              <span className="whoIam">I {<WhoAmI />}</span>
            </h1>
          </>
        )}
      </>
    )
  }
}

export default WhoIAmComponent
