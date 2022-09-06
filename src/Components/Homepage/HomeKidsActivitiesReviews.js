import React,{useState,useEffect} from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import Link from 'next/link';
import { connect } from "react-redux";

import style from './styles/HomeKidsActivitiesReviews.module.css';
import  {baseUrl}  from '../../config';
import Head from 'next/head';
import getResponseMessage from '../../language/multilingualServices';
import { constants } from '../Navbar';
import { kidzActivitiesReviewSettings } from '../../config/slickerSettings';
import { KidzApprovedCollectionAction } from '../../redux/actions';

function HomeKidsActivitiesReviews(props) {
  
  const [reviewData, setReviewData] = useState([]);

  const getReviewData = () => {
    const query = {
      page: 1,
      page_size: 6,
      country_code: 'ae'
    };
    props
      .activitiesReviewList(query)
      .then((res) => {
        setReviewData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getReviewData();
  }, []);

  const [scroll,setScroll]=useState(false);

useEffect(()=>{
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 2400);
  });
},[scroll])

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
      <div className={`${style.reviewComp} container `}>
      <div className={`row  mt-5 ${scroll? style.scrolltrue:style.scrollfalse} `}>
          <div className={`container `}>
            <Slider {...kidzActivitiesReviewSettings} className={style.cardsection}>
              {reviewData.map((slide, i) => {
                return (
                  <div key={slide.id} 
                  className={`${i===1  ? style.index :style.index1 }
                  ${scroll? 'animate__animated animate__backInDown ' : null }`}>
                    <div className={style.reviewcard} style={{ width: "18rem" }}>
                      <div className={style.cardbody}>
                  
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

const mapDispatchToProps = {
  activitiesReviewList: KidzApprovedCollectionAction.activitiesReviewList,
};

export default connect(null, mapDispatchToProps)(HomeKidsActivitiesReviews);
