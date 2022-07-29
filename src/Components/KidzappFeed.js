import React from 'react';
import style from '../styles/ComponentsCss/KidzappFeed.module.css';
import getResponseMessage from '../Language/multilingualServices';
import { constants } from './Navbar';
function KidzappFeed() {
  return (
    <>
      <section className="kidzappFeed py-5 ">
        <div className="container py-4">
          <div className={`row ${style.row} ${style.globeRow}`}>
            <div className={`col-lg-4 col-md-4 col-sm-12  ${style.column}`}>
              <img className={style.col1img} src="https://drfsb8fjssbd3.cloudfront.net/images/subsc-baby.png" alt="" />
            </div>
            <div className={`col-md-8  col-sm-12 p-2  ${style.col2}`}>
              <div className={style.content}>
                <div className={`${style.col2text} text-center`}>
                  <h1 className={style.col2h1}>{getResponseMessage(constants).the_kidzapp_feed}</h1>
                  <p className={style.col2p}>{getResponseMessage(constants).receive_regular_updates}</p>
                </div>
                <div className="searchBar mx-5 my-3">
                  <div className={`row ${style.searchbarrow}`}>
                    <div className="col-md-12 p-0">
                      <div className="searchwithbutton d-flex">
                        <input
                          type="text"
                          name=""
                          className={`form-control ${style.searchinput}`}
                          placeholder={getResponseMessage(constants). email_add}
                        />
                        <button className={`btn ${style.searchbtn}`}>{getResponseMessage(constants).subscribe1}</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`container ${style.kidzFeedValues}`}>
                  <div className={`row  ${style.col2row3}`}>
                    <div className={`col-md-4 col-sm-4 ${style.valuesm4}`}>
                      <div className="text">
                        <h2 className={style.valueh2}>2500 +</h2>
                        <p className={style.valuep}>{getResponseMessage(constants).exp}</p>
                      </div>
                    </div>
                    <div className={`col-md-4 col-sm-4 ${style.second}`}>
                      <div className="text">
                        <h2 className={style.valueh2}>500 +</h2>
                        <p className={style.valuep}>{getResponseMessage(constants).venues_events}</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="text">
                        <h2 className={style.valueh2}>1000 +</h2>
                        <p className={style.valuep}>{getResponseMessage(constants).classes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br />
    </>
  )
}

export default KidzappFeed