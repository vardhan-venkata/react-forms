import React, { useState } from "react";

function FunctionalControlled() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(event) {
    alert(
      `Email : ${email} & Password : ${password} entered in the functional controlled component`
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
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div style={{ margin: "10px" }}>
        <label>Password : </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

export default FunctionalControlled;
