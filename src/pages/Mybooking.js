import React from "react";
import style from '../styles/Mybooking.module.css'
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
                        src='https://images.kidzapp.com/media/CACHE/images/venues/8d9db0bb-557e-4a61-8735-bc0a33dea096/the-digger-hub-marassi.jpg'
                        alt="..."
                      />
                     
                      <div className="card-body">
                        <p className="card-title">title</p>
                                             
                                             
                                             
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
