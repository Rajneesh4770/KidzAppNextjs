import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { connect } from 'react-redux';

import style from "./styles/HomeKidzappolis.module.css";

import getResponseMessage from "../../language/multilingualServices";
import { constants } from "../Navbar";
import { activitesSettings, kidzCollectionsSettings } from "../../config/slickerSettings";
import { ExperienceAction, KidzApprovedCollectionAction } from "../../redux/actions";

function HomeKidzappolis(props) {
  const [scroll, setScroll] = useState(false);
  const [collectionList, setCollectionList] = useState([]);

  const [activityCategory, setActivityCategory] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1100);
    });
  }, [scroll]);

  useEffect(() => {
    const query = { country_code: 'ae' };

    props.collectionList(query).then((data) => {
      setCollectionList(data);
    });
  }, []);
  useEffect(() => {
    const query = { country_code: 'ae' };

    props.experienceCategories(query).then((data) => {
      let kidzaprovedCollections = [];
      let response_Name = [];
      if (data.length > 0) {
        for (let val of data) {
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
      setActivityCategory(kidzaprovedCollections);
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
                <Slider {...activitesSettings}>
                  {collectionList.map((item) => (
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
            <Slider {...kidzCollectionsSettings}>
              {activityCategory.map((item1) => {
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

const mapDispatchToProps = {
  collectionList: KidzApprovedCollectionAction.collectionList,
  experienceCategories: ExperienceAction.experienceCategories,
};


export default connect(null, mapDispatchToProps)(HomeKidzappolis);
