import axios from "axios";
import Link from "next/link";
import React from "react";

import { baseUrl } from "../../config";
import style from "./style.module.css";

const BlogDetails = (props) => {
  

  const secondViewData = [
    {
      id: 1,
      mainHeading: "Lil and Kim",
      detail:
        "From accessories like wigs, mustaches, broomsticks, or masks, to full on costume sets, Lil and Kim's online store offers multiple options. The website even has a sizing chart to ensure you order the perfect size for your little ones.",
      cardImg:
        "https://testimages.kidzapp.com/media/blog/images/alilnkim-650x365.jpg",
      location: "BOUNCE",
      workingHours: "Sun-Thu 10:00 to 23:00, Fri-Sat until 00:00",
      prices: "Full Costumes from EGP 220",
    },
  ];
  return (
    <>
      <section className={style.blog1}>
        <div className={style.searchAndBanner}>
          <div className={`container ${style.container}`}>
            <div className={`row `}>
              <div className={`col-md-12`}>
                <div className={`searchButton d-flex`}>
                  <input
                    type="text"
                    name=""
                    className={`form-control ${style.searchInput}`}
                    placeholder="🔍 Type here to search video"
                  />
                  <button className={`btn ${style.searchBtn}`}>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mainContentSection">
          <button className={`btn px-0 my-3 ${style.goBackBtn}`}>
            <i className="fa-solid fa-arrow-left"></i> Go Back
          </button>

          {props.data.map((x) => (
            <>
              <img
                className={style.mainImage}
                src={x.cover_image}
                alt={x.cover_image_alt}
              />

              <div className={`my-4 ${style.mainText}`}>
                <h1>{x.meta_title}</h1>
                <div className="row mt-4">
                  <div className={`col-md-8 d-flex ${style.leftContent}`}>
                    <h6>
                      <i className="fa-solid fa-calendar"></i> {x.created_at}
                    </h6>
                    <h6>
                      <i className="fa-solid fa-user"></i> Posted by:{" "}
                      {x.auther_name}
                    </h6>
                    <h6>
                      <i className="fa-solid fa-grip-lines"></i> {x.category[0]}
                    </h6>
                  </div>
                  <div className={`col-md-4 ${style.textSearchButton}`}>
                    <button className={`btn btn-primary`}>
                      <i className="fa-solid fa-share"></i> Share
                    </button>
                  </div>
                </div>
                <p>{x.excerpt}</p>
              </div>
              <div className={style.elementorDivider}>
                <span className={style.elementorDividerSeparator}></span>
              </div>
            </>
          ))}
        </div>
      </section>
      <section className={`${style.mapCards} container`}>
        {props.data[0].experiences.map((item, i) => (
          <div key={item.id} className="my-5">
            {i % 2 === 0 ? (
              <div className={`row ${style.contentRow}`}>
                <div
                  className={`col-lg-7 col-md-7 col-sm-12  ${style.columnn}`}
                >
                  <div className={style.contentImage}>
                    <img src={item.image_url} alt="mainImg" />
                  </div>
                </div>
                <div className={`col-lg-5 col-md-5 col-sm-12 ${style.columnn}`}>
                  <div className={style.mainColumnDiv}>
                    <h2>{item.mainHeading}</h2>
                    <p>{item.detail ? item.detail : ""}</p>
                    <div className={`row ${style.cardBody}`}>
                      <div className="col-lg-12">
                        <div className={style.location}>
                          <p>
                            <b>Location:</b>
                          </p>
                          <p>{item.location}</p>
                        </div>
                        <div className={style.location}>
                          <p>
                            <b>Working-Hours :</b>
                          </p>
                          <p>{item.working_hours}</p>
                        </div>
                        <div className={style.location}>
                          <p>
                            <b>Prices : </b>
                          </p>
                          <p>{item.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <button
                        className={`${bookingStyle.blog_rating} ${style.CardButton}`}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`row ${style.contentRow2}`}>
                <div
                  className={`col-lg-5 col-md-5 col-sm-12  ${style.columnn2}`}
                >
                  <div className={style.mainColumnDiv2}>
                    <h2>{item.mainHeading}</h2>
                    <p>{item.detail ? item.detail : ""}</p>
                    <div className={`row ${style.cardBody2}`}>
                      <div className="col-lg-12">
                        <div className={style.location}>
                          <p>
                            <b>Location:</b>
                          </p>
                          <p>{item.location}</p>
                        </div>
                        <div className={style.location}>
                          <p>
                            <b>Working-Hours :</b>
                          </p>
                          <p>{item.working_hours}</p>
                        </div>
                        <div className={style.location}>
                          <p>
                            <b>Prices : </b>
                          </p>
                          <p>{item.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <Link href={item.checkout_link}>
                        <button
                          className={`${bookingStyle.blog_rating} ${style.CardButton}`}
                        >
                          {item.checkout_text}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-lg-7 col-md-7 col-sm-12  ${style.columnn}`}
                >
                  <div className={style.contentImage}>
                    <img src={item.image_url} alt="mainImg" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
      <section className={`container my-2 ${style.otherView}`}>
        {secondViewData.map((item, i) => (
          <div className={style.secondViewContent}>
            <h2>{item.mainHeading}</h2>
            <div className={`my-5 ${style.secondViewImgContainer}`}>
              <img src={item.cardImg} alt="" />
            </div>
            <div className={style.secondViewTextContainer}>
              <p>{item.detail}</p>
              <p>
                <b>Price: </b>
                {item.prices}
              </p>
              <button className="btn">Shop Online</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export async function getStaticProps() {
  let res = await axios.get(
    baseUrl + "blogs?slug=13-play-venues-for-a-fun-filled-play-date"
  );
  let props = {
    data: res.data.results,
  };
  return { props };
}
export default BlogDetails;
