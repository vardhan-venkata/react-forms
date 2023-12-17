import React from "react";

class ClassUnControlled extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.email = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit(event) {
    console.log("email", this.email);
    console.log("password", this.password);
    alert(
      `Email : ${this.email?.current?.value} & Password : ${this.password?.current?.value} entered in the class un-controlled component`
    );
    event.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          border: "1px solid black",
          width: "350px",
          height: "150px",
          marginLeft: "10px",
          padding: "10px",
        }}
      >
        <div style={{ margin: "10px" }}>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            // defaultValue={"Please Enter Email"}
            ref={this.email}
            required
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Password : </label>
          <input
            // type="password"
            name="password"
            ref={this.password}
            required
          />
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default ClassUnControlled;
