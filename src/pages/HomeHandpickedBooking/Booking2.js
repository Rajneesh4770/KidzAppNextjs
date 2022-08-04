import style from "../../styles/Homehandpickedbooking/Booking.module.css";
import Router from "next/router";
import Link from "next/link";
import { Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Slider from "react-slick";
const Booking = () => {
  const Setting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };

  return (
    <>
      <section className={style.section1}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* image section column */}
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <Slider {...Setting}>
                    <img
                      className={style.leftimg1}
                      src="https://testimages.kidzapp.com/media/CACHE/images/venues/b00dc740-c214-4528-8b6b-025fe2942656/dubai-miracle-garden.jpg"
                    />
                    <img
                      className={style.leftimg1}
                      src="https://testimages.kidzapp.com/media/CACHE/images/venues/b00dc740-c214-4528-8b6b-025fe2942656/dubai-miracle-garden.jpg"
                    />
                  </Slider>
                  {/* heading and button section row */}
                  <div className="row">
                    <div className="col-12">
                      <div className={style.blog_title}>
                        <h2>Special Offer: KidZania Dubai</h2>
                      </div>
                      <p>Theme Parks, Fun & Play</p>
                      <div className={style.blog_btn}>
                        <span
                          className={`${style.blogSpan} ${style.blog_rating}`}
                        >
                          <i class="fa-solid fa-star"></i>&nbsp; 4.5
                        </span>
                        <span className={`${style.blogSpan} ${style.blog_age}`}>
                          <i class="fa-solid fa-calendar-days"></i> &nbsp; Ages4
                          - Adults
                        </span>
                        <span className={`${style.blogSpan} ${style.blog_cat}`}>
                          <i class="fa-solid fa-child"></i> &nbsp; Kids Only
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* second row in col-6 */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="location pt-3 pb-3">
                        <span>
                          <i class="fa-solid fa-location-dot"></i>
                        </span>
                        &nbsp;
                        <span>
                          The Dubai Mall, Downtown, Downtown / Business Bay{" "}
                        </span>
                      </div>
                      <div className="time pb-3">
                        <span>
                          <i class="fa-solid fa-clock"></i>
                        </span>
                        &nbsp;
                        <span>Daily 10:00 to 22:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Description
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              Spend the day at a temperature controlled indoor aqua park, complete with eight slide beams, waterfall buckets, forest and more for your little splashers. Your boys and girls are sure to love it, and it's a fantastic spot for you and your kiddos to play and stay cool all year round.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingTwo">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Information
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                             <p>- The entry ticket allows you access for up to 2.5 hours max.</p> 
                             <p>- Kids under 5 need to be accompanied by an adult.</p> 
                             <p>- This offer is not valid on public holidays.</p> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                
                  <div className="row mt-5">
                    <div className="col-12">
                      <div className={style.price_offder}>
                        <div className={style.price_title}>
                          <h4 className={style.price_txt}>
                            Rating and Reviews
                          </h4>
                        </div>
                        <div className="row mt-5">
                          <div className="col-4">
                            <div className={style.blog_title}>
                              <p>5.0</p>
                            </div>
                            <div className={style.blog_star}>
                              <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                              </div>

                              <p>4,2556435</p>
                            </div>
                          </div>
                          <div className="col-8">
                            <div class="progress mb-3">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{
                                  width: "5%",
                                  backgroundColor: "#f1c71a",
                                }}
                                aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div class="progress mb-3">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{
                                  width: "25%",
                                  backgroundColor: "#f1c71a",
                                }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div class="progress mb-3">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{
                                  width: "50%",
                                  backgroundColor: "#f1c71a",
                                }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div class="progress mb-3">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{
                                  width: "75%",
                                  backgroundColor: "#f1c71a",
                                }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div class="progress mb-3">
                              <div
                                class="progress-bar"
                                role="progressbar"
                                aria-label="Basic example"
                                style={{
                                  width: "100%",
                                  backgroundColor: "#f1c71a",
                                }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>

                <div className="col-lg-6 col-sm-12">
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
                          {/* <DateRangeIcon /> */}
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
