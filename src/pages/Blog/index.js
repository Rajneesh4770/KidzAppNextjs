import React, { useState, useEffect } from "react";
import Router from "next/router";
import Axios from "axios";
import Link from "next/link";
import { Button, Stack, CircularProgress } from "@mui/material";
import {
  BubbleChart,
  Stadium,
  BabyChangingStation,
  HealthAndSafety,
  ArrowBack,
  DateRange,
  AccountCircle,
} from "@mui/icons-material";

import { baseUrl } from "../../config";
import styles from "./style.module.css";
import KidzappFeed from "../../Components/KidzappFeed";

function Blog() {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [categories, setCategory] = useState([]);
  const [pageindex, setPageindex] = useState(9);
  const selectCategory = (name) => {
    getData(name);
  }

  useEffect(() => {
    const scroll = (event) => {
      if (window.scrollY > 400) {
        setPageindex(pageindex + 3);
      }
      if (window.scrollY > 1200) {
        setPageindex(pageindex + 6);
      }
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, []);

  const getData = (selectedCategoryName = '') => {
    let categoryName = selectedCategoryName || ''
    Axios.get(baseUrl + `blogs?country_code=ae&limit=${pageindex}&page=1&category=${categoryName}`)
      .then((res) => {
        setData(res.data.results);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const gitBlogCategory = () => {
    
    Axios.get(baseUrl + `blogs/categories?country_code=ae`)
    .then((res) => {
      console.log("res.data.results", res.data)
      setCategory(res.data);
      setLoader(true);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    gitBlogCategory();
    getData();
  }, [pageindex]);

  return (
    <div className={styles.blogBody}>
      <section className={styles.section1}>
        <div className={`container`}>
          <div className="row">
            <div className="col-lg-12 md-12 sm-12 ">
              <div className={`form-control ${styles.searchbar}`}>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button type="button" className="btn btn-outline-primary">
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 md-12 sm-12">
              <div className={` ${styles.backbtn}`}>
                <Button
                  onClick={() => Router.back()}
                  className="changeBlogBackBtn"
                >
                  <h6 className={styles.buttonback}>
                    <ArrowBack /> Go Back
                  </h6>
                </Button>
              </div>
            </div>
          </div>
          <br />

          <div className="container">
            <div className="row">
            {categories?.map((category) => {
              return (
              <div className="col-lg-3  col-md-6 col-sm-12 mb-3 button-div">
                <button className={styles.button85} data-bs-toggle="tooltip p-5" data-bs-placement="bottom  " title={`See All the Blogs of ${category.internal_name}`}  onClick={() => selectCategory(category.name)}>
                  {category.internal_name} <BubbleChart />
                </button>
                
              </div>
             );
            })}
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

      <div className={styles.map1}>
        {loader ? (
          <Stack sx={{ alignItems: "center" }} spacing={2} direction="row">
            <CircularProgress
              color="success"
              sx={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </Stack>
        ) : null}

        <div className="container">
          <div className="row">
            {data?.map((item) => {
              return (
                <Link href="/BlogDetail">
                  <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                    <div className=" m-2">
                      <article className={` ${styles.blogcard}`}>
                        <div className={styles.blogcardbackground}>
                          <div className={styles.cardbackgroundwrapper}>
                            <div className={styles.cardbackgroundmain}>
                              <img src={item.cover_image} />
                              <div className={styles.cardbackgroundlayer}>
                                <img
                                  className={styles.cardimg}
                                  src={item.cover_image}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.blogcardhead}></div>
                        <div className={styles.blogcardinfo}>
                          <h5 className={styles.title}>
                            {" "}
                            {item.meta_title}
                          </h5>
                          <br />
                          <DateRange className={styles.icons} /> &nbsp;{" "}
                          <span className={styles.iconsText}>
                            {item.created_at}{" "}
                          </span>
                          <br />
                          <AccountCircle className={styles.icons} /> &nbsp;
                          <span className={styles.iconsText}>
                            {item.auther_name}
                          </span>
                          <br />
                          <br />
                          <p className={styles.bodyapi}>{item.excerpt}</p>
                          <a
                            href="#"
                            className={`${styles.btncard} ${styles.btnwithicon}`}
                          >
                            <i
                              className={`${styles.btnicon} btn-icon fa fa-long-arrow-right `}
                            ></i>
                            READ MORE
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <section className="last-section">
        <div className="container">
          <KidzappFeed />
        </div>
      </section>
    </div>
  );
}

export default Blog;
