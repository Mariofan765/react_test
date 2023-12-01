import React from "react";

import "../styles.css"; // Import your CSS file

import PropTypes from "prop-types";

function TextBlock({ title }) {
  return (
    <div className="text-block">
      <h1>{title}</h1>
    </div>
  );
}

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TextBlock;
