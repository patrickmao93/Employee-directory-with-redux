import React from "react";

const renderArrowPath = props => {
  if (props.orientation === "left") {
    return (
      <path
        className={`${props.orientation}-arrow__path`}
        fill="#404A51"
        d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
      />
    );
  } else if (props.orientation === "right") {
    return (
      <path
        className={`${props.orientation}-arrow__path`}
        fill="#404A51"
        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
      />
    );
  }
};

const ArrowButton = props => {
  return (
    <nav className={`${props.orientation}-arrow`} onClick={props.onClick}>
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon={`angle-${props.orientation}`}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
      >
        {renderArrowPath(props)}
      </svg>
    </nav>
  );
};

export default ArrowButton;
