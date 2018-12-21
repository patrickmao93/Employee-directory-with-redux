import React from "react";
import { connect } from "react-redux";

import ArrowButton from "./ArrowButton";
import { selectEmployee } from "./../actions/index";

const onClick = event => {
  event.stopPropagation();
};

const renderArrow = (props, orientation) => {
  if (
    (orientation === "left" && props.selectedEmployee.index > 0) ||
    (orientation === "right" &&
      props.selectedEmployee.index < props.displayedEmployees.length - 1)
  ) {
    return (
      <ArrowButton
        orientation={orientation}
        onClick={onClickArrow(props, orientation)}
      />
    );
  } else {
    return null;
  }
};

const onClickArrow = (props, orientation) => {
  return event => {
    let index = null;
    if (orientation === "left") {
      index = props.selectedEmployee.index - 1;
    } else if (orientation === "right") {
      index = props.selectedEmployee.index + 1;
    }
    props.selectEmployee(props.displayedEmployees[index]);
  };
};

const Modal = props => {
  const employeeInfo = props.selectedEmployee.info;
  if (!employeeInfo) {
    return null;
  }
  return (
    <div className="modal-wrapper" onClick={onClick}>
      <div className="modal">
        <div className="modal__thumbnail">
          <img src={employeeInfo.picURL} alt={employeeInfo.firstName} />
        </div>
        <div className="modal__info">
          <h2 className="modal__info__name">
            {employeeInfo.firstName + " " + employeeInfo.lastName}
          </h2>
          <span className="modal__info__desc">{employeeInfo.email}</span>
          <span className="modal__info__desc">{employeeInfo.city}</span>
          <div className="modal__info__divider" />
          <span className="modal__info__desc">{employeeInfo.phone}</span>
          <span className="modal__info__desc">{employeeInfo.address}</span>
          <span className="modal__info__desc">
            Birthday: {employeeInfo.birthday}
          </span>
        </div>
      </div>
      {renderArrow(props, "left")}
      {renderArrow(props, "right")}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedEmployee: state.selectedEmployee,
    displayedEmployees: state.displayedEmployees
  };
};

export default connect(
  mapStateToProps,
  { selectEmployee }
)(Modal);
