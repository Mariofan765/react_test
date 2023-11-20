import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.css"; // Import your CSS file

function App() {
  const [activeBox, setActiveBox] = useState(null);

  return (
    <div className="boxes">
      <TransitionGroup component={null}>
        {[...Array(4)].map((_, index) => (
          <CSSTransition
            key={index}
            timeout={1000}
            classNames="box-transition"
            unmountOnExit // This prop will unmount the component on exit
            component={null}
          >
            <div
              className={`box ${
                activeBox === index
                  ? "active"
                  : activeBox !== null
                    ? "inactive"
                    : ""
              }`}
              onClick={() => setActiveBox(activeBox !== index ? index : null)}
            >
              Click me
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default App;
