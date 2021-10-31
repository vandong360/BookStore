import React from 'react';
import "./EndBlock.css";

const CardItem = (props) => {
  return (
    <div className="card-item">
      <img className="img-left" src={props.img} alt="" />
      <div className="card-content">
        <h5>{props.text}</h5>
      </div>
    </div>
  );
}

export default CardItem;
