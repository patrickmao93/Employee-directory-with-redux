import React from "react";

const Card = props => {
  return (
    <div className="card">
      <div className="card__thumbnail">
        <img className="card__thumbnail__image" src="" alt="" />
      </div>
      <div className="card__info">
        <h2 className="card__info__name">Name</h2>
        <span className="card__info__desc">email@email.com</span>
        <span className="card__info__desc">City</span>
      </div>
    </div>
  );
};

export default Card;