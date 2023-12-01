import React from "react";
import PropTypes from "prop-types";
import TextBlock from "./TextBlock";
import TableBlock from "./TableBlock";
import DiaryBlock from "./DiaryBlock";

function BlockInner({ children, title }) {
  let setTitle = "Вставленный с сервера текст";
  return (
    <div className="block-inner">
      {title}
      <TextBlock title={setTitle} />
      <TableBlock />
      <DiaryBlock />
      {children}
    </div>
  );
}

BlockInner.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default BlockInner;
