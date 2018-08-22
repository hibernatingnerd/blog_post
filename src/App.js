
import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  render() {
    let authors = this.props.allAuthors.map( (author, index) => (
      <Author author={author} key={index} />
    ))

    return (
      <div>
        <h1>{this.props.title}</h1>
        {authors}
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        <Comment body={this.props.comments[0]} />
      </div>
    )
  }
}

export default Post
