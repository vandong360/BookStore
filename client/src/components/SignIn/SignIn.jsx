import React from 'react';
import './SignIn.css'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignIn = () => {
  return (
    <div className="login-page">
      <div className="logo-box">
        <img src={process.env.PUBLIC_URL + "./logoWeb.png"} alt="" />
      </div>
      <div className="login-form">
        <form action="">
          <h2>Đăng Nhập</h2>
          <TextField
            className="input"
            required
            id="standard-required"
            label="Email"
            defaultValue="Hello World"
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
            Đăng Nhập
          </Button>
          <a href="/sign-up">
            <Button className="btn-register" src="/sign-up" variant="outlined">
              Đăng Ký
            </Button>
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
