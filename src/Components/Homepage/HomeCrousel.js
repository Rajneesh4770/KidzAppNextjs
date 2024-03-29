import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { baseUrl } from "../../config";
import Link from 'next/link';
import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import style from "../../styles/ComponentsCss/HomePageComponents/HomeCrousel.module.css";
function HomeCrousel() {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("ae");
  useEffect(() => {
    Axios.get(
      baseUrl +
        `experiences/curated-list/?list_name=featured_banner_uae&country_code=${language}&page=1&page_size=10&city=&website=1&lang=ar`
    ).then((res) => {
      setData(res.data.results);
    });
  }, []);

  let content = null;
  if (data && data.length)
    content = (
      <Carousel>
        {data.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className={style.crouselImages}
                src={item.image_url}
                alt="https://c4.wallpaperflare.com/wallpaper/921/18/419/loading-black-background-wallpaper-preview.jpg"
              />
              <Carousel.Caption>
                <h1 className={style.crouselHeading}>{item.title}</h1>
                <p className={style.crouselParagraph}>{item.description}</p>
                <Link href="/Booking">
                <button
                  className={`btn ${style.button}`}
                  onClick={() => toast("Successfully Booked")}
                >
                  Book Now
                </button></Link>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        ;
      </Carousel>
    );
  else {
    content = (
      <Carousel>
        <Carousel.Item>
          <img
            className={style.crouselImages}
            src="https://testimages.kidzapp.com/media/CACHE/images/venues/65b8c9af-55be-492f-95cf-13e3eb19cdbe/dpr-test.jpeg"
            alt="Loading....."
          />
          <Carousel.Caption>
            <h1 className={style.crouselHeading}></h1>
            <p className={style.crouselParagraph}></p>
            <button
              className={`btn ${style.button}`}
              onClick={() => toast("Successfully Booked")}
            >
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <>
      <div className="container-fluid p-0">{content}</div>
    </>
  );
}

export default HomeCrousel;
