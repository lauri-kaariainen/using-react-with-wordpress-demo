//import React, { Component } from "react";
import { h, Component } from "preact";
import axios from "axios";

class PostView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    if (this.props.cache[slug.toString()])
      return this.setState({ post: this.props.cache[slug.toString()] });
    else
      axios
        .get(`https://techcrunch.com/wp-json/wp/v2/posts?slug=${slug}`)
        .then(post => {
          this.props.fillCache({ ...this.props.cache, [slug]: post.data[0] })
          this.setState({
            post: post.data[0]
          });
        });
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    let build;
    if (this.state.post.title) {
      build = (
        <div>
          <h1>{this.state.post.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={this.createMarkup(
              this.state.post.content.rendered
            )}
          />
        </div>
      );
    } else {
      build = <div />;
    }
    return build;
  }
}

export default PostView;
