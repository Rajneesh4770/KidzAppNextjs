import React, { useState, useEffect } from "react";
import style from "../../styles/ComponentsCss/HomePageComponents/HomeBlog.module.css";
import { baseUrl } from "../../config";
import axios from "axios";
import Link from "next/link";
import HomeButton from "./HomeButton";
function Homeblog2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(baseUrl + "blogs?page=1&limit=6&country_code=ae").then((res) => {
      setData(res.data.results);
    });
  }, []);
  return (
    <>
      <section className={style.section1}>
        <div className="container">
          <center>
            <h1 className={style.heading}>Our Blog Picks</h1>
          </center>
          <div className="row mb-4">
            {data.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className={`${
                    i === 0 || i === 5 || i === 6
                      ? `col-md-6 `
                      : `col-md-3  ${style.smcard}`
                  }  col-sm-12 ${style.blogCardHome}`}
                >
                  <div className={`card ${style.card1} mb-4`}>
                    <img
                      src={item.cover_image}
                      className={`card-img`}
                      alt="..."
                    />
                    <div className={`card-img-overlay ${style.card1body}`}>
                      <h5 className="card-title"> {item.meta_title}</h5>
                      
                      <p className="card-text">{item.auther_name}</p>
                   
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Link href="/Blog">
        <center><button className={style.button}>View All</button></center>
        </Link>
        <br />
        </div>
       
      </section>
    </>
  );
}

export default Homeblog2;
