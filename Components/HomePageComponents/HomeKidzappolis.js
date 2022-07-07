import React, { useEffect, useState } from 'react';
import style from '../../styles/ComponentsCss/HomePageComponents/HomeKidzappolis.module.css';
import Head from 'next/head';
import axios from 'axios';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
function HomeKidzappolis() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint:1200,
        settings:{
          slidesToShow:4,
        }
      },
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:600,
      settings:{
        slidesToShow:1,
      }
    }
  ]
  };
  const settings2 = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint:1200,
        settings:{
          slidesToShow:5,
        }
      },
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint:600,
      settings:{
        slidesToShow:2,
      }
    }
  ]
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://api2.kidzapp.com/api/3.0/categories?country_code=ae')
      .then((res) => {
        setData(res.data);
        console.log(data);
      });
  }, []);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    axios
      .get('https://api2.kidzapp.com/api/3.0/lists?country_code=ae')
      .then((res) => {
        let kidzaprovedCollections = [];
        let response_Name = [];
        if (res.data.length > 0) {
          for (let val of res.data) {
            if (
              val.create_button === false &&
              val.internal_name !== 'featured' &&
              val.internal_name !== 'featured_banner_uae'
            ) {
              response_Name.push(val);
            } else if (
              val.create_list === true &&
              val.internal_name !== 'featured' &&
              val.internal_name !== 'featured_banner_uae'
            ) {
              response_Name.push(val);
            }
            if (val.create_button === true) {
              kidzaprovedCollections.push(val);
            }
          }
        }

        setData2(kidzaprovedCollections);
        console.log(data2, 'kidzaproved collection');
      });
  }, []);
  return (
    <>
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

        <div className='container '>
          <center>
            <strong>
              <h1 className={style.kidzappHeading}>Kidzappolis</h1>
            </strong>
          </center>
          <br />
          <div className={`container ${style.container}`}>
          <Slider {...settings}>
            {data.map((item) => (
              <div>
                <div className={`item ${style.activityBox}`}>
                  <img
                    className={style.activityBoxImage}
                    src={item.image_url}
                  />
                  <p className={style.activityBoxHeading}>{item.name}</p>
                </div>
              </div>
            ))}
          </Slider></div>
        </div>
        <br />

        <div className='container'>
          <center>
            <strong>
              <h1 className={style.kidzappHeading}>Kidzapproved Collections</h1>
            </strong>
          </center>
          <br />
          <div className={style.slider2}>
            <Slider {...settings2}>
              {data2.map((item1) => (
                <div className={` ${style.collectionCard}`}>
                  <Card
                    className={style.conditionalCard}
                    style={{ width: '10rem' }}
                  >
                    <Card.Img
                      variant='top'
                      src={item1.image_url}
                      className={style.approvedImg}
                      alt="image is not available"
                    />
                    <Card.Body>
                      <Card.Text className={style.approvedP}>
                        {item1.name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeKidzappolis;
