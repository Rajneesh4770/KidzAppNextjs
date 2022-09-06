import { useState, useEffect } from "react";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import Slider from "react-slick";
import { Rating } from "@mui/material";
import { connect } from 'react-redux';

import getResponseMessage from "../../language/multilingualServices";
import { constants } from "../Navbar";
import style from "./styles/HomeHandpicked.module.css";
import { ExperienceAction } from "../../redux/actions";
import { experienceCategoriesSliderSettings, experienceCuratedListSettings } from "../../config/slickerSettings";

function HomeHandpicked(props) {
  
  const [experienceCategories, setExperienceCategories] = useState([]);
  const [newlanguage, setNewlanguage] = useState(constants);
  const [experienceCuratedList, setExperienceCuratedList] = useState([]);
  const [activeTab, setActiveTab] = useState("hearts_day_fun");

  useEffect(() => {
    const query = {
      country_code: 'ae',
    };

    props
      .experienceCategories(query)
      .then((res) => {
        setExperienceCategories(res);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  useEffect(() => {
    const query = {
      list_name: activeTab,
      page: 1,
      page_size: 10,
      website: 1,
    };

    props
      .experienceCuratedList(query)
      .then((data) => {
        setExperienceCuratedList(data.results);
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
      <div className={`${style.headingDiv}`}>
        <h1
          className={`animate__animated animate__backInLeft  ${style.heading}`}
        >
          {getResponseMessage(constants).find_best_place_uae}{" "}
        </h1>
        <h1 className={style.h1}>
          {getResponseMessage(constants).hand_pick_exp}
        </h1>
        <p className={` animate__animated animate__backInRight  ${style.p}`}>
          {
            getResponseMessage(constants)
              .Our_pick_of_the_best_kids_activities_in_UAE
          }
        </p>
      </div>
      <div className={`container modifiedSlickBtn ${style.buttonRow}`}>
        <div className="row">
          <Slider {...experienceCategoriesSliderSettings}>
            {experienceCategories?.map((item) => (
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
          <Slider className={style.mainslider} {...experienceCuratedListSettings}>
            {experienceCuratedList.map((item) => (
              <Link href={`/Booking?&id=${item.id}`}>
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
                      <Link href={`/Booking?&id=${item.id}`}>
                          <button
                            className="btn  float-end"
                            id={item.booking_button.id}
                          >
                            {item.booking_button.text}
                          </button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
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

const mapDispatchToProps = {
  experienceCategories: ExperienceAction.experienceCategories,
  experienceCuratedList: ExperienceAction.curatedList,
};

export default connect(null, mapDispatchToProps)(HomeHandpicked);
