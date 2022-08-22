import React from 'react'
import style from "../../styles/MethodOfEducation.module.css";
import KidzappFeed from '../../Components/KidzappFeed';
import { Container,Row,Col,Button,FormControl,Form,Card,Image} from 'react-bootstrap'
const MethodOfEducation = () => {
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
      <KidzappFeed/>
    </>
  )
}

export default MethodOfEducation