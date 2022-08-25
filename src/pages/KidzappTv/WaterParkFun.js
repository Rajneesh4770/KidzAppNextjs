import React,{useState,useEffect} from 'react'
import style from "../../styles/WaterParkFun.module.css";
import KidzappFeed from '../../Components/KidzappFeed';
import axios from 'axios';
import { Container,Row,Col,Button,FormControl,Form,Card,Image} from 'react-bootstrap'
const MethodOfEducation = () => {
  const [sliderData, setSliderData] = useState([])
  useEffect(()=>{
    axios.get("https://api2.kidzapp.com/api/3.0/tv/featured/videos")
      .then(resp => {
        setSliderData(resp.data)
        console.log(resp.data,"Slider Data");
      })
      .catch(err => { console.log(err); })
  },[]) 
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
          {sliderData.map((item)=>{ 
          return(
            <>
            <Col  xs={12} md={4}  >
            <Card key={item.id} className={`mx-3 ${style.cards}`} >
            <video  src='https://images.kidzapp.com/media/kidzapp_tv/videos/None_1c0742c8-ac24-43af-b108-5638d989089b.mp4' autoPlay={false}></video>

<Card.Img width="40px" height="40px" className={style.playImageSlider} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" />
      <Card.Body>
     
        <Card.Title><h3 className={style.cardHeading}>{item.name} </h3></Card.Title>
        <Card.Text className={style.cardText}>
          {item.video_category.name}
        </Card.Text>
        <hr/>
        <Row >
            <Col xs={4} className={style.colStyle}>
            <div className={style.cardFooter}>
            <Image className={style.imageStyle} src= "https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg"/>
            <div className={style.Badge}>{item.likes_count}</div>
            </div>
            </Col>
            <Col xs={4} className={style.colStyle} >
                              <div className={style.cardFooter} >
                                <Image className={style.imageStyle} src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" />
                                <div className={style.Badge}>{item.comments_count}</div>
                              </div>
                            </Col>

                            <Col xs={4} className={style.colStyle}>
                              <div className={style.cardFooter}>
                                <p className={style.Badge}>Share</p>
                                <Image className={style.imageStyle} src="https://beta.kidzapp.com/images/share-review-kd-new.png" alt="share" />
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