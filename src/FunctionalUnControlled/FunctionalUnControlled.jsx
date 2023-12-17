import React, { useRef } from "react";

function FunctionalUnControlled() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function onSubmit(event) {
    alert(
      `Email : ${emailRef.current.value} & Password : ${passwordRef.current.value} entered in the functional un-controlled component`
    );
    event.preventDefault();
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        border: "1px solid black",
        width: "350px",
        height: "150px",
        marginLeft: "10px",
      }}
    >
      <div style={{ margin: "10px" }}>
        <label>Email : </label>
        <input type="email" name="email" ref={emailRef} required />
      </div>
      <div style={{ margin: "10px" }}>
        <label>Password : </label>
        <input type="password" name="password" ref={passwordRef} required />
      </div>
      <input
        type="submit"
        value="Submit"
        style={{ backgroundColor: "skyblue", color: "white", margin: "10px" }}
      />
    </form>
  );
}

export default FunctionalUnControlled;
