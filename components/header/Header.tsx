import "./header.scss";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaWeibo,
} from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <p>Exclusive Black Friday ! Offer</p>
          <span>0</span>
          <p>days</p>
        </div>
        <div className="header__right">
          <ul>
            <li>
              <a href="https://www.facebook.com/ngheoketaupl">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="http://google.com">
                <FaGoogle />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=vi">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://github.com/tuansanji/HoangMinhTuan_CIJS77">
                <FaGithub />
              </a>
            </li>
          </ul>
          <span>|</span>
          <a href="http://sieuquayks.wap.sh/">
            <i>
              <FaWeibo />
            </i>
            <p>sanji@gecoinfo.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
