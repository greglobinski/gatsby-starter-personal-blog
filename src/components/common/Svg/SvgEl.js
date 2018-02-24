import React from "react";
import PropTypes from "prop-types";

const SvgEl = props => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox={props.svg.attributes.viewBox}
      width="100%"
      height="100%"
    >
      {props.svg.content}
    </svg>
  );
};

SvgEl.propTypes = {
  svg: PropTypes.shape({
    attributes: PropTypes.object,
    content: PropTypes.node
  }).isRequired
};

export default SvgEl;
