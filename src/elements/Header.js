import React, { useState } from "react";
import "../styles.css";

export default function Header() {
  const [activeDiv, setActiveDiv] = useState(null);

  function handleDivClick(divNumber) {
    setActiveDiv(divNumber);
  }

  function reset() {
    setActiveDiv(null);
  }

  return (
    <header
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative", // This allows the active div to fill its parent
        transition: '5s'
      }}
    >
      <div
        className={`additional-div ${activeDiv === 1 ? "active" : ""}`}
        onClick={() => handleDivClick(1)}
      >
        Additional div 1
      </div>
      <div
        className={`additional-div ${activeDiv === 2 ? "active" : ""}`}
        onClick={() => handleDivClick(2)}
      >
        Additional div 2
      </div>
      <div
        className={`additional-div ${activeDiv === 3 ? "active" : ""}`}
        onClick={() => handleDivClick(3)}
      >
        Additional div 3
      </div>
      <div
        className={`additional-div ${activeDiv === 4 ? "active" : ""}`}
        onClick={() => handleDivClick(4)}
      >
        Additional div 4
      </div>
      {activeDiv && (
        <button
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={reset}
        >
          Reset
        </button>
      )}
    </header>
  );
}
