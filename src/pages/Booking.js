import style from "../../src/styles/Booking.module.css";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Rating } from "@mui/material";
import { baseUrl } from "../config";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import Slider from "react-slick";

const Booking = (props) => {
  console.log("data", props.data);
  const AnyReactComponent = () => (
    <FaMapMarkerAlt className="fa-4x" style={{ color: "red" }} />
  );
  const Setting = {
	dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      {/* {props.data.map((props.data) => { */}

      {/* return ( */}

      <section className={style.section1} key={props.data.id}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* image section column */}

              <div className="row">
                <div className="col-lg-8 col-sm-12">
                  <img className={style.leftimg1} src={props.data.image_url} />

					<div className="row">

				  <Slider className="imagesliderofbooking" {...Setting}>
					{props.data.image_carousel_alt_list?.map((crouselimage)=>(
						<div className="container" key={crouselimage.id}>
					<img className={style.cruselimage} src={crouselimage.image_url} alt=''></img>
					</div>
					))}
					</Slider>
					</div>
                  {/* heading and button section row */}

                  <div className="row">
                    <div className="col-12">
                      <div className={style.blog_title}>
                        <h2>{props.data.title}</h2>
                        <div>
                          <Link href="/Booking2">
                            <button className={style.blog_rating}>
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </div>

                      <p>Theme Parks, Fun & Play</p>
                      <div className={style.blog_btn}>
                        <span
                          className={`${style.blogSpan} ${style.blog_rating}`}
                        >
                          <i className="fa-solid fa-star"></i>&nbsp; 4.5
                        </span>
                        <span className={`${style.blogSpan} ${style.blog_age}`}>
                          <i className="fa-solid fa-calendar-days"></i> &nbsp;
                          Ages4 - Adults
                        </span>
                        <span className={`${style.blogSpan} ${style.blog_cat}`}>
                          <i className="fa-solid fa-child"></i> &nbsp; Kids Only
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* second row in col-6 */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="location pt-3 pb-3">
                        <span>
                          <i
                            className="fa-solid fa-location-dot"
                            style={{ color: "#19aff4", fontSize: "22px" }}
                          ></i>
                        </span>
                        &nbsp; &nbsp;
                        <span>{props.data.address}</span>
                      </div>
                      <div className="time pb-3">
                        <span>
                          <i
                            className="fa-solid fa-clock"
                            style={{ color: "#19aff4", fontSize: "22px" }}
                          ></i>
                        </span>
                        &nbsp; &nbsp;
                        <span>Daily 10:00 to 22:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-props.data">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
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
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              {props.data.description}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-props.data">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
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
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
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
                    {props.data.price?.filter((item,index,items) => items.findIndex(({header})=>header==item.header)==index).map((item)=>
                      <div className="col-12">
                        <div className={style.price_offer}>
                          <div className={style.price_title}>
                            <h4 className={style.price_txt}>{item.header}</h4>
                            <p>{item.description}</p>
                          </div>

                          <div className="container">
                            <div className="row mt-2">
                              <div className="col-12">
                                {item.header}
                                  {props.data.price
                                    .filter((obj) => obj.header == item.header)
                                    ?.map((sub_item) => (
                                      <>
                                <div className={style.blog_title}>

                                        <p>{sub_item.type_en}({item.small_text_type})</p>
                                        <p>
                                          <b>
                                            {sub_item.currency}
                                            {sub_item.final_price}
                                          </b>
                                        </p>
										</div>

                                      </>
                                    ))}
                                </div>
								<Link href='/Booking2'>
								<button className={style.pricebutton}>Book Now</button></Link>
                              </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="row">
                    <div
                      className="col-12"
                      style={{ height: "100vh", width: "100%" }}
                    >
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          key: "AIzaSyBHxrllImC2OFUSQs5biR8aeR4SZOkRfJQ",
                          language: "en",
                          libraries: ["visualization"],
                        }}
                        defaultCenter={{
                          lat: props.data.location.lat,
                          lng: props.data.location.lon,
                        }}
                        yesIWantToUseGoogleMapApiInternals
                        defaultZoom={15}
                      >
                        <AnyReactComponent
                          lat={props.data.location.lat}
                          lng={props.data.location.lon}
                          text="My Marker"
                        />
                      </GoogleMapReact>
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
                          <div className="col-lg-4 sm-12">
                            <div className={style.blog_title}>
                              <p className={style.startext}>{props.data.average_rating}</p>
                            </div>
                            <div className={style.blog_star}>
                              <div>
                                <Rating
                                  name="size-large"
                                  defaultValue={props.data.average_rating}
                                  size="large"
                                />
                              </div>

                              <p style={{ fontSize: "18px" }}>4,2556435</p>
                            </div>
                          </div>
                          <div className="col-lg-8 sm-12">
                            <div className="progress mb-3">
                              <div
                                className="progress-bar"
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
                            <div className="progress mb-3">
                              <div
                                className="progress-bar"
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
                            <div className="progress mb-3">
                              <div
                                className="progress-bar"
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
                            <div className="progress mb-3">
                              <div
                                className="progress-bar"
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
                            <div className="progress mb-3">
                              <div
                                className="progress-bar"
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
                      <Link href="https://twitter.com/intent/tweet?text=&url=https://testlink.kidzapp.com/Gu2I8OYJ9rb">
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
                      className={`card-img-top ${style.cardimg}`}
                      src="https://images.kidzapp.com/media/venues/d7535285-797c-4114-a306-164a81d648de/kidzania-dubai.jpeg"
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
                  <div className={`card mt-5 ${style.card}`}>
                    <img
                      className={`card-img-top ${style.cardimg}`}
                      src="https://images.kidzapp.com/media/venues/9ed313e0-d392-4668-b191-6744431127ad/fiafia-kids-play-and-cafe.jpg"
                      alt="..."
                    />
                    <img
                      src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg"
                      className={style.cardimg2}
                    />
                    <div className="card-body">
                      <h5 className="card-title">TFiafia Kids Play and Cafe</h5>
                      <h6 className={`card-title ${style.secondheading} pt-2`}>
                        round Level, Gate Avenue, DIFC, Dubai
                      </h6>
                      <span>
                        <del>AED 199</del>
                      </span>{" "}
                      &nbsp; <span style={{ color: "red" }}> AED 179</span>
                    </div>
                  </div>
                  <div className={`card mt-5 ${style.card}`}>
                    <img
                      className={`card-img-top ${style.cardimg}`}
                      src="https://images.kidzapp.com/media/venues/f90a429a-9b22-4348-a28a-38db0c223941/rage-store-skate-bowl.jpg"
                      alt="..."
                    />
                    <img
                      src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg"
                      className={style.cardimg2}
                    />

                    <div className="card-body">
                      <h5 className="card-title">Rage Store & Skate Bowl</h5>
                      <h6 className={`card-title ${style.secondheading} pt-2`}>
                        The Dubai Mall
                      </h6>
                      <span>
                        <del>AED 99</del>
                      </span>{" "}
                      &nbsp; <span style={{ color: "red" }}> AED 79</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ); */}
      {/* })} */}
    </>
  );
};
export async function getServerSideProps(context) {
  const id = context.query.id;
  console.log("id", id);
  // let res = await axios.get(baseUrl+`experiences/${id}/?country_code=ae`);
  let res = await axios.get(
    `https://api.kidzapp.com/api/3.0/experiences/111992/?country_code=ae`
  );
  console.log(res.data);
  let props = {
    data: res.data,
  };

  return { props };
}

export default Booking;
