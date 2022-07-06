import React,{useState,useEffect} from 'react';
import style from '../../styles/ComponentsCss/HomePageComponents/HomeKidsActivitiesReviews.module.css';
import Head from 'next/head';
import Slider from 'react-slick';
import axios from 'axios';
import HomeButton from "../HomePageComponents/HomeButton"
import { Card , CardActions,CardContent, Typography } from '@mui/material';
function HomeKidsActivitiesReviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        slidesToShow: 1,
      }
    }
  ]
  };
  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios.get("https://api2.kidzapp.com/api/3.0/reviews/featured?page=1&page_size=20&country_code=ae").then((res) => {
      setData1(res.data);
      console.log("activityreview",res.data);
    })
  },[])
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
        <h1 className={style.heading}> Kids Activities Reviews</h1>
        <h1 className={style.heading}>by Real Parents</h1>
      </center><br/>

      <div className={`container`}>
        <Slider {...settings}>
         {data1?.map((item)=>{
         return(
              <Card className={style.card}>
                <CardContent>
                  <Typography
                  className={style.typotitle}
                    sx={{ fontSize: 18 }}
                    color='#955da4'
                    gutterBottom
                  >
                    {item.venue.title}
                  </Typography>
                  <Typography variant='h5' component='div' className={style.typotitle}>
                     {item.venue.brief_address} 
                    <hr className={style.hr}></hr>
                  </Typography>
                  <br />

                  <Typography variant='body2' className={style.review}>
                    {item.review}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className={style.cardaction}>
                    <span className={style.typotitle}>Name:</span>
                    <br />
                    <span>6 months ago</span>
                  </div>
                </CardActions>
                </Card>
                
            ); 
           })} 
        </Slider>
      </div><br/><br/>
      <HomeButton/><br/>
    </div>
  );
}

export default HomeKidsActivitiesReviews;
