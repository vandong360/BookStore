import React from "react";
import Header from "../components/Header/Header";
import BreadcrumbBar from "../components/Products/Breadcrumb/BreadcrumbBar";
import SideBar from "../components/Products/Category/SideBar";
import ProductsGrid from "../components/Products/Category/ProductsGrid";
import Footer from "../components/Footer/Footer";

const imgtq1 = "/images/test/tamQuoc.jpg";

const products = [
  {
    id: 1,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 2,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 3,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 4,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
  {
    id: 5,
    img: imgtq1,
    name: "tam quốc diễn nghĩa - la quán trung",
    price: "145.000",
    oldPrice: "199.000",
  },
];

export default function Category() {
  return (
    <>
      <Header />
      <BreadcrumbBar />
      <SideBar />
      <ProductsGrid products={products} />
      <Footer />
    </>
  );
}
