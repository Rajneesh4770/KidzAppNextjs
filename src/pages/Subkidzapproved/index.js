import axios from "axios";
import React, { useEffect, useState } from "react";

import style from "./style.module.css";

const SubKidzapproved = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=birthday_deals&country_code=&page=1&page_size=10&city=&website=1`
      )
      .then((res) => {
        setData(res.data.results);
        console.log("data", res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className={style.section1}>
        <div className="container-fluid m-0 p-0">
          <div className="row">
            <div className="col-12">
              <div className={style.topbackground}>
                <div className="container d-flex">
                  <img
                    src="https://testimages.kidzapp.com/media/lists/Deals%3A%20Big%20Attractions_bd5fafdc-6791-4ae0-b02f-416d384af321.jpg"
                    alt=""
                  ></img>
                  <div className={style.heading}>
                    <h1>Birthday Deals</h1>
                    <h5>Our list of Kidzapp birthday deals</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-4">
            {data.map((item) => {
              return (
                <div className="col-lg-4 sm-6">
                  <div className={`card mb-3  ${style.card}`}>
                    <img
                      className={`card-img-top ${style.cardimg}`}
                      src={item.image_url}
                      alt="..."
                    />
                    <img
                      src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg"
                      className={style.cardimg2}
                    />
                    <img
                      src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                      className={style.dealimg}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <div className="d-flex">
                        <p className={`card-title  `}>Birthdays</p>
                        <p className={`${style.secondheading} `}>Ages 4-16</p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SubKidzapproved;
