import React from "react";

function Text(props) {
  const { color } = props;
  return <h1 style={{ color }}>{props.children}</h1>;
}

export default Text;
