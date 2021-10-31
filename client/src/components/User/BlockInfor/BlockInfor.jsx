import React, { useState } from "react";
import './BlockInfor.css'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function BlockInfor() {
  const [classs, setClasss] = useState("disable-box");

  return (
    <div className="infor-box">
      <h4>Thông tin cá nhân</h4>
      <div className="form-infor">
        <div className="input-box">
          <label>Tên người dùng:</label>
          <div className="input-field">
            <TextField
              className="input"
              required
              id="outlined-required"
              label=" "
              defaultValue="default Value"
              size="small"
            />
          </div>
        </div>

        <div className="input-box">
          <label>Số điện thoại:</label>
          <div className="input-field">
            <TextField
              className="input"
              required
              id="outlined-required"
              label=" "
              defaultValue="default Value"
              size="small"
            />
          </div>
        </div>

        <div className="input-box">
          <label>Email:</label>
          <div className="input-field">
            <TextField
              className="input"
              required
              id="outlined-required"
              label=" "
              defaultValue="default Value"
              size="small"
            />
          </div>
        </div>

        <div className="input-box">
          <label>Địa chỉ:</label>
          <div className="input-field">
            <TextField
              className="input"
              required
              id="outlined-required"
              label=" "
              defaultValue="Đây là địa chỉ"
              size="small"
            />
          </div>
        </div>

        <div className="btn-box">
          <Button id="update" variant="contained">
            Lưu thông tin
          </Button>
          <Button
            id="change-pass"
            onClick={() => setClasss("active-box")}
            variant="outlined"
          >
            Đổi mật khẩu
          </Button>
        </div>
      </div>

      <div className={classs}>
        <div id="form-pass">
          <Button id="close" onClick={() => setClasss("disable-box")}>
            <HighlightOffIcon />
          </Button>
          <h4>Đổi mật khẩu</h4>

          <div className="form-infor">
            <div className="input-box">
              <label>Mật khẩu hiện tại:</label>
              <div className="input-field">
                <TextField
                  className="input"
                  required
                  id="outlined-required"
                  label=" "
                  defaultValue="default Value"
                  size="small"
                />
              </div>
            </div>

            <div className="input-box">
              <label>Mật khẩu mới:</label>
              <div className="input-field">
                <TextField
                  className="input"
                  required
                  id="outlined-required"
                  label=" "
                  defaultValue="default Value"
                  size="small"
                />
              </div>
            </div>

            <div className="input-box">
              <label>Nhập lại:</label>
              <div className="input-field">
                <TextField
                  className="input"
                  required
                  id="outlined-required"
                  label=" "
                  defaultValue="default Value"
                  size="small"
                />
              </div>
            </div>

            <div className="btn-box">
              <Button id="update" variant="contained">
                Cập nhật
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
