import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import Slider from "react-slick";
import { Typography, Rating } from "@mui/material";

import getResponseMessage from "../../language/multilingualServices";
import { constants } from "../Navbar";
import { baseUrl } from "../../config";
import style from "./styles/HomeHandpicked.module.css";

function HomeHandpicked() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: (
      <Typography className={style.typography}>
        <ArrowBackIos className={style.backarrow} />
      </Typography>
    ),
    nextArrow: (
      <Typography className={style.typography}>
        <ArrowForwardIos className={style.forwardarrow} />
      </Typography>
    ),
    responsive: [
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
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 2,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl + "lists?country_code=ae")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  const settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [newlanguage, setNewlanguage] = useState(constants);
  const [resData1, setResData1] = useState([]);
  const [activeTab, setActiveTab] = useState("hearts_day_fun");
  useEffect(() => {
    axios
      .get(
        baseUrl +
          `experiences/curated-list/?list_name=${activeTab}&country_code=&page=1&page_size=10&city=&website=1`
      )
      .then((res) => {
        setResData1(res.data.results);
        console.log("Homehandpic card ", res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activeTab]);

  useEffect(() => {
    setNewlanguage(constants);
  }, [constants]);

  return (
    <div className={style.background}>
      {/* Headings */}
      <div className={`${style.headingDiv}`}>
        <h1
          className={`animate__animated animate__backInDown  ${style.heading}`}
        >
          {getResponseMessage(constants).find_best_place_uae}{" "}
        </h1>
        <h1 className={style.h1}>
          {getResponseMessage(constants).hand_pick_exp}
        </h1>
        <p className={` animate__animated animate__backInDown  ${style.p}`}>
          {
            getResponseMessage(constants)
              .Our_pick_of_the_best_kids_activities_in_UAE
          }
        </p>
      </div>
      <div className={`container modifiedSlickBtn ${style.buttonRow}`}>
        <div className="row">
          <Slider {...settings}>
            {data?.map((item) => (
              <div className="col-lg-12" key={item.id}>
                <div className={style.buttondiv} key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.internal_name)}
                    className={style.button14}
                    role="button"
                  >
                    {item.name}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
          <br />
        </div>
      </div>

      <div className={`container ${style.card1}`}>
        <div className="row">
          <Slider className={style.mainslider} {...settings1}>
            {resData1?.map((item) => (
              <div className="container" key={item.id}>
                <div
                  className={`card animate__animated animate__backInDown animate__slow ${style.card}`}
                >
                  <img
                    className={`card-img-top ${style.cardimage}`}
                    src={item.image_url}
                    alt="Loading..... please wait"
                  />
                  <img
                    src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                    className={style.dealimg}
                  />
                  <div className="card-body">
                    <h5 className={`card-title ${style.itemTitle} `}>
                      {item.title}
                    </h5>
                    <p className="card-text">{item.brief_address}</p>
                    <div>
                      {" "}
                      <Rating
                        name="read-only"
                        value={item.average_rating}
                        readOnly
                      />
                    </div>
                    <div>
                      <span style={{ color: "red" }}>
                        <del>
                          <b>AED 120</b>
                        </del>
                      </span>{" "}
                      &nbsp;{" "}
                      <span>
                        <b>AED 99</b>
                      </span>
                      {item.booking_required ? (
                        <Link href={`/Booking?&id=${item.id}`}>
                          <button
                            className="btn  float-end"
                            id={item.booking_button.id}
                          >
                            {item.booking_button.text}
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="btn  disabled float-end"
                          id={item.booking_button.id}
                        >
                          {item.booking_button.text}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Link href="/Handpicked">
              <center>
                <button className={style.button}>View All</button>
              </center>
            </Link>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default HomeHandpicked;
