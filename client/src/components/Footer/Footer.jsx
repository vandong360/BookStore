import React from "react";
import "./Footer.css";

export default function Footer() {

  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-5">
          <div className="about-us">
            <img src={process.env.PUBLIC_URL + "/logoWeb.png"} alt="" />
            <p>
              Bookstore chuyên cung cấp thông tin giá cả sách các thể loại. Từ
              sách tiếng anh, tiểu thuyết, học tập, sách trẻ em, truyện tranh,
              truyện trinh thám, sách giao khoa... Bằng khả năng sẵn có cùng sự
              nỗ lực không ngừng, chúng tôi đã tổng hợp hơn 100000 đầu sách,
              giúp bạn có thể so sánh giá, tìm giá rẻ nhất trước khi mua.
            </p>
            <br />
            <span>Tải ngay phiên bản dành cho di dộng!</span>
            <img
              className="app"
              src={process.env.PUBLIC_URL + "../images/MobileApp/android.png"}
              alt=""
            />
            <img
              className="app"
              src={process.env.PUBLIC_URL + "../images/MobileApp/appstore.png"}
              alt=""
            />
          </div>
        </div>

        <div className="col-md-2">
          <div className="menu">
            <h6>ABOUT US</h6>
            <ul>
              <li>Chính sách bảo mật</li>
              <li>Điều khoản dịch vụ</li>
              <li>Hệ thống nhà sách</li>
            </ul>
          </div>
        </div>

        <div className="col-md-2">
          <div className="menu">
            <h6>HỖ TRỢ</h6>
            <ul>
              <li>Chính sách đổi trả - hoàn tiền</li>
              <li>Phân phối sản phẩm</li>
              <li>Phương thức thanh toán</li>
              <li>Phương thức vận chuyển</li>
            </ul>
          </div>
        </div>

        <div className="col-md-3">
          <div className="menu">
            <h6>LIÊN HỆ</h6>
            <p>
              Địa chỉ: Bookstore - 12 Trần Đại Nghĩa, Phường Hoà Hải, Quận Ngũ
              Hành Sơn, Tp. Đà Nẵng
            </p>
            <p>Email: lienhe@bookstore.com</p>
            <div className="contacts">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-tumblr-square"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
