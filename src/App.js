import React, { Component } from "react";

class App extends Component {
  state = {
    user: {
      name: "Manuela Jiménez",
      country: "Colombia",
      twitter: "@arche4m",
      youtube: "mnujima",
    },
  };
  render() {
    const {user} = this.state
    const keys = Object.keys(user);
    return (
      <div>
        <h3>Iterando propiedades de objetos ⭐️</h3>
        <ul>
        {keys.map(key =>(
          <li>
          <strong>
          {key}: {user[key]}
          </strong>
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

export default App;
