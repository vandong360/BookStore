import React from 'react';
import "./EndBlock.css";
import CardItem from './CardItem.jsx';

const imgFreeShip = "./images/endBlock/freeShip.png";
const imgNew = "./images/endBlock/new100.png";
const imgOnlineOrder = "./images/endBlock/orderOnline.png";

const Endblock = () => {

  const content = [
    {
      img: imgNew,
      text: "Mới 100% Chính Hãng",
    },
    {
      img: imgFreeShip,
      text: "Miễn Phí Vận Chuyển Đơn hàng từ 250.000đ",
    },
    {
      img: imgOnlineOrder,
      text: "Đặt Hàng Online Toàn Quốc",
    },
  ];

  return (
    <div className="end-block">
      {content.map((index) => (
        <CardItem img={index.img} text={index.text}/>
      )) 
      }
    </div>
  );
}

export default Endblock;
