import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Link from 'next/link';
import { connect } from 'react-redux';

import style from "../styles/Index.module.css";
import HomeHandpicked from "../Components/Homepage/HomeHandpicked";
import HomeKidzappolis from "../Components/Homepage/HomeKidzappolis";
import HomeKidsActivitiesReviews from "../Components/Homepage/HomeKidsActivitiesReviews";
import HomeAsfeature from "../Components/Homepage/HomeAsfeature";
import KidzappFeed from "../Components/KidzappFeed";
import HomeBlog from "../Components/Homepage/HomeBlog";
import { ExperienceAction } from "../redux/actions";

function index(props) {
  const [carouselItem, setCarouselItems] = useState([]);

  useEffect(() => {
    const query = {
      list_name: 'featured_banner_uae',
      country_code: 'ae',
      page: 1,
      page_size: 10,
      website: 1,
      lang: 'ar',
    };
    props.curatedList(query).then(res => {
      setCarouselItems(res.results);
    });
  }, []);

  return (
    <div className={style.body}>
      <Carousel className="maincrousel">
        {carouselItem.map((item) => {
          return (
            <Carousel.Item key={item.id}>
            <Link href={`/exprience-detail?&id=${item.id}`}>
              <img
                className={style.crouselImages}
                src={item.image_url}
                alt="Image is not available"
              />
              </Link>
              <Carousel.Caption>
                <h1
                  className={`animate__animated animate__wobble ${style.crouselHeading}`}
                >
                  {item.title}
                </h1>
                <p className={style.crouselParagraph}> {item.description}</p>
                {/* {/* <p className="bg-primary text-color-warning"><Markup {item?.title}/></p> */}
                {/* <p>  <Markup  markup={item.description}/>  </p> */}
                {item.backend_booking ? (
                    <Link href={`/exprience-detail?&id=${item.id}`}>
                      <button className={`btn ${style.button}`} >  Book Now</button>
                    </Link>
                  ) : (
                    <Link href={item.booking_url}>
                      <button className={`btn ${style.button}`}>
                        Book Now
                      </button>
                    </Link>
                  )}
                
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

const mapDispatchToProps = {
  curatedList: ExperienceAction.curatedList,
};

export default connect(null, mapDispatchToProps)(index);
