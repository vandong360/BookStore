import React from "react";
import "./CategoryBar.css";
import CategoryItem from "./CategoryItem";

const CategoryBar = () => {
  const category = [
    "Sách Giáo Khoa",
    "Sách Văn Học",
    "Sách Thiếu Nhi",
    "Tiểu Sử - Hồi Ký",
    "Sách Học Ngoại Ngữ",
    "Sách Kinh Tế",
    "Sách Lập Trình"
  ];

  const link = "/products/category";

  const listItems = category.map((item) => (
    <CategoryItem link={link} category={item} />
  ));

  return (
    <div className="category-bar">
      <div className="title-bar">
        <span>Danh mục sản phẩm</span>
      </div>

      <ul className="nav">
        {listItems}
      </ul>
    </div>
  );
};

export default CategoryBar;
