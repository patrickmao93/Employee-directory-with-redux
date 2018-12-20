import React from "react";
import { connect } from "react-redux";

const onClick = event => {
  event.stopPropagation();
};

const renderArrow = orientation => {};

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
      {renderArrow("left")}
      {renderArrow("right")}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedEmployee: state.selectedEmployee,
    displayedEmployeesLength: state.displayedEmployees.length
  };
};

export default connect(mapStateToProps)(Modal);
