import './footer.scss';
import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaWeibo,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container__fotter" id="fotter">
      <div className="footer__content">
        <div className="title__content">
          <div className="title__container">
            <div className="row">
              <div className="col">
                <div className="wrap">
                  <div className="wrap__title">
                    <h2>
                      Sanji <span>Rose</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content__row">
            <div className="column column-1">
              <div className="table">
                <div className="text">
                  <p>Contact</p>
                  <div className="contact">
                    <ul>
                      <li>
                        <FaGithub />
                        <span>Address :</span> Phi lộc - Diễn Châu - Nghệ An
                      </li>
                      <li>
                        <FaGithub />
                        <span>Phone :</span> 0968763453
                      </li>
                      <li>
                        <FaGithub />
                        <span>Email :</span> hoangtuan17012015@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column column-2">
              <div className="table">
                <div className="title">
                  <h5>Products</h5>
                  <div className="text">
                    <ul>
                      <li>
                        <a href="#">Garena (4)</a>
                      </li>
                      <li>
                        <a href="#">Riot (2)</a>
                      </li>
                      <li>
                        <a href="#">Fifa (11)</a>{" "}
                      </li>
                      <li>
                        <a href="#">Fortnite (1)</a>
                      </li>
                      <li>
                        <a href="#">CS:GO (1)</a>
                      </li>
                      <li>
                        <a href="#">Dota 2 (2)</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column column-3">
              <div className="table">
                <div className="title">
                  <h5>Helps</h5>
                </div>
                <div className="text">
                  <ul>
                    <li>
                      <a href="#">term</a>
                    </li>{" "}
                    
                    <li>
                      <a href="#">privacy</a>
                    </li>
                    <li>
                      <a href="#">refund</a>{" "}
                    </li>
                    <li>
                      <a href="#">affiliate</a>
                    </li>
                    <li>
                      <a href="#">faq</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column column-4">
              <div className="table">
                <div className="title">
                  <h5>follow</h5>
                </div>
                <div className="list__contact">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/ngheoketaupl/">
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/tuansanji/HoangMinhTuan_CIJS77/tree/master/final_project_2"
                        style={{ backgroundColor: "brown" }}
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ backgroundColor: "red" }}>
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaGithub />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fire-left">
          <img
            src="https://themebeyond.com/html/geco/Geco/img/images/footer_fire.png"
            alt=""
          />
        </div>
        <div className="fire-right">
          <img
            src="https://themebeyond.com/html/geco/Geco/img/images/footer_fire.png"
            alt=""
          />
        </div>
      </div>
      <div className="footer__copyright"></div>
    </div>
  );
};

export default Footer;
