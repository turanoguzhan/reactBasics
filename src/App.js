import { Component } from "react";
import "./App.css";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends Component {
  state = {
    users: [
      { username: "Ouz", password: "1234" },
      { username: "Turan", password: "q1w2e3r4" },
    ],
  };

  onChangeNameEvent = (event) => {

    this.setState({
      users: [
        { username: "Oguzhan", password: "whatTheFantasticPass" },
        { username: event.target.value, password: this.state.users[1].password },
      ],
    });
  };

  onChangePasswordEvent = (event) => {

    this.setState({
      users: [
        { username: "Oguzhan", password: "whatTheFantasticPass"  },
        { username: this.state.users[1].username, password: event.target.value },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Assignment-1</p>
        </header>
        <body>
          <UserInput
            username={this.state.users[1].username}
            password={this.state.users[1].password}
            changeNameEvent={this.onChangeNameEvent}
            changePassEvent={this.onChangePasswordEvent}
          />
          <UserOutput
            username={this.state.users[0].username}
            password={this.state.users[0].password}
          />
          <UserOutput
            username={this.state.users[1].username}
            password={this.state.users[1].password}
          />
        </body>
      </div>
    );
  }
}

export default App;
