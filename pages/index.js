import HomeCrousel from "../Components/HomePageComponents/HomeCrousel";
import HomeHandpicked from "../Components/HomePageComponents/HomeHandpicked";
import HomeKidzappolis from "../Components/HomePageComponents/HomeKidzappolis";
import HomeBlog from "../Components/HomePageComponents/HomeBlog";
import HomeKidsActivitiesReviews from "../Components/HomePageComponents/HomeKidsActivitiesReviews";
import HomeAsfeature from "../Components/HomePageComponents/HomeAsfeature";
import KidzappFeed from "../Components/KidzappFeed";
import style from '../styles/Home.module.css';
function index() {
  return (
    <div className={style.body}>
    
      {/* Crousel component of Home page */}
      <HomeCrousel />

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
  );
}

export default index