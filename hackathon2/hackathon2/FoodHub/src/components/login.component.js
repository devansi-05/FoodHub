import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import M from "materialize-css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      resMessage: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    const user = {
      password: this.state.password,
      email: this.state.email,
    };
    console.log(user);

    const res = await axios({
      method: "post",
      url: "http://localhost:8000/users/login",
      validateStatus: null,
      data: user,
    });
    if (res.status === 200) {
      localStorage.setItem("jwt", res.data.jwt);
      this.setState({ resMessage: JSON.stringify(res.status) });
    } else {
      console.log(`Registration error: ${JSON.stringify(res.data)}`);
      this.setState({ resMessage: JSON.stringify(res.status) });
      console.log(this.state.resMessage);
    }

    if (this.state.resMessage && this.state.resMessage == 200) {
      window.location = `/listings`;
    }

    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="container" style={{ alignItems: "center" }}>
        <h3>Login</h3>

        <form onSubmit={this.onSubmit}>
          <label for="email">Email</label>
          <input
            placeholder="email"
            id="email"
            type="text"
            className="validate"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />

          <label for="password">Password</label>
          <input
            placeholder="password"
            id="password"
            type="password"
            className="validate"
            value={this.state.password}
            onChange={this.onChangePassword}
          />

          {this.state.resMessage == 400 && (
            <h3 className="error"> Complete all the fields! </h3>
          )}
          {this.state.resMessage == 401 && (
            <h3 className="error">
              {" "}
              User does not exist or incorrect password!{" "}
            </h3>
          )}
          {this.state.resMessage == 200 && (
            <h3 className="error"> Success! </h3>
          )}

          {/* <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div> */}
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}
