import React, { useState, useEffect } from "react";
import style from "../../styles/ComponentsCss/HomePageComponents/HomeBlog.module.css";
import { baseUrl } from "../../config";
import axios from "axios";
import Link from "next/link";
function Homeblog2() {
  const [data, setData] = useState([]);
  const [scroll,setScroll]=useState(false);
  useEffect(() => {
    axios.get(baseUrl + "blogs?page=1&limit=6&country_code=ae").then((res) => {
      setData(res.data.results);
    });
  },[]);

useEffect(()=>{
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 1400);
  });
},[scroll])
  return (
    <>
      <section className={style.section1}>
        <div className="container">
          <center>
            <h1 className={style.heading}>Our Blog Picks</h1>
          </center>
          <div className={`row mb-4 ${scroll? style.scrolltrue:style.scrollfalse}`}>
            {data.map((item, i) => {
              return (
                <div
                id="animate"
                  key={item.id}
                  className={`${
                    i === 0 || i === 5 || i === 6
                      ? `col-lg-6 md-9 sm-12 ${style.bigcard}`
                      : `col-lg-3  ${style.smcard}`
                  }  col-sm-12 ${style.blogCardHome}      
                 ${scroll ?  (i===0 || i===1 || i===3 ? 'animate__animated animate__backInUp animate__slow': 'animate__animated animate__backInDown animate__slow') : null}`}
                >
                  <div className={`card ${style.card1} mb-4`}>
                    <img
                      src={item.cover_image}
                      className={style.cardimage}
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
