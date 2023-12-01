import React, { useState, useRef, useEffect } from "react";
import BlockInner from "./elements/BlockInner";

import "./styles.css"; // Import your CSS file

function App() {
  const [activeBox, setActiveBox] = useState(null);
  const [hiddenBoxes, setHiddenBoxes] = useState([]);
  const timerRef = useRef(null);

  function handleClick(boxId) {
    setActiveBox(boxId);
    timerRef.current = setTimeout(() => {
      setHiddenBoxes([1, 2, 3].filter((id) => id !== boxId));
    }, 1100);
  }

  function handleReset(event) {
    event.stopPropagation();
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setActiveBox(null);
  }

  useEffect(() => {
    setHiddenBoxes([]);
  }, [activeBox]);

  return (
    <div className="boxes">
      {[1, 2, 3].map((boxId) => (
        <div
          key={boxId}
          className={`box ${
            activeBox !== null && activeBox !== boxId ? "inVisible" : ""
          } ${hiddenBoxes.includes(boxId) ? "hidden" : ""}`}
          onClick={() => handleClick(boxId)}
        >
          <BlockInner title="Вставленный с сервера текст">
            <button
              className={`resetForm ${activeBox !== null ? "visible" : ""}`}
              onClick={handleReset}
            >
              нарисованный крестик
            </button>
          </BlockInner>
        </div>
      ))}
    </div>
  );
}

export default App;
