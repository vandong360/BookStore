import React, { Component } from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ItemCart from '../components/Cart/Item/ItemCart'
import TotalOrder from '../components/Cart/TotalOrder/TotalOrder';


class Cart extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <h4 style={{ padding: "1rem" }}>GIỎ HÀNG</h4>
          <div style={{ width: "100%", height: "max-content" }}>
            <div style={{ width: "68%", height: "max-content", float: 'left', position: 'relative'}}>
              <ItemCart />
              <ItemCart />
              <ItemCart />
            </div>
            <div style={{ width: "30%", height: "max-content", float: 'right',background: 'white'}}>
              <TotalOrder />
            </div>
          </div>
        </div>
        
        <Footer />
      </>
    );
  }
}

export default Cart;