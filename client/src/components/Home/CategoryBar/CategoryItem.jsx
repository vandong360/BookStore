import React from 'react';
import "./CategoryBar.css";

const CategoryItem = (props) => {
  return (
    <>
      <li className="category-item">
        <a href={props.link}> {props.category} </a>
        <i class="fas fa-angle-right"></i>
      </li>
    </>
  );
}

export default CategoryItem;
