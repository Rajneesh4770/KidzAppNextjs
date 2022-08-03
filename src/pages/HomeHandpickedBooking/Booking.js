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
                <div className="col-lg-8 col-sm-12">
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
                        <h4>AED 79</h4>
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
                              KidZania is an activity-packed indoor city where
                              learning and play collide for a day out your
                              children will never forget. The 7,000m² scaled
                              replica of a real city combines entertainment and
                              education, with over 60 real-life activities for
                              children aged 4-16. Your children will discover
                              and learn all about different jobs through
                              exciting role-play, while developing
                              decision-making, teamwork, creativity and social
                              skills in ways that can't be taught in a
                              classroom.
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
                              KNOW BEFORE YOU GO ----- Children under 120cm need
                              to be accompanied by a guardian 18 years or over.
                              Though your kids from 6 months old and up can
                              enter KidZania, most activities are most suitable
                              for children 3 years old and above.
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
                            Special Offer: KidZania Dubai - Prices and Offers
                          </h4>
                        </div>
                        <div className="row mt-5">
                          <div className="col-6">
                            <h5>General Admission Tickets</h5>
                            <div className={style.blog_title}>
                              <p>Special Offer: KidZania Dubai</p>
                              <p>
                                <b>AED 79</b>
                              </p>
                            </div>
                            <div className={style.blog_title}>
                              <p>Special Offer: KidZania Dubai</p>
                              <p>
                                <b>AED 79</b>
                              </p>
                            </div>
                          </div>
                          <div className="col-6">
                            <h5>General Admission Tickets</h5>
                            <div className={style.blog_title}>
                              <p>Special Offer: KidZania Dubai</p>
                              <p>
                                <b>AED 79</b>
                              </p>
                            </div>
                            <div className={style.blog_title}>
                              <p>Special Offer: KidZania Dubai</p>
                              <p>
                                <b>AED 79</b>
                              </p>
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
                            Special Offer: KidZania Dubai Location
                          </h4>
                        </div>
                        <div className="row mt-5">
                          <div className="col-3">
                            <div className={style.b_icon}>
                              <i class={`fa-solid fa-phone ${style.days}`}></i>
                            </div>
                            <div className={style.blog_title1}>
                              <p className={style.blog_title2}>
                                +971 45 61 6877
                              </p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className={style.b_icon}>
                              <i class={`fa-solid fa-globe ${style.days}`}></i>
                            </div>
                            <div className={style.blog_title1}>
                              <p className={style.blog_title2}>Visit Website</p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className={style.b_icon}>
                              <i
                                class={`fa-solid fa-calendar-days ${style.days}`}
                              ></i>
                            </div>
                            <div className={style.blog_title1}>
                              <p className={style.blog_title2}>View Schedule</p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className={style.b_icon}>
                              <i
                                class={`fa-solid fa-calendar-days ${style.days}`}
                              ></i>
                            </div>
                            <div className={style.blog_title1}>
                              <p className={style.blog_title2}>
                                Add to Calendar
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <iframe
                        className={style.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.6508954631!2d54.947304054493955!3d25.075759470320165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1659527885129!5m2!1sen!2sin"
                      ></iframe>
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

                  <div className="row mt-5">
                    <div className="col-12">
                      <div className={style.blog_title}>
                        <h2>Get 30% off your General Admission tickets!</h2>
                        <button className={style.blog_rating}>
                          Write the review{" "}
                        </button>
                      </div>
                      <div className={style.blog_title}>
                        <h5>Get 30% off your General Admission tickets!</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                  <div className={style.socialicondiv}>
                    <center>
                      <h5 className={`mt-3 ${style.iconheading}`}>
                        Share experience
                      </h5>
                    </center>
                    <div className={style.socialicon}>
                      <Link href="https://www.facebook.com/kidzappAE/">
                        <h4>
                          <FacebookIcon className={style.icon} />
                        </h4>
                      </Link>
                      <Link href="/https://twitter.com/intent/tweet?text=&url=https://testlink.kidzapp.com/Gu2I8OYJ9rb">
                        <h4>
                          <TwitterIcon className={style.icon} />
                        </h4>
                      </Link>
                      <Link href="https://www.instagram.com/accounts/login/?next=/kidzappuae/">
                        <h4>
                          <InstagramIcon className={style.icon} />
                        </h4>
                      </Link>
                      <Link href="https://api.whatsapp.com/send?phone=971566578854&text=Hi%2C+I%27m+browsing+home+screen+and+have+some+questions">
                        <h4>
                          <WhatsAppIcon className={style.icon} />
                        </h4>
                      </Link>
                    </div>
                  </div>
                  {/* right cards */}

                  <div className={`card mt-5 ${style.card}`}>
                    <img
                      src="https://testimages.kidzapp.com/media/venues/48f0fe2b-65ab-48d9-8dd8-845227c7d5a8/the-ice-factory.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">The Ice factory</h5>

                      <h6 className={`card-title ${style.secondheading}`}>
                        The Walk Jbr
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </>
  );
};

export default Booking;
