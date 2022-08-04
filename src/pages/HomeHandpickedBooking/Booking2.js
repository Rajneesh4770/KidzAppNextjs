import react,{useState} from 'react'
import style from "../../styles/Homehandpickedbooking/Booking.module.css";
import Router from "next/router";
import Link from "next/link";
import { Button } from "@mui/material";
import Slider from "react-slick";
import { Rating, TextField } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../Redux/index'
import { decrementAdult, incrementAdult } from '../../Redux/index'

const Booking = () => {
    // const count = useSelector((state) => state.counter.value)
    // const count2 =useSelector((state) => state.counterAdult.value1)
    // const dispatch = useDispatch()
  
    const [date,setDate] = useState(false);
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
                                        <img className={style.leftimg1} src="https://images.kidzapp.com/media/CACHE/images/venues/aabe2180-3cf2-46d8-9fb4-c231c3bd9a70/special-offer-kidzania-dubai.jpg" />
                                        <img className={style.leftimg1} src="https://images.kidzapp.com/media/CACHE/images/venues/aabe2180-3cf2-46d8-9fb4-c231c3bd9a70/special-offer-kidzania-dubai.jpg" />
                                    </Slider>
                                    {/* heading and button section row */}
                                    <div className="row">
                                        <div className="col-12">
                                            <div className={style.blog_title}>
                                                <h2>Special Offer: KidZania Dubai</h2>
                                            </div>
                                            <h5>Theme Parks, Fun & Play</h5>
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
                                                <span>The Dubai Mall, Downtown, Downtown / Business Bay </span>
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
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Description
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            Spend the day at a temperature controlled indoor aqua park, complete with eight slide beams, waterfall buckets, forest and more for your little splashers. Your boys and girls are
                                                            sure to love it, and it's a fantastic spot for you and your kiddos to play and stay cool all year round.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Information
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <p>- The entry ticket allows you access for up to 2.5 hours max.</p>
                                                            <p>- Kids under 5 need to be accompanied by an adult.</p>
                                                            <p>- This offer is notimport  valid on public holidays.</p>
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
                                                    <h4 className={style.price_txt}>Rating and Reviews</h4>
                                                </div>
                                                <div className="row mt-5">
                                                    <div className="col-4">
                                                        <div className={style.blog_title}>
                                                            <p>5.0</p>
                                                        </div>
                                                        <div className={style.blog_star}>
                                                            <div>
                                                                <Rating name="size-large" defaultValue={5} size="large" />
                                                            </div>

                                                            <p style={{ fontSize: "18px" }}>4,2556435</p>
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
                                          <div className="row mt-4">
                                            <div className="col-lg-12">
                                                <div className={style.rightsectiondiv}>
                                                    <p className={` m-0 ${style.datetimecontent}`}>Select Desired Date & Time</p>
                                                    <button className={style.schedulebutton}>
                                                        <span className={`${style.blogSpan} ${style.blog_age}`}>
                                                            <i class="fa-solid fa-calendar-days"></i> &nbsp; View Schedule
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-lg-6">
                                                <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                                                    <input placeholder="Select date " type="date" id="example" class="form-control" onChange={(e)=>{setDate(e)}}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6"></div>
                                        </div>
                                    {date ? 
                                    <>
                                        <div className="row mt-4">
                                            <div className="col-lg-12">
                                                <div className={style.payApp}>
                                                    <p className="m-0">
                                                        <b>Pay through App:</b> Convenient payment through Kidzapp
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-12">
                                                <div className={style.selectPrice}>
                                                    <p>Select Number of People</p>
                                                    <h4>2.5 Hour Access</h4>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12  mb-3">
                                                        <div className={style.pWrap}>
                                                            <div className={`  ${style.pName}`}>
                                                                <p className={` m-0 ${style.ptext}`}>Child (5yrs+)</p>
                                                                <span>Per child</span>
                                                            </div>
                                                            <div className={`  ${style.pInput}`}>
                                                                <input type="button" className={style.decrement_btn} value="-"  id="decrement-btn5114" />
                                                                <input
                                                                    type="text"
                                                                    name="adPrice1"
                                                                    id="people-count5114"
                                                                    className={style.people_count}
                                                                    value='0'
                                                                    data-type="Unicorn Box"
                                                                    data-max="5"
                                                                    data-price="0.1"
                                                                    data-currency="AED"
                                                                    required=""
                                                                    readonly=""
                                                                />
                                                                <input type="button" className={style.increment_btn} value="+"  id="increment-btn5114" />
                                                            </div>
                                                            <div className={`  ${style.pName}`}>
                                                                <p className={` m-0 ${style.ptext}`}>AED 0.00</p>
                                                                <span>
                                                                    <s>AED 95</s>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-12 mb-3">
                                                        <div className={style.pWrap}>
                                                            <div className={`  ${style.pName}`}>
                                                                <p className={` m-0 ${style.ptext}`}>Adult</p>
                                                                <span>Per person</span>
                                                            </div>
                                                            <div className={`  ${style.pInput}`}>
                                                                <input type="button" className={style.decrement_btn} value="-"  id="decrement-btn5114" />
                                                                <input
                                                                    type="text"
                                                                    name="adPrice1"
                                                                    id="people-count5114"
                                                                    className={style.people_count}
                                                                    value='0'
                                                                    data-type="Unicorn Box"
                                                                    data-max="5"
                                                                    data-price="0.1"
                                                                    data-currency="AED"
                                                                    required=""
                                                                    readonly=""
                                                                />
                                                                <input type="button" className={style.increment_btn} value="+" onClick={() => dispatch(increment())} id="increment-btn5114" />
                                                            </div>
                                                            <div className={`${style.pName}`}>
                                                                <p className={` m-0 ${style.ptext}`}>AED 0.00</p>
                                                                <span>
                                                                    <s>AED 95</s>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-12 mb-3">
                                                        <div className={style.pWrap}>
                                                            <div className={`  ${style.pName}`}>
                                                                <p className={` m-0 ${style.ptext}`}>Under 5yrs +</p>
                                                                <span>1 Adult</span>
                                                            </div>
                                                            <div className={` ${style.pInput}`}>
                                                                <input type="button" className={style.decrement_btn} value="-" onClick={() => dispatch(decrement())} id="decrement-btn5114" />
                                                                <input
                                                                    type="text"
                                                                    name="adPrice1"
                                                                    id="people-count5114"
                                                                    className={style.people_count}
                                                                    value='0'
                                                                    data-type="Unicorn Box"
                                                                    data-max="5"
                                                                    data-price="0.1"
                                                                    data-currency="AED"
                                                                    required=""
                                                                    readonly=""
                                                                />
                                                                <input type="button" className={style.increment_btn} value="+" onClick={() => dispatch(increment())} id="increment-btn5114" />
                                                            </div>
                                                            <div className={` ${style.pName}`}>
                                                                <p className={` m-0 ${style.ptext}`}>AED 0.00</p>
                                                                <span>
                                                                    <s>AED 95</s>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-4">
                                                    <div className="col-lg-12">
                                                        <div className={`${style.payApp} ${style.payApp1}`}>
                                                            <p className={` m-0 ${style.ptext}`}>
                                                                <b>Total Booking Fee</b>
                                                            </p>
                                                            <p className={` m-0 ${style.ptext}`}>
                                                                <b>AED 0.00</b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </>
: <div></div>}
                                        <div className="row mt-4">
                                            <div className="col-lg-12">
                                                <div className={`${style.payApp} ${style.payApp1} ${style.payApp2}`}>
                                                    <p className={` m-0 ${style.ptext} `}>
                                                        <b>Total Price:</b>
                                                    </p>
                                                    <p className={` m-0 ${style.ptext}`}>
                                                        <b>AED 0.00</b>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className="row mt-4">
                                            <div className="col-12">
                                                <div class="form-outline">
                                                    <TextField id="demo-helper-text-misaligned-no-helper " multiline rows={4} fullWidth label="Special Request :" />
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className="row mt-4">
                                            <div className="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label mb-3" for="flexCheckDefault">
                                                        I agree to the
                                                        <Link href="/FooterPages/PrivacyPolicy">
                                                            <span className={style.checkboxlink}> term & conditions </span>
                                                        </Link>
                                                        , and to the below aditional term.
                                                    </label>
                                                    <p>- This offer is not valid on public holidays</p>
                                                    <p>- Additional adult is charged at AED 50 per person</p>
                                                    <p>- Pre-booking is required. Call venue ahead to confirm booking date.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <Button variant="contained" className={style.submitbtn}>
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
            </section>
        </>
    );
};

export default Booking;
