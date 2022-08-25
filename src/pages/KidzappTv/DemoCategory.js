import React,{useState,useEffect} from 'react'
import axios from 'axios';
// import style from "../../styles/MethodOfEducation.module.css";
import style from "../../styles/DemoCategory.module.css";
import KidzappFeed from '../../Components/KidzappFeed';
import { Container,Row,Col,Button,FormControl,Form,Card,Image} from 'react-bootstrap'
const DemoCategory = () => {
    const [cardData,setCardData]=useState([]);
    useEffect(()=>{
        axios.get("https://api2.kidzapp.com/api/3.0/tv/video_category")
        .then((res)=>{
          console.log(res.data,'console');
            setCardData(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
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
          {cardData.map((item)=>{ 
          return(
            <>
            <Col  xs={12} md={4}  >
            <Card key={item.id} className={`mx-3 ${style.cards}`} >
             <Card.Img width="40x" height="40px" className={style.playImage} src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg"/>
      <Card.Img variant="top" src="https://testimages.kidzapp.com/media/kidzapp_tv/video_thumbnals/e82e3d46-41ee-4576-bf49-17c70b805a3d.jpg"/>
      <Card.Body>
     
        <Card.Title><h3 className={style.cardHeading}>{item.name} </h3></Card.Title>
        <Card.Text className={style.cardText}>
        {item.description}
        </Card.Text>
        <hr/>
        <Row >
            <Col xs={4} className={style.colStyle}>
            <div className={style.cardFooter}>
            <Image width="22px" height="22px" className='tvLikeImage' alt="like" src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" />
            <div className={style.Badge}>14</div>
            </div>
            </Col>
            <Col xs={4} className={style.colStyle} >
              <div className={style.cardFooter} >
              <Image width="22px" height="22px" src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" />
              <div className={style.Badge}>7</div>
              </div>
            </Col>
            
            <Col xs={4} className={style.colStyle}>
               <div className={style.cardFooter}>
                  <p style={{color:"black"}}>Share</p>
                  <Image width="22px" height="22px"  src="https://beta.kidzapp.com/images/share-review-kd-new.png" alt="share" />
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

export default DemoCategory