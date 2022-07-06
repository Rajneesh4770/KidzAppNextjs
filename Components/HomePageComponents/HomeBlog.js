import React, { useState, useEffect } from 'react'
import style from '../../styles/ComponentsCss/HomePageComponents/HomeBlog.module.css';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import HomeButton from './HomeButton';
import {
  CardActionArea,
  Button,
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
        'https://api2.kidzapp.com/api/3.0/blogs?page=1&limit=10&country_code=ae',
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
      <div className='container'>
        <div className='row'>
          {data.map((item, i) => {
            return (
              <div
                className={`${i === 0 || i === 5 ? 'col-md-8' : 'col-md-4 '
                  } col-sm-12 ${style.blogCardHome}`}
              >
                <Card className={style.card} sx={{ maxWidth: 734 }}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='350'
                      image={item.cover_image}
                      alt=''
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h5'
                        color='#002240'
                        component='div'
                        className={style.titleBlog}
                      >
                        {item.meta_title}
                      </Typography>
                      <br />
                      <hr className={style.hr}></hr>
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