import HomeHandpicked from "../Components/HomePageComponents/HomeHandpicked";
import HomeKidzappolis from "../Components/HomePageComponents/HomeKidzappolis";
import HomeKidsActivitiesReviews from "../Components/HomePageComponents/HomeKidsActivitiesReviews";
import HomeAsfeature from "../Components/HomePageComponents/HomeAsfeature";
import KidzappFeed from "../Components/KidzappFeed";
import style from '../styles/Index.module.css';
import HomeBlog from '../Components/HomePageComponents/HomeBlog'
import axios, { Axios } from 'axios'
import { baseUrl } from "../config";
import { Carousel } from "react-bootstrap";
function index(props) {
  return (
    <div className={style.body}>
     <div  className={`container ${style.sidenav}`}>
  <a href="https://api.whatsapp.com/send?phone=971566578854&text=Hi%2C+I%27m+browsing+home+screen+and+have+some+questions"
   className={`fixed ${style.a}`}>Chat</a>
  </div>
 

      <Carousel  className="maincrousel">
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

      {/* Handpicked component of Home page */}
      <HomeHandpicked />

      {/* kidzappolis component of Home page */}
      <HomeKidzappolis />

      {/* Homeblog component of Home page */}
      <HomeBlog />

      {/*  HomeKidsActivitiesReviews component of Home Page */}
      <HomeKidsActivitiesReviews/>

      {/* HomeAsfeature component of home page */}
      <HomeAsfeature/>

{/* kidzappFeed component */}
<KidzappFeed/>

    </div>

  )
};
export async function getStaticProps (){
  let res = await axios.get(baseUrl+'experiences/curated-list/?list_name=featured_banner_uae&country_code=ae&page=1&page_size=10&city=&website=1&lang=ar');
  let props = {
    data:res.data.results
   };
   return { props}
}
export default index