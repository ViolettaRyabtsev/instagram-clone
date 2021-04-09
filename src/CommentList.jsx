import React from "react";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    this.setState({
      comments: this.props.value,
    });
  }

  render() {
    return (
      <div className="comments-List">
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default CommentList;
