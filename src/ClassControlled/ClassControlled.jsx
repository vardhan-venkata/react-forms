import React from "react";

class ClassControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleFormSubmit(e) {
    alert(
      `Email : ${this.state.email} & Password : ${this.state.password} entered in the class controlled component`
    );
    e.preventDefault();
  }
  render() {
    return (
      <form
        onSubmit={this.handleFormSubmit}
        style={{
          border: "1px solid black",
          width: "350px",
          height: "150px",
          marginLeft: "10px",
        }}
      >
        <div style={{ margin: "10px" }}>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Password : </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Submit"
          style={{ backgroundColor: "skyblue", color: "white", margin: "10px" }}
        />
      </form>
    );
  }
}

export default ClassControlled;
