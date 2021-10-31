import React from "react";
import "./SideBar.css";

export default function UserSideBar(props) {
  return (
    <div className="left-bar">
      <h4>Tài khoản</h4>
      <hr />
      <h6>
        <a id={props.idUserInfor} href="/user/information">Thông tin cá nhân</a>
      </h6>
      <hr />
      <h6>
        <a id={props.idUserOrder} href="/user/my-order">Đơn hàng của tôi</a>
      </h6>
      <hr />
    </div>
  );
}