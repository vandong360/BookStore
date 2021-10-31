import React from "react";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignUp = () => {
  return (
    <div className="login-page">
      <div className="left-block">
        <div className="logo-box">
          <img src={process.env.PUBLIC_URL + "./logoWeb.png"} alt="" />
        </div>
      </div>

      <div className="right-block">
        <div className="register-form">
          <form action="">
            <h2>Đăng Ký</h2>
            <TextField
              className="input"
              required
              id="standard-required"
              label="Tên người dùng"
              defaultValue=""
              variant="standard"
            />

            <TextField
              className="input"
              required
              id="standard-required"
              label="Email đăng nhập"
              defaultValue=""
              variant="standard"
            />

            <TextField
              className="input"
              required
              id="standard-required"
              label="Số điện thoại"
              defaultValue=""
              variant="standard"
            />

            <TextField
              className="input"
              required
              id="standard-required"
              label="Đia chỉ"
              defaultValue=""
              variant="standard"
            />

            <TextField
              className="input"
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />

            <Button className="btn-submit" variant="contained">
              Đăng Ký
            </Button>
            <a href="/sign-in">
              <Button
                className="btn-register"
                src="/sign-up"
                variant="outlined"
              >
                Đăng Nhập
              </Button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
