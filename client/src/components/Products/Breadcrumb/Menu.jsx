import React from "react"
import "./Menu.css"
import CategoryItem from "../../Home/CategoryBar/CategoryItem"

function TopMenu() {

  const category = [
    "Sách Giáo Khoa",
    "Sách Văn Học",
    "Sách Thiếu Nhi",
    "Tiểu Sử - Hồi Ký",
    "Sách Học Ngoại Ngữ",
    "Sách Kinh Tế",
    "Sách Lập Trình"
  ];

  const listItems = category.map((item) => (
    <CategoryItem category={item} />
  ));
    
  return (
    <div className="top-menu">
      <div className="menu-title">
        <span>Danh mục sản phẩm</span>
      </div>
      <div className="menu-content">
        <ul className="nav">{listItems}</ul>
      </div>
    </div>
  );
}
  
export default TopMenu;  
