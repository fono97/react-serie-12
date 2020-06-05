import React, { Component } from "react";
import "./App.css";

const MyInput = (props) => {
  return <input type="text" ref={props.inputRef} />;
};

const FunctionCustom = () => {
  let inputRef = null;
  const onClick = () => {
    inputRef.focus();
  };
  return (
    <div>
      <div>
        <span>My Input</span>
        <MyInput
          inputRef={(input) => {
            inputRef = input;
          }}
        />
        <input type="submit" value="submit" onClick={onClick} />
      </div>
    </div>
  );
};

class App extends Component {
  onClick = () => {
    alert(
      `yey: ${this.firstName.value} | ${this.lastName.value} has submmitted! :)`
    );
  };
  onKeyUp = (target, e) => {
    if (e.keyCode === 13) {
      switch (target) {
        case "firstName":
          this.lastName.focus();
          break;
        case "lastName":
          this.age.focus();
          break;
        case "age":
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  };
  render() {
    return (
      <div className="App">
        <FunctionCustom />
        <div>
          <span>first Name</span>
          <input
            ref={(input) => {
              this.firstName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "firstName")}
            type="text"
          />
        </div>
        <div>
          <span>Last name</span>
          <input
            ref={(input) => {
              this.lastName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "lastName")}
            type="text"
          />
        </div>
        <div>
          <span>Age</span>
          <input
            ref={(input) => {
              this.age = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "age")}
            type="text"
          />
        </div>
        <div>
          <input
            type="submit"
            value="submit"
            ref={(input) => {
              this.submit = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "submit")}
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
