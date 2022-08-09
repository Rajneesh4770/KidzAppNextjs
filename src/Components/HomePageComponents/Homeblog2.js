import React from "react";
import style from "../../styles/ComponentsCss/HomePageComponents/HomeBlog.module.css";

function Homeblog2() {
  return (
    <>
      <section className={style.section1}>
        <div className="container">
           <center><h1 className="pb-4" style={{color:'white'}}>Blog</h1></center> 
          <div className="row mb-4">
            <div className="col-lg-6">
              <div className={`card ${style.card1}`}>
                <img
                  src="https://images.kidzapp.com/media/blog/cover_images/6e423d51-a9ea-4400-a5fe-ac3189fda6e8/top-action-packed-activities-in-dubai-and-abu-dhabi.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className={`card-img-overlay ${style.card1body}`}>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className={`card ${style.card1}`}>
                <img
                style={{height:'307px'}}
                  src="https://images.kidzapp.com/media/blog/cover_images/644a6bbb-18b9-4a25-a947-c224750a4bd5/10-must-try-family-attractions-this-summer.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className={`card-img-overlay ${style.card1body}`}>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className={`card ${style.card1}`}>
                <img
                style={{height:'307px'}}
                  src="https://images.kidzapp.com/media/blog/cover_images/040871e5-ee67-450e-b99b-87e1680b48ca/10-fun-and-budget-friendly-activities-to-try-this-week.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className={`card-img-overlay ${style.card1body}`}>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd row */}
          <div className="row mb-4">
            <div className="col-lg-3">
              <div className={`card ${style.card1}`}>
                <img
                   style={{height:'307px'}}
                  src="https://images.kidzapp.com/media/blog/cover_images/69d60d0a-31c0-4804-be9c-66908064c9bb/8-great-ways-to-enjoy-a-meal-a-splash-in-dubai-and-abu-dhabi-this-summer.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className={`card-img-overlay ${style.card1body}`}>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className={`card ${style.card1}`}>
                <img
                style={{height:'307px'}}
                  src="https://images.kidzapp.com/media/blog/cover_images/644a6bbb-18b9-4a25-a947-c224750a4bd5/10-must-try-family-attractions-this-summer.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className={`card-img-overlay ${style.card1body}`}>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={`card ${style.card1}`}>
                <img
                  src="https://images.kidzapp.com/media/blog/cover_images/040871e5-ee67-450e-b99b-87e1680b48ca/10-fun-and-budget-friendly-activities-to-try-this-week.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className={`card-img-overlay ${style.card1body}`}>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Homeblog2;
