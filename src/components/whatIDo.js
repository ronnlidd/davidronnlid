import React, { Component } from "react"
import ImageTwo from "../images/code-background.jpg"
import { WhoAmI } from "./whoAmI"

export class WhatIDo extends Component {
  render() {
    return (
      <>
        <div
          style={{
            height: "110vh",
            backgroundImage: `url(${ImageTwo})`,
            filter: "blur(8px)",
            zIndex: -3,
          }}
        />

        <div>
          <h1>I {<WhoAmI />}</h1>
          <h4>
            <strong>I'm a full-stack developer.</strong>
          </h4>
          <p>I develop websites and web applications.</p>
          <h4>
            <strong>I'm a blog writer.</strong>
          </h4>
          <p>
            I write on Medium about holistic personal evolution. I focus on
            methods of growing mind, body and brain for learning, performance
            and happiness.
          </p>
          <h4>I'm a biohacker.</h4>
          <p>
            I optimize my sleep, supplementation, nootropic intake, nutrition,
            exercise & mindfulness for learning, performance and happiness.{" "}
          </p>
          <h4>I'm an entrepreneur.</h4>
          <p>
            I look to various fields of arts and science to cross-pollinate
            start-ups with ideas & methods for solutions to problems. I believe
            there are more opportunities now than ever before.
          </p>

          <h1>Why I do what I do</h1>

          <h3>
            <strong>
              Long-term vision: Boost love & reduce suffering as much as
              possible.
            </strong>
          </h3>
          <p>
            Another definition of my mission could be to increase the well-being
            of conscious beings in the world. I believe that the most efficient
            way to pursue this goal is by upgrading myself (biohacking) and my
            abilities so that I in the future have greater abilities to
            influence the well-being of other people. I suspect that technology
            will only grow more important in the world we live in, hence I'm a
            full-stack developer. I believe that writing is an important skill
            to have & that the money and following I can build on Medium can be
            useful for my goal of effective altruism. Looking to seize
            opportunities & creating value by starting businesses is another
            method of increasing the well-being in the world as much as possible
            in the long-term. This is a result of the solving of problems people
            have and the power to influence (money, relationships) a successful
            venture can yield.
          </p>
        </div>
      </>
    )
  }
}

export default WhatIDo
