import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UserSideBar from "../components/User/SideBar/SideBar";
import BlockInfor from "../components/User/BlockInfor/BlockInfor";

export default function UserInfor() {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", height: "max-content" }}>
        <UserSideBar idUserInfor="id-focus" />
        <div style={{ width: "71%", height: "max-content", float: 'right'}}>
          <BlockInfor />
        </div>
      </div>
      <Footer />
    </div>
  );
}
