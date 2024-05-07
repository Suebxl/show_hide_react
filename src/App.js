import "./styles.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <div className="container">
        <button
          onClick={() => {
            setShow((prevShow) => !prevShow);
          }}
        >
          {show ? "Hide" : "Show"}
        </button>
        {show && <h2>Welcome to React Challenges</h2>}
      </div>
    </div>
  );
}
