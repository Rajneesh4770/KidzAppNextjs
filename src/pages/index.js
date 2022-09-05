import React from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

import style from "../styles/Index.module.css";

import HomeHandpicked from "../Components/Homepage/HomeHandpicked";
import HomeKidzappolis from "../Components/Homepage/HomeKidzappolis";
import HomeKidsActivitiesReviews from "../Components/Homepage/HomeKidsActivitiesReviews";
import HomeAsfeature from "../Components/Homepage/HomeAsfeature";
import KidzappFeed from "../Components/KidzappFeed";
import HomeBlog from "../Components/Homepage/HomeBlog";
import { HOME_CROUSEL_API } from "../services";

export async function getStaticProps() {
  let res = await axios.get(HOME_CROUSEL_API);
  let props = {
    data: res?.data?.results,
  };
  return { props };
}

function index(props) {
  return (
    <div className={style.body}>
      <Carousel className="maincrousel">
        {props.data.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className={style.crouselImages}
                src={item.image_url}
                alt="Image is not available"
              />
              <Carousel.Caption>
                <h1
                  className={`animate__animated animate__backInDown ${style.crouselHeading}`}
                >
                  {item.title}
                </h1>
                <p className={style.crouselParagraph}> {item.description}</p>
                {/* {/* <p className="bg-primary text-color-warning"><Markup {item?.title}/></p> */}
                {/* <p>  <Markup  markup={item.description}/>  </p> */}

                <button
                  className={`btn ${style.button}`}
                  onClick={() => toast("Successfully Booked")}
                >
                  Book Now
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        ;
      </Carousel>

      {/* Handpicked component of Home page */}
      <HomeHandpicked />

      {/* kidzappolis component of Home page */}
      <HomeKidzappolis />

      {/* Homeblog component of Home page */}
      <HomeBlog />

      {/*  HomeKidsActivitiesReviews component of Home Page */}
      <HomeKidsActivitiesReviews />

      {/* HomeAsfeature component of home page */}
      <HomeAsfeature />

      {/* kidzappFeed component */}
      <KidzappFeed />
    </div>
  );
}
export default index;
