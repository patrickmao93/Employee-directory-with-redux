import React from "react";
import { connect } from "react-redux";

import { closeModal } from "../actions";

const onClick = props => {
  return event => {
    props.closeModal();
  };
};

const Overlay = props => {
  if (props.showModal) {
    return (
      <div className="overlay overlay--active" onClick={onClick(props)}>
        {props.children}
      </div>
    );
  } else {
    return <div className="overlay">{props.children}</div>;
  }
};

const mapStateToProps = state => {
  return {
    showModal: state.showModal
  };
};

export default connect(
  mapStateToProps,
  { closeModal }
)(Overlay);
