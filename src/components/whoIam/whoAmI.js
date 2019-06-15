import React, { Component } from "react"
import styled from "styled-components"

const TextTransition = styled.span`
  font-style: italic;

  animation: pulsate 1200ms ease-out;
  animation-iteration-count: infinite;
  opacity: 0.7;
  color: white;
  padding: 1rem 2.5rem 1rem 1.5rem;
  background: black;
  border: 4px solid black;
  border-radius: 6rem 2rem 10rem 6rem;
  box-shadow: -1px 1px 0 black;

  @keyframes pulsate {
    0% {
      color: none;
      background: none;
      opacity: 0.7;
      border: 4px solid black;
    }
    50% {
      opacity: 1;
      color: black;
      background: white;
      border: 4px solid black;
    }
    100% {
      color: black;
      background: white;
      opacity: 0.7;
      border: 4px solid black;
    }
  }
`

const textArray = ["solve problems", "develop websites", "write", "biohack"]
const vari = 1200

export class WhoAmI extends Component {
  constructor() {
    super()
    this.state = { textIdx: 0 }
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx
      this.setState({ textIdx: currentIdx + 1 })
    }, vari)
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length]

    return <TextTransition>{textThatChanges}</TextTransition>
  }
}

export default WhoAmI
