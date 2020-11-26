import logo from "../../aseets/img/BL_logo_square_png.png";
import "./home.css";
import React from "react";

class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
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
      <div className="app-main">
        <div className="main">
          <div>
            <h1>Hi {this.state.userName}, Welcome to BridgeLabz</h1>
            <img src={logo} onClick={this.onClick} alt="The BridgeLabz"></img>
          </div>
          <div className="input-box">
            <input className="input" onChange={this.onNameChange}></input>
            <span className="error-output" onChange={this.state.onNameChange}>
              {this.state.nameError}
            </span>
          </div>
          <p>
            <b>We provide intense training on:</b>
          </p>
          <ul>
            <li>Java Full Stack React</li>
            <li>Java Full Stack Dot Net</li>
            <li>Java Abridged</li>
          </ul>
          <br></br>
          <p>We ensure individual growth.</p>
          <br></br>
          <p>
            To know more about us visit:{" "}
            <a href="https://www.bridgelabz.com" target="_blank">
              Bridgelabz
            </a>
          </p>
          <p>
            <b>
              <i>Employeebility to All</i>
            </b>
          </p>
        </div>
      </div>
    );
  }
}

export default App;