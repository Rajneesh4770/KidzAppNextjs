import  React, { useState, useEffect } from "react";
import Router from 'next/router'
import Axios from "axios";
import  {baseUrl} from "./config"
import styleblog from "../styles/Blog.module.css"
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import StadiumIcon from "@mui/icons-material/Stadium";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KidzappFeed from "../Components/KidzappFeed";
import { Button } from "@mui/material";
function Blog() {
  const [data, setData] = useState([]);
  const getData = () => {
    Axios.get(
      baseUrl + "blogs?country_code=ae&limit=9&page=2"
    )
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  });
  return (
    <div className={styleblog.blogBody}>
      <section className={styleblog.section1}>
        <div className={`container`} >
          <div className="row">
            <div className="col-lg-12 md-12 sm-12 ">
              <div className="search-img">
                <form className={`blogsearchbarGlobalCss d-flex search-bar`}>
                  <input
                    className={` form-control  mt-4`}
                    type="search"
                    placeholder="Type Here To Search Blog"
                    aria-label="Search"
                  />
                  {/* <button className="btn btn-primary mt-4" type="submit">
                Search
              </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-2 */}

      <section className={styleblog.section2}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 md-12 sm-12">
              <div className={` ${styleblog.backbtn}`}>
                {/* <Link to=''> */}
                <Button onClick={() => Router.back()} className='changeBlogBackBtn'>
                  <h6 className={styleblog.buttonback}>
                    {" "}
                    <ArrowBackIcon /> Go Back
                  </h6>
                </Button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <br />

          <div className="container">
            <div className="row">
              <div className="col-lg-3  col-md-6 col-sm-12 mb-3 button-div">
                <button className={styleblog.button85} role="button">
                  Arts & Crafts &nbsp; <BubbleChartIcon />
                </button>
              </div>
              <div className="col-lg-3  col-md-6 col-sm-12 mb-3 button-div">
                <button className={styleblog.button85} role="button">
                  Kids Activities &nbsp; <StadiumIcon />
                </button>
              </div>
              <div className="col-lg-3  col-md-6 col-sm-12 mb-3 button-div">
                <button className={styleblog.button85} role="button">
                  Parenting &nbsp; <BabyChangingStationIcon />
                </button>
              </div>
              <div className="col-lg-3  col-md-6 col-sm-12 mb-3 button-div">
                <button className={styleblog.button85} role="button">
                  Health&Nutri.. &nbsp; <HealthAndSafetyIcon />
                </button>
              </div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-lg-12">
              <h4>The KZ Blog</h4>
              <h6>
                Your source for everything related to Health & Nutrition,
                Parenting, Kids Activities and Arts & Crafts.
              </h6>
            </div>
            <br />
          </div>
        </div>
      </section>

      <div className={styleblog.map1} >
        {data?.map((item) => {
          return (
            <div className="container row " >
              <div className=" m-2" >

                <article className={` ${styleblog.blogcard}`}>
                  <div className={styleblog.blogcardbackground}>
                    <div className={styleblog.cardbackgroundwrapper}>
                      <div className={styleblog.cardbackgroundmain} >
                        <img src={item.cover_image} />
                        <div className={styleblog.cardbackgroundlayer}><img src={item.cover_image} /></div>
                      </div>
                    </div>
                  </div>
                  <div className={styleblog.blogcardhead}>
                  </div>
                  <div className={styleblog.blogcardinfo}>
                    <h5 className={styleblog.title}> {item.meta_title}</h5><br />
                    <DateRangeIcon /> &nbsp; {item.created_at} <br />
                    <AccountCircleIcon /> &nbsp; Posted  By:- {item.auther_name}<br /><br />

                    <p className={styleblog.bodyapi}>{item.excerpt}</p>
                    <a href="#" className={`${styleblog.btncard} ${styleblog.btnwithicon}`}><i className={`${styleblog.btnicon} btn-icon fa fa-long-arrow-right `}></i>READ MORE</a>
                  </div>
                </article>


              </div>
            </div>
          );
        })}
      </div>

      <section className="last-section">
        <div className="container">
          <KidzappFeed />
        </div>
      </section>
    </div>
  )
}

export default Blog