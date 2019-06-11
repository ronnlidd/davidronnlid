import React, { Component } from "react"

export class MediumPosts extends Component {
  constructor() {
    super()
    this.state = {
      recentBlogPost: {
        name: "",
        url: "",
      },
    }

    this.FetchDataFromRssFeed = this.FetchDataFromRssFeed.bind(this)
  }

  FetchDataFromRssFeed() {
    var request = new XMLHttpRequest()
    request.onreadystatechange = () => {
      console.log(request)

      if (request.readyState === 4 && request.status === 200) {
        var myObj = JSON.parse(request.responseText)
        for (var i = 0; i < 1; i++) {
          this.setState({
            recentBlogPost: {
              name: myObj.rss.channel.item[i].title,
              url: myObj.rss.channel.item[i].link,
            },
          })
        }
      }
    }
    request.open(
      "GET",
      "https://cors-anywhere.herokuapp.com/https://medium.com/feed/@davidronnlid",
      true
    )
    request.setRequestHeader("Accept", "application/json")
    request.send()
  }

  componentDidMount() {
    this.FetchDataFromRssFeed()
  }

  render() {
    return (
      <div>
        Check out our blog:{" "}
        <a
          target="_blank"
          href={this.state.recentBlogPost.url}
          rel="noopener noreferrer"
        >
          {this.state.recentBlogPost.name}
        </a>
      </div>
    )
  }
}
export default MediumPosts
