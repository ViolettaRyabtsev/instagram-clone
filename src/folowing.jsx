import React from "react";
import folowersApi from "./FolowersApi";

class Folowing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    let usersApi = await folowersApi();
    let usersInformation = usersApi.map((person) => {
      let PersonObject = {
        name: person.first_name,
        avatar: person.avatar,
      };
      return PersonObject;
    });
    this.setState({
      users: usersInformation,
    });
  }

  render() {
    return (
      <div>
        {this.state.users.map((person) => (
          <div className="folowing-boxes">
            <img
              className="avatar-photo"
              src={person.avatar}
              alt="avatar-photo"
              width="100px"
              height="100px"
            />
            <h2>{person.name}</h2>
          </div>
        ))}
      </div>
    );
  }
}
export default Folowing;
