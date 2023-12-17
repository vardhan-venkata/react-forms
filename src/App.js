import ClassControlled from "./ClassControlled/ClassControlled";
import ClassUnControlled from "./ClassUnControlled/ClassUnControlled";
import FunctionalControlled from "./FunctionalControlled/FunctionalControlled";
import FunctionalUnControlled from "./FunctionalUnControlled/FunctionalUnControlled";

function App() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "orange",
          color: "blueviolet",
          margin: 0,
          padding: 6,
          textDecoration: "underline",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Forms Demo
      </h1>
      <div style={{ margin: "1.2rem" }}>
        <div>
          <h2>Functional Controlled</h2>
          <FunctionalControlled />
        </div>
        <div>
          <h2>Functional Un-Controlled</h2>
          <FunctionalUnControlled />
        </div>
        <div>
          <h2>Class Controlled</h2>
          <ClassControlled />
        </div>
        <div>
          <h2>Class Un-Controlled</h2>
          <ClassUnControlled />
        </div>
      </div>
    </div>
  );
}

export default App;
