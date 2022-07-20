import { useState, useEffect } from 'react';
import toast,{ Toaster } from 'react-hot-toast';
import Head from 'next/head';
import axios from 'axios';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import HomeButton from './HomeButton';
import style from '../../styles/ComponentsCss/HomePageComponents/HomeHandpicked.module.css';
import { Typography, CardContent, CardMedia, CardActions, Button, Card, Rating } from "@mui/material";
function HomeHandpicked() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <Typography className={style.typography}><ArrowBackIosNew  className={style.backarrow}/></Typography>,
    nextArrow: <Typography className={style.typography}><ArrowForwardIos className={style.forwardarrow}/></Typography>,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 800,
      settings: {
        dots: false,
        slidesToShow: 3,
        arrows:false,
        autoplay:true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 2,
        arrows:false,
        autoplay:true,
      }
    }
  ]
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api2.kidzapp.com/api/3.0/lists?country_code=ae")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    slideToRepeat:true,
    // autoplay:true,
    autoplaySpeed:2000,

    responsive: [{
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
  const [resData1, setResData1] = useState([]);
  const [activeTab, setActiveTab] = useState("hearts_day_fun");
  useEffect(() => {
    axios.get(`https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=${activeTab}&country_code=&page=1&page_size=10&city=&website=1`)
      .then((res) => {
        setResData1(res.data.results)
        console.log("apiname", activeTab);
        console.log("data of Hanpicked card", resData1)
      }

      ).catch(err => {
        console.log(err)
      })
  }, [activeTab]);

  const notify = () => toast('Successfully Booked.');

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      {/* Headings */}

      <div className={`${style.headingDiv}`} >
        <h1 className={style.heading}>Find the best places to take your kids in the UAE</h1>
        <h1 className={style.heading}>kids in the UAE</h1>
        <h1 className={style.h1}>Handpicked Experiences</h1>
        <p className={style.p}>Our pick of the best kids activities in Dubai, Abu Dhabi and the rest of the UAE</p>
      </div>

      <div className={`container modifiedSlickBtn ${style.buttonRow}`}>
        <Slider {...settings}>
          {data?.map((item) => (
            <div className={style.buttondiv}>
              <button onClick={() => setActiveTab(item.internal_name)} className={style.button14} role="button">
                {item.name}
              </button>
            </div>
          ))}
        </Slider>
      </div><br />
      <div className={`container ${style.cardSection}`} >
        <Slider className={style.mainslider} {...settings1} >
          {resData1?.map((item) => (
            <Card className={style.cards} sx={{ maxWidth: 300 }}>
              {/* <div className={style.newdealimg}><img src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg" alt="" width="50" height="50"/></div> */}
              <div className={style.imageDiv}>
              <CardMedia className={style.cardImage}
                component="img"
                height="200"
                image={item.image_url}
                alt=" "
              /></div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={style.itemTitle}>
                  {item.title}
                </Typography>
                <Typography variant="body4" color="purple" className="item-title">
                  {item.brief_address}
                </Typography>
              </CardContent>
              <Typography>
              &nbsp; &nbsp;<Rating name="read-only" value={item.average_rating} readOnly />
              </Typography>
              <CardActions className='pb-3 '>
              &nbsp; &nbsp;<span className={` ${style.span1}`}><del>AED 120</del></span> &nbsp;
                <span className={style.span2}>AED 99</span>
                <Button className={style.cardbutton} size="small" variant="outlined" color="success"
                onClick={notify} >
                  Book Now
                </Button>
              </CardActions>
            </Card>

          ))}
        </Slider>
      </div>

      <div className={`container`}>
          
      </div>
      <HomeButton></HomeButton>
      <Toaster/>
</>
      )
}

      export default HomeHandpicked