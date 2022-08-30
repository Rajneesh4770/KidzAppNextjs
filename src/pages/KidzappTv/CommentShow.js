import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Card,Image,Form,FormControl,Button} from 'react-bootstrap';
import axios from 'axios';
import { baseUrl } from "../../config";
import Link from "next/link";
import style from '../../styles/CommentShow.module.css';
import KidzappFeed from '../../Components/KidzappFeed';
import Accordion from 'react-bootstrap/Accordion';
import  {BsFacebook,BsTwitter,BsWhatsapp,BsInstagram,BsLinkedin} from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'
const CommentShow = () => {
    // const [cardData,setCardData]=useState([]);
    const cardData = [{
        id: 1,
        image: "https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/03473b03-8c4a-4475-be01-998e97206245.png",
        playIcon: "https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
        likeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
        name: "Demo Video",
        cardText: "Demo Category",
        bottomLikeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
        commentIcon: "	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
        shareIcon: "	https://beta.kidzapp.com/images/share-review-kd-new.png"
      }
      ]
     const commentData=[
        {
        title:"SwapnilsPagares",
        text:"Test comment1",
        year:"a year ago"
      },
      {
        title:"SwapnilsPagares",
        text:"Test comment1",
        year:"a year ago"
      },
      {
        title:"SwapnilsPagares",
        text:"Test comment1",
        year:"a year ago"
      },
      {
        title:"SwapnilsPagares",
        text:"Test comment1",
        year:"a year ago"
      },
     

    ]
    // useEffect(()=>{
    //     axios.get(baseUrl +"tv/video_category")
    //     .then((res)=>{
    //       console.log(res.data,'console');
    //         setCardData(res.data);
    //     })
    //     .catch((err)=>{
    //       console.log(err);
    //     })
    //   },[])
  return (
    <div>
     <section className={style.section1}>
        <div className="container-flex">
          <Row className={style.Container}>
            <Col className={style.colStyle} lg={12}>
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
      <div className={style.section}>
        <Container className="my-5">
        <Row className="mx-3">
        <Col lg={12} xs={12} md={12} >
            <h1 className={style.heading1}>
                Kidzapp TV- Demo category Videos for your kids
            </h1>
            </Col>
            </Row>
          
          {cardData.map((item)=>{ 
          return(
            <>
            <Card key={item.id} className={`mx-3 ${style.cards}`} >
             <Card.Img width="40x" height="40px" className={style.playImage} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg"/>
            <Card.Img variant="top" src="https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/e82e3d46-41ee-4576-bf49-17c70b805a3d.jpg"/>
      <Card.Body>
        <Card.Title><h3 className={style.cardHeading}>{item.name} </h3></Card.Title>
        <Card.Text className={style.cardText}>
        {item.description}
        </Card.Text>
        <hr/>
        <Row className={style.CardBottom}>
            <Col xs={4} className={style.colStyle}>
            <div className={style.cardFooter}>
            <Image width="22px" height="22px" className='tvLikeImage' alt="like" src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg"/>
            <div className={style.Badge}>14</div>
            </div>
            </Col>
            <Col xs={4} className={style.colStyle} >
              <div className={style.cardFooter} >
              <Image width="22px" height="22px" src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg"/>
              <div className={style.Badge}>7</div>
              </div>
            </Col>
            <Col xs={4} className={style.colStyle}>
            <div className={style.cardFooter}>
            <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Header>
                  <p style={{color:"black"}}>Share</p>
                  <Image width="22px" height="22px"  src="https://beta.kidzapp.com/images/share-review-kd-new.png" alt="share" />
                  </Accordion.Header>
                  <Accordion.Body className={style.CardIcon}>
            <div className={style.iconContainer}>
            <BsFacebook className={style.iconStyle}/>
            </div>
            <div className={style.iconContainer}>
            <BsTwitter className={style.iconStyle}/>
            </div>
            <div className={style.iconContainer}>
            <BsWhatsapp className={style.iconStyle}/>
            </div>
            <div className={style.iconContainer}>
            <AiFillMail className={style.iconStyle}/>
            </div>
            <div className={style.iconContainer}>
            <BsInstagram className={style.iconStyle}/>
            </div>
            <div className={style.iconContainer}>
            <BsLinkedin className={style.iconStyle}/>
            </div>
        </Accordion.Body>
              </Accordion>
               </div> 
            </Col>
        </Row>
      </Card.Body>
    </Card>
    </>
          )
    }
          )}
        </Container>
      </div>
      <Container>
      <div className={style.commentContent}>
      <h3>Demo fifth Video</h3>
      <h5>Demo Category</h5>
      <h6>vtesting purpose testing fitth</h6>
      </div>
      <div>
        <h4>Comments 4</h4>
        {commentData.map((item)=>
            <Row className={style.comment}>
            <Col className={style.profileColumn}  md={6}>
                <Image className={style.profile}  src="https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/e82e3d46-41ee-4576-bf49-17c70b805a3d.jpg"/>
            </Col>
            <Col md={6}>
            <h4>{item.title}</h4>
            <p className=' m-0'>{item.text}</p>
            <a className={style.CommentYear} href="#">{item.year}</a>
            </Col>
        </Row>
        )}
      </div>
      </Container>
      <KidzappFeed/>
    </div>
  )
}

export default CommentShow
