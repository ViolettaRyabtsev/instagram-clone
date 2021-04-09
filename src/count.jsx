import React from "react";

class Count extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("COUNT PROPS: ", this.props);
    return <h1>{this.props.value}</h1>;
  }
}

export default Count;
