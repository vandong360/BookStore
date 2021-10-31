import React from "react";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import UserInfor from "./pages/UserInfor";
import UserOrder from "./pages/UserOrder";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/products/detail" component={ProductDetails} />
      <Route path="/products/category" component={Category} />
      <Route path="/cart" component={Cart} />
      <Route path="/user/information" component={UserInfor} />
      <Route path="/user/my-order" component={UserOrder} />
    </Router>
  );
}

export default App;
