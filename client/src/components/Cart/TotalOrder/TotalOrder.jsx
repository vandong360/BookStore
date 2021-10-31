import React from 'react'
import './Totalorder.css'
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button"

const currencies = [
  {
    value: 15,
    label: "Giảm thêm 15%",
  },
  {
    value: 5,
    label: "Giảm thêm 5%",
  },
  {
    value: 20,
    label: "Giảm thêm 20%",
  },
  {
    value: 10,
    label: "Giảm thêm 10%",
  },
];

export default function TotalOrder() {
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const price = 500000;
  let discPrice = (currency * price) / 100;
  let totalPrice = price - discPrice;

  return (
    <div className="order-box">
      <h5>Mã giảm giá</h5>
      <div style={{ textAlign: "center" }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <hr />

      <div>
        <h5 style={{ float: "left" }}>Thông tin giao hàng</h5>
        <div style={{ textAlign: "center" }}>
          <TextField
            className="order-infor"
            required
            id="name"
            label="Người nhận"
            defaultValue="Nguyễn Văn A"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            className="order-infor"
            required
            id="address"
            label="Địa chỉ"
            defaultValue="15 Trần Đại Nghĩa, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            className="order-infor"
            required
            id="phone"
            label="Số điện thoại"
            defaultValue="036485722"
            InputProps={{
              readOnly: false,
            }}
          />
        </div>
      </div>
      <hr />
      <div>
        <h6>Thanh toán khi nhận hàng</h6>
        <span className="label">Tổng số tiền:</span>
        <span className="value">{price.toLocaleString("de-DE")} đ</span>
        <span className="label">Giảm giá:</span>
        <span className="value">-{discPrice.toLocaleString("de-DE")} đ</span>
        <hr style={{ clear: "both" }} />
        <span className="label">Tổng thanh toán:</span>
        <span
          style={{ fontSize: "18px", fontWeight: "bold", color: "red" }}
          className="value"
        >
          {totalPrice.toLocaleString("de-DE")} đ
        </span>
      </div>

      <div className="btn-order" >
        <Button variant="contained">ĐẶT HÀNG</Button>
      </div>
    </div>
  );
}
