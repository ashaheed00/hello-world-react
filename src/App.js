import logo from "./aseets/img/BL_logo_square_png.png";
import "./App.css";
import React from "react";

class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
      title: "Hi ",
      userName: "Foo",
      nameError: "Eg. John",
    };
  }

  onClick = ($event) => {
    console.log("blz", $event);
    window.open(this.url, "_blank");
  };

  onNameChange = (event) => {
    console.log("username: ", event.target.value);
    const nameRegex = RegExp("^[A-Z][a-z]{2,}");
    this.setState({ userName: event.target.value });
    if (nameRegex.test(event.target.value)) this.setState({ nameError: "" });
    else this.setState({ nameError: "Wrong name format" });
  };

  render() {
    return (
      <>
        <div>
          <h1>
            {this.state.title}
            {this.state.userName}
          </h1>
          <img src={logo} onClick={this.onClick} alt="The BridgeLabz"></img>
        </div>
        <div>
          Username: <input onChange={this.onNameChange}></input>
          <span class="error-output" onChange={this.state.onNameChange}>
            {this.state.nameError}
          </span>
        </div>
      </>
    );
  }
}

export default App;
