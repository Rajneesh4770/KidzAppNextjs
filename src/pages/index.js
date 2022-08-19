import HomeCrousel from "../Components/HomePageComponents/HomeCrousel";
import HomeHandpicked from "../Components/HomePageComponents/HomeHandpicked";
import HomeKidzappolis from "../Components/HomePageComponents/HomeKidzappolis";
import HomeKidsActivitiesReviews from "../Components/HomePageComponents/HomeKidsActivitiesReviews";
import HomeAsfeature from "../Components/HomePageComponents/HomeAsfeature";
import KidzappFeed from "../Components/KidzappFeed";
import style from '../styles/Index.module.css';
import apiData from '../Components/HomePageComponents/HomeBlog'
import HomeBlog from '../Components/HomePageComponents/HomeBlog'
import Test from "./test"
import axios from "axios";
function index(props) {
  return (
    <div className={style.body}>
     <div  className={`container ${style.sidenav}`}>
  <a href="https://api.whatsapp.com/send?phone=971566578854&text=Hi%2C+I%27m+browsing+home+screen+and+have+some+questions"
   className={`fixed ${style.a}`}>Chat</a>
  </div>
      {/* Crousel component of Home page */}
      {/* <HomeCrousel /> */}
      <Test data={props.data}/>

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

export async function getServerSideProps (){
  let res = await axios.get('https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=featured_banner_uae&country_code=ae&page=1&page_size=10&city=&website=1&lang=ar');
  let props = {
    data:res.data.results
   };
   return { props}
}
export default index