import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import Link from "next/link";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";

import style from "./styles/HomeKidzappolis.module.css";
import { baseUrl } from "../../config";

import getResponseMessage from "../../language/multilingualServices";
import { constants } from "../Navbar";

function HomeKidzappolis() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1100);
    });
  }, [scroll]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

    autoplaySpeed: 3000,
    prevArrow: (
      <Typography className={style.typography}>
        <ArrowBackIosNew className={style.backarrow} />
      </Typography>
    ),
    nextArrow: (
      <Typography className={style.typography}>
        <ArrowForwardIos className={style.forwardarrow} />
      </Typography>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  const settings2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(baseUrl + "categories?country_code=ae").then((res) => {
      setData(res.data);
      console.log("kidzappolis circle", res.data);
    });
  }, []);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    axios.get(baseUrl + "lists?country_code=ae").then((res) => {
      let kidzaprovedCollections = [];
      let response_Name = [];
      if (res.data.length > 0) {
        for (let val of res.data) {
          if (
            val.create_button === false &&
            val.internal_name !== "featured" &&
            val.internal_name !== "featured_banner_uae"
          ) {
            response_Name.push(val);
          } else if (
            val.create_list === true &&
            val.internal_name !== "featured" &&
            val.internal_name !== "featured_banner_uae"
          ) {
            response_Name.push(val);
          }
          if (val.create_button === true) {
            kidzaprovedCollections.push(val);
          }
        }
      }
      setData2(kidzaprovedCollections);
    });
  }, []);

  return (
    <>
      <div className={style.body}>
        <div className="container ">
          <center>
            <strong>
              <h1 className={style.kidzappHeading}>
                {getResponseMessage(constants).kidzappolis}{" "}
              </h1>
            </strong>
          </center>
          <br />
          <div className={`container modifiedSlickBtn ${style.container}`}>
            <div className="row">
              <div className="col-lg-12">
                <Slider {...settings}>
                  {data.map((item) => (
                    <div key={item.id}>
                      <Link href={`/Filter?&olisid=${item.id}`}>
                        <div className={`item ${style.activityBox}`}>
                          <img
                            className={style.activityBoxImage}
                            src={item.image_url}
                          />
                          <p className={style.activityBoxHeading}>
                            {item.name}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <center>
            <strong>
              <h1 className={style.kidzappHeading}>
                {getResponseMessage(constants).kidzapproved_collection}{" "}
              </h1>
            </strong>
          </center>
          <br />
          <div
            className={`${style.slider2} ${style.collectionSlider} ${
              scroll ? style.scrolltrue : style.scrollfalse
            }`}
          >
            <Slider {...settings2}>
              {data2.map((item1) => {
                return (
                  <Link href="/SubKidzapproved">
                    <div
                      key={item1.id}
                      className={`collection-slides ${style.collectioncard} ${
                        scroll ? "animate__animated animate__backInDown " : null
                      }`}
                    >
                      <div className={style.imgtext}>
                        <div className={style.image}>
                          <img
                            className=""
                            src={item1.thumbnail_url}
                            alt=".."
                          />
                          <span className={style.collectioncardtext}>
                            {item1.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default HomeKidzappolis;
