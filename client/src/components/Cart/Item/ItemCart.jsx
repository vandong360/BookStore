import React from 'react'
import './ItemCart.css'
import InputQuantity from "../../Products/InputQuantity/InputQuantity";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function ItemCart() {
  return (
    <div className="item-cart">
      <div className="row">
        <div className="col-md-3">
          <a href="/products/detail"><img src={process.env.PUBLIC_URL + '/images/test/tamQuoc.jpg'} alt="" /></a> 
        </div>
        <div className="col-md-7">
          <a href="/products/detail"><h6>Tam Quốc Diễn Nghĩa - La Quán Trung</h6></a>
          <span className="price">332.000 đ</span>
        </div>
        <div className="col-md-2">
          <div className="del-item">
            <a href="" type="button"><HighlightOffIcon /></a>
          </div>
          <div className="quantity">
            <InputQuantity />
          </div>
          <span className="label">Thành Tiền</span>
          <span className="total-price">332.000 đ</span>
        </div>
      </div>
    </div>
  );
}
