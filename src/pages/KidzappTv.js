import React from "react";
import { Container,Row,Col,Button,Carousel ,FormControl,Form,Card} from 'react-bootstrap'
import Slider from "react-slick";
import style from "../styles/KidzappTv.module.css";
const KidzappTv = () => {
  const CardData=[{
    id:1,
    image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/e82e3d46-41ee-4576-bf49-17c70b805a3d.jpg",
    playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
    likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
    heading:"Demo Video",
    text:"Demo Category",
    bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
    commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
    shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"

  },
  {
  id:2,
  image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/e82e3d46-41ee-4576-bf49-17c70b805a3d.jpg",
  playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
  likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
  heading:"Demo Video",
  text:"Demo Category",
  bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
  commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
  shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"
},
{
  id:3,
  image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/05383f52-cff3-4418-bd04-271cf0c2f5ff.png",
  playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
  likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
  heading:"Demo Video",
  text:"Demo Category",
  bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
  commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
  shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"
},

]
  return (
    <>
      <section className={style.section1}>
        <div className="container-flex">
          <Row className={style.Container}>
            <Col className="col-lg-12">
              <div className={style.background}>
              <Container>
              <Form >  
              <Row className={style.FormRow}>

                  <Col md={5}>
                      <FormControl type="search" placeholder="Search"   aria-label="Search"  />           
                  </Col>
                  <Col align="center" md={2} >
                  <Button  variant="primary">Search</Button>           
                  </Col>
              </Row>
             
              </Form>
          </Container>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className={style.section2}>
<div className="container mb-5">
    <div className="row">
        <div className="col-lg-12">
            <center><h1>
            Kidzapp TV- Kids Activities
            </h1></center>
            {/* <Slider {...setting}> */}
            <div>
            <Container className={style.dynamicCrousel}>
      <Carousel  >
  <Carousel.Item interval={5000}>
  <img className={style.playImage} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
  <img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className={style.videoLikeIcon} data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
  <em className={style.videoShareIcon}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -22 512 511" width="45" height="41" class="" fill="#fff">
<g>
<path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#fff"></path>
</g>
</svg>
</em>
  <video className={style.video} width="100%" controls>
  <source src="https://images.kidzapp.com/media/kidzapp_tv/videos/None_1c0742c8-ac24-43af-b108-5638d989089b.mp4" type="video/mp4"/>
   </video> 
  </Carousel.Item>

  <Carousel.Item interval={5000}>
  <img className={style.playImage} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
  <img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className={style.videoLikeIcon} data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
  <em className={style.videoShareIcon}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -22 512 511" width="45" height="41" class="" fill="#fff">
<g>
<path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#fff"></path>
</g>
</svg>
</em>
  <video className={style.video} width="100%" controls>
  <source src="https://images.kidzapp.com/media/kidzapp_tv/videos/None_dd8ddc3e-be2d-4f40-9df8-8153db32e4cd.mp4" type="video/mp4"/>
  </video>
    <Carousel.Caption className="caraousalTvCaption">
    <h3>Toy Wash Fun | Fun &amp; Games</h3>
    <p>Fun &amp; Games</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={5000}>
  <img className={style.playImage} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
  <img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className={style.videoLikeIcon} data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
  <em className={style.videoShareIcon}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -22 512 511" width="45" height="41" class="" fill="#fff">
<g>
<path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#fff"></path>
</g>
</svg>
</em>
  <video className={style.video} width="100%" controls>
  <source src="https://images.kidzapp.com/media/kidzapp_tv/videos/None_d3a2c98a-035d-411f-b900-0b51a23f5418.mp4" type="video/mp4"></source>
  </video>
  
    <Carousel.Caption className="caraousalTvCaption">
         <h3>Toy Wash Fun | Fun &amp; Games</h3>
         <p>Cooking</p>
    </Carousel.Caption>
  </Carousel.Item>
     </Carousel>
            </Container>
            </div>      
        </div>
    </div>
</div>
      </section>
      <div className="Section">
        <Container>
          <Row>
            <Col>
            <center><h1>
            Kidzapp TV- Kids Activities
            </h1></center>
            </Col>
          </Row>
          <Row>
          {CardData.map((item)=>{ 
          return(
            <>
            <Col>
            <Card key={item.id} style={{ width: '25rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title><h3 className={style.cardHeading}>{item.heading} </h3></Card.Title>
        <Card.Text className={style.cardText}>
        {item.text}
        </Card.Text>
        <hr/>
        <Row >
            <Col>
            <div className={style.cardFooter}>
            <img width="22px" height="22px" className='tvLikeImage' alt="like" src={item.bottomLikeIcon} />
            <div className={style.Badge}>14</div>
            </div>
            </Col>
            <Col>
              <div className={style.cardFooter} >
              <img width="22px" height="22px" src={item.commentIcon} />
              <div className={style.Badge}>7</div>
              </div>
            </Col>
            
            <Col>
               <div className={style.cardFooter}>
                  <p style={{color:"black"}}>Share</p>
                  <img width="22px" height="22px"  src={item.shareIcon} alt="share" />
               </div> 
            </Col>
        </Row>
        {/* <div className={style.CardFooter}>
        <img width="22px" height="22px" src={item.bottomLikeIcon}/>
        <span clasName={style.Badge}>9</span>
        <img width="22px" height="22px" src={item.commentIcon}/>
        <span clasName={style.Badge}>4</span>
        <img width="22px" height="22px" src={item.shareIcon}/>
        </div> */}
      </Card.Body>
    </Card>
    </Col>
    </>
          )
    }
          )}
          </Row>
          
        </Container>
      </div>
    </>
  );
};

export default KidzappTv;
