import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import style from "../styles/Handpicked.module.css";
const Handpicked = () => {
  const [data, setData] = useState([]);
  const [card, setCard] = useState('');
  let list =['hearts_day_fun','free_summer_fun','dev_lists_new'];
  useEffect(()=>{
    console.log(data,"test data");  
  },[data])

  
  useMemo(() => {
    if(data.length !== list.length)
    list.forEach(async(x)=>{
    try {
      let res = await axios.get(
        `https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=${x}&country_code=&page=1&page_size=10&city=&website=1`
      );
      let New = {
        title:x,
        cards:res.data.results
      }
      setData(Old=>[...Old,New]);
    } catch (error) {
      console.log(error);
    }
  });
  }, []);

  
  return (
    <>
      <section className={style.section1}>
        <div className={style.topbackground}>
          <div className={`container ${style.heading}`}>
            <h1>Handpicked Kids Activities</h1>
            <p>
              Our pick of the best kids activities in Dubai, Abu Dhabi and the
              rest of the UAE
            </p>
            <h2 className={style.effectiveheading}>
              How To Spend Your Cashback - Top Picks
            </h2>
          </div>
        </div>
        <div className="container">
            {data?.map((Item) => {
              return (
                <div className="row mt-3">
                  <h1>{Item.title}</h1>
                {
                Item.cards.map((item)=>
                <div className="col-lg-4 sm-6">
                  <div className={`card mb-3  ${style.card}`}>
                    <img
                      className={`card-img-top ${style.cardimg}`}
                      src={item.image_url}
                      alt="..."
                    />
                    <img
                      src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg"
                      className={style.cardimg2}
                    />
                    <img
                      src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                      className={style.dealimg}
                    />
                    <div className="card-body">
                      <h5 className="card-title">KidZania Dubai</h5>
                      <h6 className={`card-title ${style.secondheading} pt-2`}>
                        The Dubai Mall, Downtown
                      </h6>
                      <span>
                        <del>AED 99</del>
                      </span>{" "}
                      &nbsp; <span style={{ color: "red" }}> AED 79</span>
                    </div>
                  </div>
                </div>
                )}
                </div>
              );
            })}
          </div>
      </section>
    </>
  );
};

export default Handpicked;