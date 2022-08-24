import React,{useState,useEffect} from 'react';
import style from '../../styles/ComponentsCss/HomePageComponents/HomeKidsActivitiesReviews.module.css';
import  {baseUrl}  from '../../config';
import Head from 'next/head';
import Slider from 'react-slick';
import axios from 'axios';
import HomeButton from "../HomePageComponents/HomeButton"
import getResponseMessage from '../../Language/multilingualServices';
import { constants } from '../Navbar';
import Link from 'next/link';
function HomeKidsActivitiesReviews() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    lazyLoad: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slideToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
      breakpoint:600,
      settings:{
        slidesToShow: 1,
          slideToScroll: 1,
          arrows: false,
          dots: false,
      }
      }
    ]
  };
  const [reviewData, setReviewData] = useState([]);
  const getReviewData = () => {
    axios
      .get(
        baseUrl+"reviews/featured?page=1&page_size=6&country_code=ae"
      )
      .then((response) => {
        const myData = response.data;
        setReviewData(myData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <div className={style.body}>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>
      <center>
        <h1 className={style.heading}>{getResponseMessage(constants).kids_act_reviews_by_parents}</h1>
        {/* <h1 className={style.heading}>by Real Parents</h1> */}
      </center>
      <div className={`${style.reviewComp} container`}>
      <div className="row  mt-5">
          <div className={`container `}>
            <Slider {...settings} className={style.cardsection}>
              {reviewData.map((slide, i) => {
                return (
                  <div key={slide.id} 
                  className={`${i===1  ? style.index :style.index1 }`}>
                    <div className={style.reviewcard} style={{ width: "18rem" }}>
                      <div className={style.cardbody}>
                      <img
                          className={`${style.cardimg} mb-3`}
                          src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-logo.png"
                        />
                        <p className={style.cardTopPara}><b> {slide.venue.title} </b></p>
                        <h5 className={style.cardtitle}>{slide.title} </h5>
                        <hr className={style.hr}/>
                        <p className={style.cardtext}>{slide.review}</p>
                        <div className={style.bottomCardText}>
                          <div className={`d-flex ${style.bottomRow}`}>
                            <div className={`col-6 ${style.leftText}`}>
                              <p className={style.textcenter}>
                                {`${
                                  !slide.user
                                    ? "Anonymous"
                                    : slide.user.first_name
                                }`}
                              </p>
                              <p className={style.textcenter}>5 months ago</p>
                            </div>

                            <div className=" col-6">
                              <div className={`${style.starRate} ${style.rightText} ${style.textright}  absolute-center`}>
                                <img
                                className={style.starRateimg}
                                  src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                                  alt=""
                                />
                                <span className={style.spanrating}>{slide.rating}.0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div><br/><br/>
      <Link href="/AllReviews">
        <center><button className={style.button}>View All</button></center>
        </Link>
    </div>
  );
}

export default HomeKidsActivitiesReviews;
