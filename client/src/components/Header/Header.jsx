/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";

function Header() {

  return (
    <header className="header">
      <a href="/">
        <img
          id="logo"
          src={process.env.PUBLIC_URL + "/logoWeb.png"}
          alt="logo here"
        />
      </a>

      <input type="search" id="search-bar" className="form-control" placeholder="Search books" />
      <a href="#" className="search-btn"> <i className="fa fa-search"></i></a>
    
      <a href="#" id="notification" className="menu-icon"><i className="fa fa-fas fa-bell"></i></a>
      <a href="/cart" id="cart" className="menu-icon"><i className="fas fa-shopping-cart"></i></a>
      <a href="/sign-in" id="login" className="menu-icon">
        <i class="fas fa-sign-in-alt"></i>
        <span>ĐĂNG NHẬP</span>
      </a>
      
    </header>
  );
}

export default Header;