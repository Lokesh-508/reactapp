import React from "react";
import { Link } from "react-router-dom";

class donorRegister extends React.Component {
  state = {
    name: "",
    email: "",
    gender: "",
    age: "",
    city: "",
    password: "",

    loginEmail: "",
    loginPassword: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      name,
      email,
      gender,
      age,
      city,
      password,

      loginEmail,
      loginPassword
    } = this.state;
    return (
      <div>
        <header>Donors Site</header>
        <div id="fullBox">
          <div id="about">
            <h2>Thanks For Your Donation!</h2>
            <Link to="/hospitalRegister" className={"text-danger"}>
              A Hospital?
            </Link>
            <div id="wholeLogin">
              {/* <div
                className="alert alert-warning"
                id="donorLoginAlert"
                role="alert"
              >
                Email and password does not match!
              </div> */}
              <h5>Login:</h5>
              <form className="form-signin" onSubmit={this.onLogin}>
                <div className="input-group">
                  <input
                    type="text"
                    name="loginEmail"
                    value={loginEmail}
                    className="form-control"
                    placeholder="Email"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    name="loginPassword"
                    value={loginPassword}
                    className="form-control"
                    placeholder="Password"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-lg btn-outline-light btn-block form-control"
                    name="add"
                  />
                </div>
              </form>
            </div>
          </div>

          <div id="regBox">
            {/* <div
              className="alert alert-warning"
              id="donorRegisterAlert"
              role="alert"
            >
              The Email is already registered!
            </div> */}
            <h5>Register:</h5>
            <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="form-control"
                  placeholder="Full Name"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="email"
                  value={email}
                  className="form-control"
                  placeholder="Email"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  className="form-control"
                  placeholder="Gender"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="number"
                  name="age"
                  value={age}
                  className="form-control"
                  placeholder="Age"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="city"
                  value={city}
                  className="form-control"
                  placeholder="City"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="form-control"
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
              </div>
              All fields are required
              <div className="input-group">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-lg btn-outline-dark btn-block form-control"
                  name="add"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default donorRegister;
