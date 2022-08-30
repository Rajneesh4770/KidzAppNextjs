import React from 'react'
import { Container,Row,Col,Button,FormControl,Form,Card,Image} from 'react-bootstrap';
import style from "../../styles/TestVideoForDemo.module.css";
import KidzappFeed from '../../Components/KidzappFeed';
const TestVideoForDemo = () => {
    const slider2Data = [{
        id: 1,
        image: "https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/03473b03-8c4a-4475-be01-998e97206245.png",
        playIcon: "https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
        likeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
        heading: "Demo Video",
        text: "Demo Category",
        bottomLikeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
        commentIcon: "	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
        shareIcon: "	https://beta.kidzapp.com/images/share-review-kd-new.png"
      },
      {
        id: 2,
        image: "https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/374f26f7-fff4-4588-977d-cbba4f74a0d6.png",
        playIcon: "https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
        likeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
        heading: "Demo Video",
        text: "Demo Category",
        bottomLikeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
        commentIcon: "	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
        shareIcon: "	https://beta.kidzapp.com/images/share-review-kd-new.png"
      },
      {
        id: 3,
        image: "https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/7afa2b95-731b-497f-9005-a0b2d7f247de.png",
        playIcon: "https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
        likeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
        heading: "Demo Video",
        text: "Demo Category",
        bottomLikeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
        commentIcon: "	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
        shareIcon: "	https://beta.kidzapp.com/images/share-review-kd-new.png"
      },
      {
        id: 4,
        image: "https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
        playIcon: "https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
        likeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
        heading: "Demo Video",
        text: "Demo Category",
        bottomLikeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
        commentIcon: "	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
        shareIcon: "	https://beta.kidzapp.com/images/share-review-kd-new.png"
      },
      {
        id: 5,
        image: "https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
        playIcon: "https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
        likeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
        heading: "Demo Video",
        text: "Demo Category",
        bottomLikeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
        commentIcon: "	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
        shareIcon: "	https://beta.kidzapp.com/images/share-review-kd-new.png"
      },
      {
        id: 6,
        image: "https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/cbb58b83-1c48-4bda-839a-ed6e3a1c5766.jpg",
        playIcon: "https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg",
        likeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg",
        heading: "Demo Video",
        text: "Demo Category",
        bottomLikeIcon: "https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg",
        commentIcon: "	https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg",
        shareIcon: "	https://beta.kidzapp.com/images/share-review-kd-new.png"
      }
      ]
  return (
    <div>
     <section className={style.section1}>
        <div className="container-flex">
          <Row className={style.Container}>
            <Col className={style.colStyle} lg={12}>
              <div className={style.background}>
              <Container>
              <Form>  
              <Row className={style.FormRow}>
                  <Col xs={8} md={7}>
                      <FormControl type="search" placeholder="Search"  aria-label="Search"  />           
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
        <Container className="my-5 sliderContainer">
          <Row>
              {slider2Data.map((item) => {
                return (
                  <>
                    <Col  xs={12} md={4}>
                      <Card  key={item.id} className={`mx-3 ${style.cards}`}>
                        <Card.Img variant="top" src={item.image}/>
                        <Card.Img width="40x" height="40px" className={style.playImageSlider1} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" />
                        <Card.Body>
                          <Card.Title><h3 className={style.cardHeading}>{item.heading}</h3></Card.Title>
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
                                <Image className={style.imageStyle} src={item.shareIcon} alt="share" />
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
        <KidzappFeed/>
    </div>
  )
}

export default TestVideoForDemo
