import React from 'react';
import style from '../styles/ComponentsCss/KidzappFeed.module.css';
import {Box,Typography,Card,CardMedia,CardContent} from '@mui/material';
function KidzappFeed() {
  return (
    <>
     <div className='container'>
    <div className="row">
              <div className={`col-lg-12 ${style.newImg}`}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 370 }}
                    image ='https://drfsb8fjssbd3.cloudfront.net/images/subsc-baby.png'
                    alt=""
                    height='350px'
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h3" ml={20} mt={2.5}>
                        The Kidzapp Feed
                      </Typography>
                      <Typography component="div" variant="h6" ml={15} mt={2} mb={2}>
                        Receive regular updates and promotions from Kidzapp
                      </Typography>
                      <Typography component="div" ml={15}>
                       
<div className="form-input">
      <label for="email"></label>
      <input className={style.input} type="email" placeholder="Your Email"/>
      <button className={style.subscribeBtn}>Subscribe</button>
    </div>

                      </Typography>
                      <div className="border-end">
                      <Typography component="div" variant="h5" ml={15} mt={5} color="red" >
                        2500+
                      </Typography>
                      <Typography component="div" variant="h5" ml={15} >
                        Experiences
                      </Typography>
                      </div>
                      <hr className="hr-1" />

                      <Typography component="div" variant="h5" ml={36} mt={-12.1} color="red">
                        500+
                      </Typography>
                      <Typography component="div" variant="h5" ml={36}>
                        Venues & Events
                      </Typography>
                      <hr className="hr-2" />

                      <Typography component="div" variant="h5" ml={63} mt={-12.1} color="red">
                        1000+
                      </Typography>
                      <Typography component="div" variant="h5" ml={63}>
                        Classes
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </div>
            </div>
            </div><br/><br/>
    </>
  )}

export default KidzappFeed