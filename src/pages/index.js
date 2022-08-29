import HomeHandpicked from "../Components/HomePageComponents/HomeHandpicked";
import HomeKidzappolis from "../Components/HomePageComponents/HomeKidzappolis";
import HomeKidsActivitiesReviews from "../Components/HomePageComponents/HomeKidsActivitiesReviews";
import HomeAsfeature from "../Components/HomePageComponents/HomeAsfeature";
import KidzappFeed from "../Components/KidzappFeed";
import style from "../styles/Index.module.css";
import HomeBlog from "../Components/HomePageComponents/HomeBlog";
import axios, { Axios } from "axios";
import { baseUrl } from "../config";
import { Carousel } from "react-bootstrap";
import { Markup } from "interweave";
// import { Markup } from "interweave";

export async function getStaticProps() {
  let res = await axios.get(
    baseUrl +
      "experiences/curated-list/?list_name=featured_banner_uae&country_code=ae&page=1&page_size=10&city=&website=1&lang=ar"
  );
  let props = {
    data: res?.data?.results,
  };
  return { props };
}

function index(props) {
  return (
    <div className={style.body}>
      <Carousel className="maincrousel">
        {props.data.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className={style.crouselImages}
                src={item.image_url}
                alt="Image is not available"
              />
              <Carousel.Caption>
                <h1 className={style.crouselHeading}>{item.title}</h1>
                 {/* <p className={style.crouselParagraph}> {item.description}</p> */}
                 {/* {/* <p className="bg-primary text-color-warning"><Markup {item?.title}/></p> */}
               <p>  <Markup  markup={item.description}/>  </p>
                
                <button
                  className={`btn ${style.button}`}
                  onClick={() => toast("Successfully Booked")}
                >
                  Book Now
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          );
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
      <HomeKidsActivitiesReviews />

      {/* HomeAsfeature component of home page */}
      <HomeAsfeature />

      {/* kidzappFeed component */}
      <KidzappFeed />
    </div>
  );
}

export default index;
