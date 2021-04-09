import React from "react";
import Folow from "./folow";
import Count from "./count";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.state = {
      loading: true,
      folowers: 0,
    };
  }

  increment = () => {
    console.log("clicked");
    this.setState({
      folowers: this.state.folowers + 1,
    });
  };

  render() {
    return (
      <div className="navigation-bar">
        <Count value={this.state.folowers} />
        <nav>
          <ul className="nav">
            <Link to="/post">
              <li>Post</li>
            </Link>
            <Link to="/folowers">
              <li>Folowers</li>
            </Link>
            <Link to="/folowing">
              <li>Folowing</li>
            </Link>
          </ul>
        </nav>
        <Folow increment={this.increment} />
      </div>
    );
  }
}
export default NavigationBar;
