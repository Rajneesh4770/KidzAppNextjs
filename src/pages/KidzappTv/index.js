import React from "react";
import KidzappFeed from '../../Components/KidzappFeed';
import { Container,Row,Col,Button,Carousel ,FormControl,Form,Card,Image} from 'react-bootstrap'
import Slider from "react-slick";
import style from "../../styles/KidzappTv.module.css";
const KidzappTv = () => {
  const settings = {
    dots:true,
    infinite: true,
    arrows : false,
    speed:500,
    slidesToShow:3,
    slidesToScroll:3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3,
          slidesToScroll:1,
          initialSlide: 1
        }
    },
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  }
 
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
const sliderData=[{
  id:1,
  image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
  playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
  likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
  heading:"Test three",
  text:"Water Park Fun",
  bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
  commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
  shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"

},
{
id:2,
image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/eafda300-0d92-4c36-abf9-420063f149c0.png",
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
image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
heading:"Demo Video",
text:"Demo Category",
bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"
},
{
  id:4,
image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
heading:"Demo Video",
text:"Demo Category",
bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"
},
{
  id:5,
image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
heading:"Demo Video",
text:"Demo Category",
bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"
},
{
id:6,
image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
heading:"Demo Video",
text:"Demo Category",
bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"
},
]
const slider2Data=[{
  id:1,
  image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/03473b03-8c4a-4475-be01-998e97206245.png",
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
  image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/374f26f7-fff4-4588-977d-cbba4f74a0d6.png",
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
  image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/7afa2b95-731b-497f-9005-a0b2d7f247de.png",
  playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
  likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
  heading:"Demo Video",
  text:"Demo Category",
  bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
  commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
  shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"
  },
  {
    id:4,
  image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
  playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
  likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
  heading:"Demo Video",
  text:"Demo Category",
  bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
  commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
  shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"
  },
  {
    id:5,
  image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
  playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
  likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
  heading:"Demo Video",
  text:"Demo Category",
  bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
  commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
  shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"
  },
  {
  id:6,
  image:"https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
  playIcon:"https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
  likeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
  heading:"Demo Video",
  text:"Demo Category",
  bottomLikeIcon:"https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
  commentIcon:"	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
  shareIcon:"	https://beta.kidzapp.com/images/share-review-kd-new.png"
  }
]
  return (
    <>
      <section className={style.section1}>
        <div className="container-flex">
          <Row className={style.Container}>
            <Col lg={12}>
              <div className={style.background}>
              <Container>
              <Form >  
              <Row className={style.FormRow}>
                  <Col xs={8} md={7}>
                      <FormControl type="search" placeholder="Search"   aria-label="Search"  />           
                  </Col>
                  <Col xs={3} align="center" md={2} >
                  <Button   variant="primary">Search</Button>           
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
    <Row>
        <Col lg={12}>
        <center>
            <h1 className={style.heading1}>
             KidzApp Tv Activities
            </h1>
        </center>
        </Col>
        
            <div>
            <Container className={style.dynamicCrousel}>
      <Carousel className='maincrousel' >
  <Carousel.Item interval={5000}>
  <Image className={style.playImage1} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></Image>
  <Image src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className={style.videoLikeIcon}/>
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
  <Image className={style.playImage1} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></Image>
  <Image src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className={style.videoLikeIcon} data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
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
  <Image className={style.playImage1} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></Image>
  <Image src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className={style.videoLikeIcon} data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
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
        
    </Row>
</div>
      </section>
      <div className={style.section}>
        <Container className="my-5">
        <Row className="mx-3">
        <Col lg={6} xs={6} md={6} >
            <h1 className={style.heading2}>
            Demo Category
            </h1>
            </Col>
            <Col lg={6} xs={6} md={6}  align="right"><Button  className={`btn-md btn-xs ${style.SeeAllButton1}`}>See All</Button></Col>
            </Row>
            <Row>
          {CardData.map((item)=>{ 
          return(
            <>
            <Col  xs={12} md={4}  >
            <Card key={item.id} className={`mx-3 ${style.cards}`} >
             <Card.Img width="40x" height="40px" className={style.playImage} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg"/>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
     
        <Card.Title><h3 className={style.cardHeading}>{item.heading} </h3></Card.Title>
        <Card.Text className={style.cardText}>
        {item.text}
        </Card.Text>
        <hr/>
        <Row >
            <Col xs={4} className={style.colStyle}>
            <div className={style.cardFooter}>
            <Image width="22px" height="22px" className='tvLikeImage' alt="like" src={item.bottomLikeIcon} />
            <div className={style.Badge}>14</div>
            </div>
            </Col>
            <Col xs={4} className={style.colStyle} >
              <div className={style.cardFooter} >
              <Image width="22px" height="22px" src={item.commentIcon} />
              <div className={style.Badge}>7</div>
              </div>
            </Col>
            
            <Col xs={4} className={style.colStyle}>
               <div className={style.cardFooter}>
                  <p style={{color:"black"}}>Share</p>
                  <Image width="22px" height="22px"  src={item.shareIcon} alt="share" />
               </div> 
            </Col>
        </Row>
        {/* <div className={style.CardFooter}>
        <Image width="22px" height="22px" src={item.bottomLikeIcon}/>
        <span clasName={style.Badge}>9</span>
        <Image width="22px" height="22px" src={item.commentIcon}/>
        <span clasName={style.Badge}>4</span>
        <Image width="22px" height="22px" src={item.shareIcon}/>
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
      
      <div>

        <Container className="sliderContainer my-3">
            <Row className="mx-2">
            <Col xs={6} md={6} lg={6}>
            <h1 className={style.heading2}>
                Water Park Fun
            </h1>
            </Col>
            <Col xs={6} md={6} lg={6} align="right"><Button  className={`btn-md btn-xs ${style.SeeAllButton}`}>See All</Button></Col>
            </Row>
          <Row className={style.section}>
      <Slider  {...settings} >
          {sliderData.map((item)=>{ 
          return(
            <>
            <Col>
            <Card key={item.id}  xs={12} md={4} className={`mx-4 my-2 ${style.cards}`} >
      <Card.Img variant="top" src={item.image} />
      <Card.Img width="40x" height="40px" className={style.playImage} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg"/>
      <Card.Body>
        <Card.Title><h3 className={style.cardHeading}>{item.heading} </h3></Card.Title>
        <Card.Text className={style.cardText}>
        {item.text}
        </Card.Text>
        <hr/>
        <Row >
            <Col xs={4}>
            <div className={style.cardFooter}>
            <Image className={style.imageStyle} src={item.bottomLikeIcon} />
            <div className={style.Badge}>14</div>
            </div>
            </Col>
            <Col xs={4} className={style.colStyle} >
              <div className={style.cardFooter} >
              <Image className={style.imageStyle} src={item.commentIcon} />
              <div className={style.Badge}>7</div>
              </div>
            </Col>
            
            <Col xs={4} className={style.colStyle}>
               <div className={style.cardFooter}>
                  <p className={style.Badge}>Share</p>
                  <Image className={style.imageStyle}  src={item.shareIcon} alt="share" />
               </div> 
            </Col>
        </Row>
       
      </Card.Body>
    </Card>
            </Col>
            </>
          )
    }
          )}
    </Slider>
    </Row>  
        </Container>
      </div>
    

      <div >
        <Container className="my-5 sliderContainer">
          <Row className="mx-2">
            <Col xs={6} md={6} lg={6}>
            <h1 className={style.heading2}>
            Water Park Fun
            </h1>
            </Col>
            <Col xs={6} md={6} lg={6} align="right"><Button  className={`btn-md btn-xs ${style.SeeAllButton}`}>See All</Button></Col>
          </Row>
          <Row className={style.section}>
      <Slider  {...settings} >
      
          {slider2Data.map((item)=>{ 
          return(
            <>
            <Col >
            <Card  xs={12} md={4} className={`mx-4 my-2 ${style.cards}`} >
      <Card.Img  variant="top" src={item.image} />
      <Card.Img width="40x" height="40px" className={style.playImage} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg"/>
      <Card.Body>
        <Card.Title><h3 className={style.cardHeading}>{item.heading} </h3></Card.Title>
        <Card.Text className={style.cardText}>
        {item.text}
        </Card.Text>
        <hr/>
        <Row >
            <Col xs={4}>
            <div className={style.cardFooter}>
            <Image className={style.imageStyle} src={item.bottomLikeIcon} />
            <div className={style.Badge}>14</div>
            </div>
            </Col>
            <Col xs={4} className={style.colStyle} >
              <div className={style.cardFooter} >
              <Image className={style.imageStyle} src={item.commentIcon} />
              <div className={style.Badge}>7</div>
              </div>
            </Col>
            
            <Col xs={4} className={style.colStyle}>
               <div className={style.cardFooter}>
                  <p className={style.Badge}>Share</p>
                  <Image className={style.imageStyle}  src={item.shareIcon} alt="share" />
               </div> 
            </Col>
        </Row>
      </Card.Body>
    </Card>
            </Col>
            </>
          )
    }
          )}
    </Slider>
    </Row>  
        </Container>
      </div>
      <KidzappFeed/>
    </>
  );
};

export default KidzappTv;
