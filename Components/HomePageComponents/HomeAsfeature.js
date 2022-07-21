import React from 'react'
import style from '../../styles/ComponentsCss/HomePageComponents/HomeAsfeature.module.css';
import Slider from 'react-slick';
function HomeAsfeature() {
  const settings ={
    dots:false,
    slidesToShow:4,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    responsive: [
      {
        breakpoint:1200,
        settings:{
          slidesToShow:3,
        }
      },
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
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
  }
    const renderSlides = () =>
    ['https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png',
    'https://drfsb8fjssbd3.cloudfront.net/images/lovin-dubai.png',
    "https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png",
    'https://drfsb8fjssbd3.cloudfront.net/images/the-national.png',
    'https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png',
    'https://drfsb8fjssbd3.cloudfront.net/images/lovin-dubai.png',
    'https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png',
    "https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png"

      ].map(num => (
      <div>
        <img className={style.mapimages} src={num} alt=""/> 
      </div>
      ));
  return (
    <>
    <h1 className={style.heading}>As Featured In</h1>
    <div className="container">
              <div className="col-lg">
      <Slider {...settings}>
        {renderSlides()}
      </Slider>
    </div>

              </div><br/>
   
    </>
  )
}

export default HomeAsfeature