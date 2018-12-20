import React from "react";

const Modal = props => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal__thumbnail">
          <img src="" alt="" />
        </div>
        <div className="modal__info">
          <h2 className="modal__info__name">Name</h2>
          <span className="modal__info__desc">email@email.com</span>
          <span className="modal__info__desc">City</span>
          <div className="modal__info__divider" />
          <span className="modal__info__desc">Phone number</span>
          <span className="modal__info__desc">address</span>
          <span className="modal__info__desc">Birthday: Birthday</span>
        </div>
      </div>
      {/* {this.renderArrow("left")}
      {this.renderArrow("right")} */}
    </div>
  );
};

export default Modal;
