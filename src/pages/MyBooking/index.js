import React from "react";
import { CheckCircle } from "@mui/icons-material";

import style from "../../styles/Mybooking.module.css";

const Mybooking = () => {
  return (
    <>
      <section className={style.section1}>
        <div className="container-flex">
          <div className="row">
            <div className="col-12">
              <div className={style.topbackground}>
                <h1 className={style.mainheading}> My Booking</h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-4">
                <div className={`card mb-3  ${style.card}`}>
                  <img
                    className={`card-img-top ${style.cardimg}`}
                    src="https://images.kidzapp.com/media/CACHE/images/venues/8d9db0bb-557e-4a61-8735-bc0a33dea096/the-digger-hub-marassi.jpg"
                    alt="..."
                  />

                  <div className="card-body">
                    <p className={style.title}>
                      10% off The Digger Hub - Marassi{" "}
                    </p>
                    <div className="d-flex">
                      <p>20 AUGUST, 2022</p>
                      <p className={style.time}>6:30PM</p>
                    </div>
                    <div className="d-flex">
                      <p className={style.price}>EGP 270.00</p>
                      <p className={style.time}>
                        <CheckCircle sx={{ color: "#25D366" }} />
                        confirmed
                      </p>
                    </div>
                    <div>
                      <center>
                        <p className={style.deliverdtext}>Delivered</p>&nbsp;
                        <span>Created on : 22 AUGUST,2022</span>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mybooking;
