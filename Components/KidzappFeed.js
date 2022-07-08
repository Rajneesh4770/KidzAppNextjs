import React from 'react';
import style from '../styles/ComponentsCss/KidzappFeed.module.css';
function KidzappFeed() {
  return (
    <>
     <section className="kidzappFeed py-5 ">
        <div className="container py-4">
          <div className={`row ${style.row} ${style.globeRow}`}>
            <div className={`col-lg-4 col-md-4 col-sm-12  ${style.column}`}>
              <img className={style.col1img} src="https://drfsb8fjssbd3.cloudfront.net/images/subsc-baby.png" alt=""  />
            </div>
            <div className={`col-md-8  col-sm-12 p-2  ${style.col2}`}>
              <div className={style.content}>
                <div className={`${style.col2text} text-center`}>
                  <h1 className={style.col2h1}>The Kidzapp Feed</h1>
                  <p className={style.col2p}>Receive regular updates and promotions from Kidzapp</p>
                </div>
                <div className="searchBar mx-5 my-3">
                  <div className={`row ${style.searchbarrow}`}>
                    <div className="col-md-12 p-0">
                      <div className="searchwithbutton d-flex">
                        <input
                          type="text"
                          name=""
                          className={`form-control ${style.searchinput}`}
                          placeholder="Email address"
                        />
                        <button className={`btn ${style.searchbtn}`}>Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`container ${style.kidzFeedValues}`}>
                  <div className={`row  ${style.col2row3}`}>
                    <div className={`col-md-4 col-sm-4 ${style.valuesm4}`}>
                      <div className="text">
                        <h2 className={style.valueh2}>2500 +</h2>
                        <p className={style.valuep}>Experiences</p>
                      </div>
                    </div>
                    <div className={`col-md-4 col-sm-4 ${style.second}`}>
                      <div className="text">
                        <h2 className={style.valueh2}>500 +</h2>
                        <p className={style.valuep}>Vanues & Events</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="text">
                        <h2 className={style.valueh2}>1000 +</h2>
                        <p className={style.valuep}>Classes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br/>
    </>
  )}

export default KidzappFeed