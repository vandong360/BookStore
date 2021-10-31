import React from 'react';
import Header from "../components/Header/Header.jsx";
import CategoryBar from "../components/Home/CategoryBar/CategoryBar.jsx";
import SlideShow from "../components/Home/SlideShow/SlideShow.jsx";
import GridBanner from "../components/Home/GridBanner/GridBanner.jsx"
import BlockProducts from "../components/Home/BlockProducts/BlockProducts.jsx"
import EndBlock from "../components/Home/EndBlock/EndBlock.jsx"
import Footer from "../components/Footer/Footer.jsx"

const img1 = "images/slides/img1.png";
const img2 = "images/slides/img2.png";
const img3 = "images/slides/img3.png";

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
];

const imgtq1 = "/images/test/tamQuoc.jpg";

const cateSVH = {
  title: "Sách Văn Học",
  products: [
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
  ],
};

const imgSGK = "/images/test/imgsgk.jpg";

const cateSGK = {
  title: "Sách Giáo Khoa",
  products: [
    {
      id: 1,
      img: imgSGK,
      name: "bộ sách giáo khoa - lớp 12",
      price: "145.000",
      oldPrice: "199.000",
    },
    {
      id: 2,
      img: imgSGK,
      name: "bộ sách giáo khoa - lớp 12",
      price: "145.000",
      oldPrice: "199.000",
    },
    {
      id: 3,
      img: imgSGK,
      name: "bộ sách giáo khoa - lớp 12",
      price: "145.000",
      oldPrice: "199.000",
    },
    {
      id: 4,
      img: imgSGK,
      name: "bộ sách giáo khoa - lớp 12",
      price: "145.000",
      oldPrice: "199.000",
    },
    {
      id: 5,
      img: imgSGK,
      name: "bộ sách giáo khoa - lớp 12",
      price: "145.000",
      oldPrice: "199.000",
    },
  ],
};

const imgTN = "/images/test/imgConan.jpg";

const cateSTN = {
  title: "Sách Thiếu Nhi",
  products: [
    {
      id: 1,
      img: imgTN,
      name: "Thám tử lừng danh Conan - tập 84",
      price: "145.000",
      oldPrice: "199.000",
    },
    {
      id: 2,
      img: imgTN,
      name: "Thám tử lừng danh Conan - tập 84",
      price: "145.000",
      oldPrice: "199.000",
    },
    {
      id: 3,
      img: imgTN,
      name: "Thám tử lừng danh Conan - tập 84",
      price: "145.000",
      oldPrice: "199.000",
    },
    {
      id: 4,
      img: imgTN,
      name: "Thám tử lừng danh Conan - tập 84",
      price: "145.000",
      oldPrice: "199.000",
    },
    {
      id: 5,
      img: imgTN,
      name: "Thám tử lừng danh Conan - tập 84",
      price: "145.000",
      oldPrice: "199.000",
    },
  ],
};

const HomePage = () => {
  return (
    <>
      <Header />
      <CategoryBar />
      <SlideShow
        input={collection}
        ratio={`1:1`}
        mode={`automatic`}
        timeout={`3614`}
      />
      <GridBanner />
      <BlockProducts title={cateSGK.title} products={cateSGK.products} />
      <BlockProducts title={cateSVH.title} products={cateSVH.products} />
      <BlockProducts title={cateSTN.title} products={cateSTN.products} />
      <EndBlock />
      <Footer />
    </>
  );
}

export default HomePage;
