import axios, { Axios } from 'axios'
import style from '../styles/ComponentsCss/HomePageComponents/HomeCrousel.module.css'
import { Carousel } from "react-bootstrap";

function Profile (props) {

console.log(props.data,'hjhj');
  return (
    <Carousel style={{marginTop:'10px'}}>
    {props.data.map((item) => {
      return (
        <Carousel.Item key={item.id}>
          <img
            className={style.crouselImages}
            src={item.image_url}
            alt="https://c4.wallpaperflare.com/wallpaper/921/18/419/loading-black-background-wallpaper-preview.jpg"
          />
          <Carousel.Caption>
            <h1 className={style.crouselHeading}>{item.title}</h1>
            <p className={style.crouselParagraph}>{item.description}</p>
            <button
              className={`btn ${style.button}`}
              onClick={() => toast("Successfully Booked")}
            >
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })}
    ;
  </Carousel>
      )
      }

export async function getServerSideProps (){
  let res = await axios.get('https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=featured_banner_uae&country_code=ae&page=1&page_size=10&city=&website=1&lang=ar');

  let props = {
    data:res.data.results
   };
   return { props}
}
export default Profile;

