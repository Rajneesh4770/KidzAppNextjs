import style from "../../styles/Homehandpickedbooking/Booking.module.css";
import Router from "next/router";
import Link from "next/link";
import { Button } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
const Booking = () => {

  return (
    <>
      <section className={style.section1}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Button
                variant="contained"
                className={style.backbutton}
                onClick={() => Router.back()}
              >
                Go Back &nbsp;{" "}
                <span className={style.backicon}>
                  <i class="fa-solid fa-angles-left"></i>
                </span>
              </Button>
              <br />

              {/* image section column */}
              <div className="row">
                <div className="col-lg-8 col-sm-12">
                  <img
                    className={style.leftimg1}
                    src="https://testimages.kidzapp.com/media/CACHE/images/venues/b00dc740-c214-4528-8b6b-025fe2942656/dubai-miracle-garden.jpg"
                  />
                  {/* heading and button section row */}
                  <div className="row">
                    <div className="col-6">
                      <h1>Dubai Miracle Garden</h1>
                    </div>
                    
                  </div>
                  {/* second row in col-6 */}
                  <div className="row mt-4">
                    <div className="col-6">
                      <div className="row">
                        <div className="col-6">
                          <Button
                            className={style.cardbutton2}
                            variant="contained"
                          >
                            Outdoor & Nature
                          </Button>
                        </div>
                        <div className="col-6 mt-1">
                          <div className={style.agetext}>
                            {" "}
                            Age:- &nbsp; 0-16
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-12">
                      <div className={style.priceoffer}>
                        <center>
                          <h4 className="pt-2">
                            Dubai Miracle Garden - Prices and Offers
                          </h4>
                        </center>
                        <center>
                          <del>
                            <h6 className={style.delprice}>AED 10</h6>
                          </del>
                        </center>
                        <center>
                          <h6 className={style.price}>AED 9</h6>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right cards */}
                <div className="col-lg-4 col-sm-12">
                  <div className={style.rightsection}>
                    <div
                      className={`row pt-3 container ${style.rightsectiondiv}`}
                    >
                      <div className="col-6 ">
                        <p className={style.datetimecontent}>
                          Select Desired Date & Time
                        </p>
                      </div>
                      <div className="col-6 ">
                        <button className={style.schedulebutton}>
                          <DateRangeIcon />
                          view schedule
                        </button>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-12">
                          <div
                            id="date-picker-example"
                            class="md-form md-outline input-with-post-icon datepicker"
                            inline="true"
                          >
                            <input
                              placeholder="Select date "
                              type="date"
                              id="example"
                              class="form-control"
                            />
                            
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4 container">
                        <div className="col-12">
                          <div className={style.pricediv}>
                            <span className={style.totalprice}>
                              Total Price :
                            </span>
                            <span className={style.aedprice}>AED 9</span>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4 container">
                        <div className="col-12">
                          <h6>Special Request :</h6>
                          <div class="form-outline">
                            <textarea
                              class="form-control"
                              id="textAreaExample"
                              rows="4"
                              placeholder="message"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              I agree to the
                              <Link href="/FooterPages/PrivacyPolicy">
                                <span className={style.checkboxlink}>
                                  {" "}
                                  term & conditions{" "}
                                </span>
                              </Link>
                              , and to the below aditional term.
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <Button
                            variant="contained"
                            color="success"
                            className={style.submitbtn}
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
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

export default Booking;
