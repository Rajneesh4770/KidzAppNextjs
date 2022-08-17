import style from '../../src/styles/Booking.module.css';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Slider from 'react-slick';
import { baseUrl } from '../config';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Booking = () => {
	const [data, setData] = useState();
	useEffect(() => {
		axios
			.get(
				baseUrl +
					'experiences/curated-list/?list_name=featured_kidzapp_deal&country_code=&page=2&page_size=1&city=&website=1',
			)
			.then((res) => {
				console.log(res.data.results);

				setData(res.data.results);
			});
	}, []);

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
											src="https://images.kidzapp.com/media/CACHE/images/venues/aabe2180-3cf2-46d8-9fb4-c231c3bd9a70/special-offer-kidzania-dubai.jpg"
										/>
										<img
											className={style.leftimg1}
											src="https://images.kidzapp.com/media/CACHE/images/venues/aabe2180-3cf2-46d8-9fb4-c231c3bd9a70/special-offer-kidzania-dubai.jpg"
										/>
									</Slider>
									{/* heading and button section row */}
									<div className="row">
										<div className="col-12">
											<div className={style.blog_title}>
												<h2>Special Offer: KidZania Dubai</h2>
												<div>
													{' '}
													<h4>AED 79</h4>
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
														style={{ color: '#19aff4', fontSize: '22px' }}
													></i>
												</span>
												&nbsp; &nbsp;
												<span>
													The Dubai Mall, Downtown, Downtown / Business Bay{' '}
												</span>
											</div>
											<div className="time pb-3">
												<span>
													<i
														className="fa-solid fa-clock"
														style={{ color: '#19aff4', fontSize: '22px' }}
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
												<div className="accordion-item">
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
															classNameroom.
														</div>
													</div>
												</div>
												<div className="accordion-item">
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
															<i
																className={`fa-solid fa-phone ${style.days}`}
															></i>
														</div>
														<div className={style.blog_title1}>
															<p className={style.blog_title2}>
																+971 45 61 6877
															</p>
														</div>
													</div>
													<div className="col-3">
														<div className={style.b_icon}>
															<i
																className={`fa-solid fa-globe ${style.days}`}
															></i>
														</div>
														<div className={style.blog_title1}>
															<p className={style.blog_title2}>Visit Website</p>
														</div>
													</div>
													<div className="col-3">
														<div className={style.b_icon}>
															<i
																className={`fa-solid fa-calendar-days ${style.days}`}
															></i>
														</div>
														<div className={style.blog_title1}>
															<p className={style.blog_title2}>View Schedule</p>
														</div>
													</div>
													<div className="col-3">
														<div className={style.b_icon}>
															<i
																className={`fa-solid fa-calendar-days ${style.days}`}
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
															<p className={style.startext}>5.0</p>
														</div>
														<div className={style.blog_star}>
															<div>
																<Rating
																	name="size-large"
																	defaultValue={5}
																	size="large"
																/>
															</div>

															<p style={{ fontSize: '18px' }}>4,2556435</p>
														</div>
													</div>
													<div className="col-8">
														<div className="progress mb-3">
															<div
																className="progress-bar"
																role="progressbar"
																aria-label="Basic example"
																style={{
																	width: '5%',
																	backgroundColor: '#f1c71a',
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
																	width: '25%',
																	backgroundColor: '#f1c71a',
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
																	width: '50%',
																	backgroundColor: '#f1c71a',
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
																	width: '75%',
																	backgroundColor: '#f1c71a',
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
																	width: '100%',
																	backgroundColor: '#f1c71a',
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
													Write the review{' '}
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
											</span>{' '}
											&nbsp; <span style={{ color: 'red' }}> AED 79</span>
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
											</span>{' '}
											&nbsp; <span style={{ color: 'red' }}> AED 179</span>
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
											</span>{' '}
											&nbsp; <span style={{ color: 'red' }}> AED 79</span>
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
