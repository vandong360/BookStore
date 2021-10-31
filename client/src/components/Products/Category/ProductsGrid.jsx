import React, { Component } from 'react'
import './ProductsGrid.css'
import ProductCard from '../../Products/Card/Card'

export default class ProductsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1      
    };
  }

  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const currentPage = this.state.currentPage;
    const indexOfLastCard = currentPage * 8;
    const indexOfFirstCard = indexOfLastCard - 8;
    const currentTodos = this.props.products.slice(indexOfFirstCard, indexOfLastCard);
    const renderTodos = currentTodos.map((product, index) => {
      return (
        <div className="product-item">
          <ProductCard
            key={index}
            img={product.img}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        </div>
      );
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.products.length / 8); i++) {
      pageNumbers.push(i);
    }
    
    return (
      <div className="products-grid">
        <div id="block">{renderTodos}</div>

        <div className="pagination-custom">
          <ul id="page-numbers">
            {pageNumbers.map((number) => {
              if (this.state.currentPage === number) {
                return (
                  <li key={number} id={number} className="active">
                    {number}
                  </li>
                );              
              }
              else {
                return (
                  <li key={number} id={number} onClick={this.chosePage}>
                    {number}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}
