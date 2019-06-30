//import React, { Component } from "react";
import { h, Component } from "preact";
import axios from "axios";
import Link from "react-router-dom/Link";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount() {
    if (this.props.cache.data) {
      return this.setState({ posts: this.props.cache.data })
    }
    axios.get("https://techcrunch.com/wp-json/wp/v2/posts").then(posts => {
      this.props.fillCache({ data: posts.data });
      this.setState({
        posts: posts.data
      });
    });
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <Link to={`./${post.slug}`} key={post.id}>
            <div className="card" key={post.id}>
              <div className="card-content">
                <h3>{post.title.rendered}</h3>
                <div
                  dangerouslySetInnerHTML={this.createMarkup(
                    post.excerpt.rendered
                  )}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostList;
