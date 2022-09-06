import React from "react";
import style from "./styles/HomeAsfeature.module.css";
import Slider from "react-slick";

import getResponseMessage from "../../language/multilingualServices";
import { constants } from "../Navbar";
import { homeFeatureSettings } from "../../config/slickerSettings";

function HomeAsfeature() {
  
  const renderSlides = () =>
    [
      "https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png",
      "https://drfsb8fjssbd3.cloudfront.net/images/lovin-dubai.png",
      "https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png",
      "https://drfsb8fjssbd3.cloudfront.net/images/the-national.png",
      "https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png",
      "https://drfsb8fjssbd3.cloudfront.net/images/lovin-dubai.png",
      "https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png",
      "https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png",
    ].map((num) => (
      <div key={125}>
        <img className={style.mapimages} src={num} alt="" />
      </div>
    ));
  return (
    <>
      <h1 className={style.heading}>
        {getResponseMessage(constants).as_featured_In}
      </h1>
      <div className="container">
        <div className="col-lg ">
          <Slider {...homeFeatureSettings}>{renderSlides()}</Slider>
        </div>
      </div>
      <br />
    </>
  );
}

export default HomeAsfeature;
