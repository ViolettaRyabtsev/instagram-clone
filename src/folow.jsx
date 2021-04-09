import React from "react";

class Folow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="folowing-button">
        <button onClick={this.props.increment}>FOLOW</button>
      </div>
    );
  }
}

export default Folow;
