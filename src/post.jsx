import React from "react";

import CommentList from "./CommentList";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: [],
      list: [],
    };
  }

  handlerUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleSubmitEvent = (event) => {
    let arrayOfComments = [];
    let comment = {
      username: this.state.username,
      text: this.state.comment,
    };

    arrayOfComments.push(comment);

    this.setState({
      list: arrayOfComments,
    });

    //alert(`${this.state.comment} ${this.state.username}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitEvent}>
        <div>
          <label>
            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handlerUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <button type="submit"> Submit </button>
        <div>
          <ul>
            {this.state.list.map((item) => (
              <li>
                <h5>user id: {item.username}</h5>
                <p> post : {item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <CommentList value={this.state.list} />
      </form>
    );
  }
}

export default Post;
