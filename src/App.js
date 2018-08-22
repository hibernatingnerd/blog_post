
import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  constructor (props) {
  //make a call to parent
  super()
  //  define an initial state
  this.state = {
    body: props.body
  }
}

changeBody(e) {
  let newBody = "hey you!"
  this.setState({
    body: newBody
  })
}

handleFormInput (e) {
  console.log(e);
  this.setState({
    body: e.target.value
  })
}





render() {
  let authors = this.props.allAuthors.map( (author, index) => (
    <Author author={author} key={index} />
  ))

    return (
      <div>
        <h1>{this.props.title}</h1>
        {authors}
        <div>
          <p>{this.state.body}</p>
          <input type="text" onChange={(e) => this.handleFormInput(e)}></input>
          <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        </div>
        <h3>Comments:</h3>
        <Comment body={this.props.comments[0]} />
      </div>
    )
  }
}

export default Post
