import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar-block">
        <div className="category-list">
          <dl>
            <dt>Danh mục sản phẩm</dt>
            <dd>
              <ol>
                <li>
                  <a href="#" className="list-parent">
                    Sách văn học
                  </a>
                  <ul className="list-child">
                    <li>
                      <a href="">Tác phẩm kinh điển</a>
                    </li>
                    <li>
                      <a href="">Tác phẩm kinh điển</a>
                    </li>
                    <li>
                      <a href="">Tác phẩm kinh điển</a>
                    </li>
                    <li>
                      <a href="">Tác phẩm kinh điển</a>
                    </li>
                    <li>
                      <a href="">Tác phẩm kinh điển</a>
                    </li>
                    <li>
                      <a href="">Tác phẩm kinh điển</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="" className="list-parent">
                    Sách văn học
                  </a>
                  <ul className="list-child">
                    <li>
                      <a href="">Tác phẩm kinh điển</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="" className="list-parent">
                    Sách văn học
                  </a>
                  <ul className="list-child">
                    <li>
                      <a href="">Tác phẩm kinh điển</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="" className="list-parent">
                    Sách văn học
                  </a>
                  <ul className="list-child">
                    <li>
                      <a href="">Tác phẩm kinh điển</a>
                    </li>
                  </ul>
                </li>
              </ol>
            </dd>
          </dl>
          <hr />
          <div className="sort-box">
            <dl>
              <dt>Sắp xếp theo:</dt>
              <dd>
                <ol>
                  <li>
                    <input type="checkbox" id="type-1" />
                    <label htmlFor="type-1">Bán chạy nhất</label>
                  </li>
                  <li>
                    <input type="checkbox" id="type-1" />
                    <label htmlFor="type-1">Bán chạy nhất</label>
                  </li>
                  <li>
                    <input type="checkbox" id="type-1" />
                    <label htmlFor="type-1">Bán chạy nhất</label>
                  </li>
                </ol>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
