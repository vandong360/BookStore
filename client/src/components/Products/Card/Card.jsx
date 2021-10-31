/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Card.css";
import RatingBar from "./RatingBar"
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function calcRate(r) {
  const f = ~~r, //Tương tự Math.floor(r)
    id = "star" + f + (r % f ? "half" : "");
  id && (document.getElementById(id).checked = !0);
}

export default function ProductCard(props) {
  return (
    <div className="card">
      <Link className="link" to="/products/detail">
        <img
          className="card-img-top"
          src={process.env.PUBLIC_URL + props.img}
          alt="Card image cap"
        />
      </Link>
      <div className="card-body">
        <Link className="link" to="/products/detail">
          <h5 className="card-title">{props.name}</h5>
        </Link>
        <p className="card-price">{props.price}đ</p>
        <p className="card-price-old">{props.oldPrice}đ</p>
        <div className="card-rate-bar">
          <RatingBar />
        </div>
      </div>
    </div>
  );
}
