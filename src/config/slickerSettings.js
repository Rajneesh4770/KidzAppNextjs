import { Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";

import style from '../styles/slicker.module.css';


const experienceCategoriesSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: (
    <Typography className={style.typography}>
      <ArrowBackIos className={style.backarrow} />
    </Typography>
  ),
  nextArrow: (
    <Typography className={style.typography}>
      <ArrowForwardIos className={style.forwardarrow} />
    </Typography>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 800,
      settings: {
        dots: false,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
      },
    },
  ],
};

const experienceCuratedListSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const activitesSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,

  autoplaySpeed: 3000,
  prevArrow: (
    <Typography className={style.typography}>
      <ArrowBackIosNew className={style.backarrow} />
    </Typography>
  ),
  nextArrow: (
    <Typography className={style.typography}>
      <ArrowForwardIos className={style.forwardarrow} />
    </Typography>
  ),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 800,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

const kidzCollectionsSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

export {
  experienceCategoriesSliderSettings,
  experienceCuratedListSettings,
  activitesSettings,
  kidzCollectionsSettings
};