import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UserSideBar from "../components/User/SideBar/SideBar";
import BlockOrder from "../components/User/BlockOrder/BlockOrder";

export default function UserInfor() {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", height: "max-content" }}>
        <UserSideBar idUserOrder="id-focus" />
        <div style={{ width: "71%", height: "max-content", float: "right" }}>
          <BlockOrder />
        </div>
      </div>
      <Footer />
    </div>
  );
}
