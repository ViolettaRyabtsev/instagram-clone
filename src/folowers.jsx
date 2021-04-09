import React from "react";
import folowersApi from "./FolowersApi";

class Folowers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      Accaunts: [],
    };
  }
  async componentDidMount() {
    let users = await folowersApi();
    console.log(users);

    let usersInformation = users.map((person) => {
      let follower = {
        name: person.first_name + " " + person.last_name,
        avatar: person.avatar,
        email: person.email,
      };
      return follower;
    });

    this.setState({
      Accaunts: usersInformation,
    });
  }

  render() {
    const { Accaunts } = this.state;
    return (
      <div className="folowers-box">
        {Accaunts.map((person) => (
          <div className="folowers">
            <img
              src={person.avatar}
              width="100px"
              height="100px"
              className="avatar-photo"
            />
            <h1>{person.name}</h1>
            <h2>{person.email}</h2>
          </div>
        ))}
      </div>
    );
  } //render
} //class

export default Folowers;
