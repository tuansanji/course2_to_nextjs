"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./home.scss";
const WorldGaming = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [titleBanner, setTitleBanner] = useState(true);
  const handleBanner = useCallback(() => {
    setTitleBanner(!titleBanner);
  }, [titleBanner]);
  useEffect(() => {
    titleRef.current && titleRef.current.classList.toggle("change");
    titleRef.current && titleRef.current.classList.add("change2");
    imgRef.current && imgRef.current.classList.toggle("change");
    imgRef.current && imgRef.current.classList.add("change2");
  }, [titleBanner]);
  return (
    <div className="home__banner">
      <div className="btn prev-btn" onClick={handleBanner}>
        <AiOutlineLeft />
      </div>
      <div className="btn next-btn" onClick={handleBanner}>
        <AiOutlineRight />
      </div>
      <div ref={titleRef} className="home__title" id="world-gaming">
        <h6>world gaming</h6>
        <h2>
          {titleBanner ? "cod" : "create"}
          <span>{titleBanner ? "modern" : "manage"} </span>
          {titleBanner ? "warfare" : "matchs"}
        </h2>
        <p>
          Find technology or people for digital projects in public sector and
          Find an individual specialist develope researcher.
        </p>
        <a href="https://www.callofduty.com/modernwarfare">read-more</a>
      </div>
      <div className="home__img" ref={imgRef}>
        <div className="img-before">
          <img
            src={
              "https://sanji-course-2-f.onrender.com/static/media/slider_img02.bcc45a184416996beda6.png"
            }
            alt=""
          />
        </div>
        <div className="img-between">
          <img
            src={
              "https://sanji-course-2-f.onrender.com/static/media/trongsuot.43b0ac1deaedce2653ff.png"
            }
            alt=""
          />
        </div>
        <div className="img-affter">
          <img
            src={
              "https://sanji-course-2-f.onrender.com/static/media/slider_img01.0bac7ac21d4d3a002395.png"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WorldGaming;
