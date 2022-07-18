import React, { useState, useEffect } from 'react'
import style from '../../styles/ComponentsCss/HomePageComponents/HomeBlog.module.css';
import axios from 'axios';
import { baseUrl } from '../../pages/Apis';
import CardMedia from '@mui/material/CardMedia';
import HomeButton from './HomeButton';
import {
  CardActionArea,
  CardContent,
  Card,
  CardActions,
  Typography,
} from '@mui/material';
function HomeBlog() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        baseUrl+'blogs?page=1&limit=10&country_code=ae',
      )
      .then((res) => {
        setData(res.data.results);
        console.log("review's data", res.data.results);
      });
  }, []);
  return (
    <div className={style.maindiv}>
      <center>
        <h1 className={style.heading}>Our Blog Pics</h1>
        <br />
      </center>
      <div className={`container ${style.container}`}>
        <div className='row'>
          {data.map((item, i) => {
            return (
              <div
                className={`${i === 0 || i === 5 ? `col-md-8 ` : i ===1 || i === 6 ? `col-md-4 ${style.smcard}` : `col-md-4 mb-5 ${style.bigcard}`
                  }  col-sm-12 ${style.blogCardHome}` }
              >
                <Card
                className={style.card} sx={{ maxWidth: 850, height:470 }}>
                  <CardActionArea>
                    <div className={style.imageDiv}>
                    <CardMedia
                    className={style.image}
                      component='img'
                      max-height='350'
                      image={item.cover_image}
                      alt=''
                    /></div>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h5'
                        color='#002240'
                        component='div'
                        className={`${i===0 || i===5 ? '{style.titleBlog}' : '{style.titleBlog1}'}`}
                      >
                        {item.meta_title}
                      </Typography>
                      <br />
                      <hr 
                      className={`${i===0 || i===5 ? style.hr :style.hr1 }`}
                      >

                      </hr>
                      <Typography variant='h6' color='#9F57A9'>
                        {item.auther_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions></CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </div><br />
      <HomeButton></HomeButton><br />
    </div>
  );
}

export default HomeBlog