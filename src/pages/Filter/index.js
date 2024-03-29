import { useState, useEffect, useTransition } from "react";
import style1 from "./Filter.module.css";
import { Rating, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import axios from 'axios';
import { baseUrl } from '../../config';

function FindActivities() {
	const [loader, setLoader] = useState(false);
	const [data, setData] = useState([]);
	const [pageindex, setPageindex] = useState(9);
	const [scroll, setScroll] = useState(400);
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('');
	const [categories, setCategories] = useState([]);
	const [cities, setCities] = useState([]);
	const [city, setCity] = useState('');
	const [areas, setAreas] = useState([]);
	const [area, setArea] = useState('');
	const [subcategories, setSubCategories] = useState([]);
	const [subcategory, setSubCategory] = useState('');
	const [isPending, loaderHandler] = useTransition();
	const [venue, setVenue] = useState(false);
	const [course, setCourse] = useState(false);
	const [event, setEvent] = useState(false);
	const [indoor, setIndoor] = useState(false);
	const [outdoor, setOutdoor] = useState(false);

	useEffect(() => {
		const scrolling = (event) => {
			if (window.scrollY > scroll) {
				setPageindex(pageindex + 4);
				setScroll(scroll + 400);
				console.log('hello', pageindex);
			}
			console.log(window.scrollY, 'scroll');
		};
		window.addEventListener('scroll', scrolling, false);
		return () => window.removeEventListener('scroll', scrolling, false);
	}, [scroll]);

	const [dataright, setDataright] = useState([]);

	useEffect(() => {
		axios
			.get(
				baseUrl +
					`experiences/?country_code=ae&page=1&page_size=${pageindex}${
						search ? `&search=${search}` : ``
					}${city ? `&city_id=${city}` : ``}${area ? `&area_id=${area}` : ``}${
						category ? `&category=${category}` : ``
					}${subcategory ? `&subcategory=${subcategory}` : ``}${
						venue ? `&type=venue` : ``
					}${course ? `&type=course` : ``}${event ? `&type=event` : ``}
					${indoor ? `&venue_type=indoor` : ``}${outdoor ? `&venue_type=outdoor` : ``}`,
			)
			.then((res) => {
				console.log('findActivity page search result', res.data.results);
				loaderHandler(() => setData(res.data.results));
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(
				`https://api2.kidzapp.com/api/3.0/experiences/curated-list/?country_code=ae&page=1&list_name=featured&searchQuery=%22%22 &${
					search ? `&search=${search}` : ``
				}${city ? `&city_id=${city}` : ``}${area ? `&area_id=${area}` : ``}${
					category ? `&category=${category}` : ``
				}${subcategory ? `&subcategory=${subcategory}` : ``} `,
			)
			.then((res) => {
				console.log('findActivity page right section', res.data.results);
				setDataright(res.data.results);
				setLoader(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [
		search,
		pageindex,
		category,
		city,
		area,
		subcategory,
		venue,
		course,
		event,
		indoor,
		outdoor,
	]);

	useEffect(() => {
		axios
			.get('https://api2.kidzapp.com/api/1.9/categories?country_code=ae')
			.then((res) => {
				setLoader(true);
				setCategories(res.data);
			});
		axios.get('https://api2.kidzapp.com/api/1.9/cities').then((res) => {
			console.log(res.data.results, 'jbnknikninh');
			setLoader(true);
			setCities(res.data);
		});
		axios.get('https://api2.kidzapp.com/api/1.9/areas').then((res) => {
			console.log(res.data.results, 'jbnknikninh');
			setLoader(true);
			setAreas(res.data);
		});
		console.log(cities, 'kuyguygu');
		axios.get('https://api2.kidzapp.com/api/1.9/areas').then((res) => {
			console.log(res.data.results, 'jbnknikninh');
			setLoader(true);
			setSubCategories(res.data);
		});
	}, []);

	return (
		<>
			{/*  button list */}
			<div className={style1.marginFromHeader}>
				<section className={style1.filter}>
					<div className="container py-4">
						<div className="row">
							<div className="col-md-10 sm-6">
								<div className="row leftContent">
									<div className={`col-md-2 col-sm-2 ${style1.md2}`}>
										<input
											className="form-control mr-sm-2"
											type="search"
											id="myInput"
											placeholder="Search"
											onChange={(e) => setSearch(e.target.value)}
											aria-label="Search"
										/>
									</div>
									<div className="col-md-2 sm-2">
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											onChange={(e) => setCity(e.target.value)}
										>
											<option value="">City</option>

											{cities.map((list) => {
												return <option value={list.id}>{list.name}</option>;
											})}
										</select>
									</div>
									<div className="col-md-2 sm-6">
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											onChange={(e) => setArea(e.target.value)}
										>
											<option value="">Area</option>
											{areas.map((list) => {
												return <option value={list.id}>{list.name}</option>;
											})}
										</select>
									</div>
									<div className="col-md-2 sm-6">
										<input
											className="form-control date"
											type="date"
											id="exampleFormControlSelect1"
										></input>
									</div>
									<div className="col-md-2 sm-6">
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											onChange={(e) => {
												setCategory(e.target.value);
											}}
										>
											<option value="">Category</option>

											{categories.map((list) => {
												return <option value={list.id}>{list.name}</option>;
											})}
										</select>
									</div>
									<div className="col-md-2 sm-6">
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											disabled
											onChange={(e) => {
												setSubCategory(e.target.value);
											}}
										>
											<option value="">Sub Category</option>

											{subcategories.map((list) => {
												return <option>{list.name}</option>;
											})}
										</select>
									</div>
								</div>
							</div>
							<div className="col-md-2 sm-6 rightContent">
								<button
									className={style1.btn1}
									data-bs-toggle="collapse"
									href="#collapseExample"
									role="button"
									aria-expanded="false"
									aria-controls="collapseExample"
								>
									More Filter
								</button>
							</div>
						</div>
						<div className="collapse" id="collapseExample">
							<div className="container">
								<div
									className={`row mt-2 p-2  rounded d-flex ${style1.collapserow}`}
								>
									<div className="col-lg-3 md-6">
										<div className={style1.collapsediv1}>
											<span>AgeRange*</span>
											<select
												className={`form ${style1.selectbox} text-secondary`}
												aria-label="Default select example"
											>
												<option selected>From</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
											</select>
											<select
												className={`form ${style1.selectbox} text-secondary`}
												aria-label="Default select example"
											>
												<option selected>To</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
											</select>
										</div>
									</div>

									<div className="col-lg-4 md-6">
										<div className={`${style1.collapsediv2} `}>
											<span>Type*</span>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													checked={venue}
													onChange={() => {
														setVenue((x) => !x);
													}}
													id="flexCheckDefault"
												/>
												<label
													className="form-check-label text-secondary"
													for="flexCheckDefault"
												>
													Venue
												</label>
											</div>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													checked={course}
													onChange={() => {
														setCourse((x) => !x);
													}}
													id="flexCheckChecked"
												/>
												<label
													className="form-check-label text-secondary"
													for="flexCheckChecked"
												>
													Courses
												</label>
											</div>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													checked={event}
													onChange={() => {
														setEvent((x) => !x);
													}}
													id="flexCheckChecked"
												/>
												<label
													className="form-check-label text-secondary"
													for="flexCheckChecked"
												>
													Event
												</label>
											</div>
										</div>
									</div>

									<div className="col-lg-3 ">
										<div className={`${style1.collapsediv2} `}>
											<span>VenueType*</span>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													checked={indoor}
													onChange={() => {
														setIndoor((x) => !x);
													}}
													id="flexCheckDefault"
												/>
												<label
													className="form-check-label text-secondary"
													for="flexCheckDefault"
												>
													Indoor
												</label>
											</div>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													checked={outdoor}
													onChange={() => {
														setOutdoor((x) => !x);
													}}
													id="flexCheckChecked"
												/>
												<label
													className="form-check-label text-secondary"
													for="flexCheckChecked"
												>
													Outdoor
												</label>
											</div>
										</div>
									</div>

									<div className="col-lg-2 ">
										<div className={`${style1.collapsediv4} `}>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													value=""
													id="flexCheckDefault"
												/>
												<img src="https://drfsb8fjssbd3.cloudfront.net/images/free-green.svg"></img>
											</div>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													value=""
													id="flexCheckChecked"
												/>
												<img src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"></img>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						</div>
						</section>

        {/* search result section */}
        <section className="searchResultSection py-3 container">
          <div className="row">
            <div className={`col-md-8 ${style1.leftcontainer}`}>
              <p className={`pb-1 ${style1.mainPara}`}>Search Results</p>
              <div className="col-md-12">
                {isPending ||
                  (!data.length && (
                    <Stack
                      sx={{
                        alignItems: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      spacing={2}
                      direction="row"
                    >
                      <CircularProgress
                        color="success"
                        sx={{
                          alignItems: "center",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                    </Stack>
                  ))}
                {data &&
                  data?.map((card) => {
                    return (
						<Link href={`/exprience-detail?&filterid=${card.id}`}>
                      <div key={card.id} className="card-items">
                        <div className={style1.card}>
                          <div className="row no-gutters">
                            <div className={`col-md-6 ${style1.imgSection}`}>
                              <img
                                src={card.image_url}
                                className={`card-img ${style1.cardImg}`}
                                alt="..."
                              />
                              <div
                                className={`${
                                  !card.newDealImg ? "d-none" : style1.newdeal
                                }`}
                              >
                                <img
                                  src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                                  alt=""
                                  width="100"
                                  height="100"
                                  className={style1.newDealImg}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="card-body">
                                <p
                                  className={`card-top-para ${style1.cardtoppara}`}
                                >
                                  {card.name}
                                </p>
                                <h6 className={style1.cardtitle}>
                                  {card.address}
                                </h6>
                                <Rating
                                  name="rating"
                                  defaultValue={card.average_rating}
                                />
                                <br />
                                <span
                                  className={`card-text bottom-text mb-0 ${style1.bottomtext}`}
                                >
                                  Ages: &nbsp;
                                  {card.ages_display[0]} -{" "}
                                  {
                                    card.ages_display[
                                      card.ages_display.length - 1
                                    ]
                                  }
                                </span>
                                <div className="row">
                                  <div className="col-md-6" align="left">
                                    <h6>
                                      Distance:{" "}
                                      <span className={style1.distance}>
                                        2100 KM
                                      </span>{" "}
                                      {card.bottomLeftText}
                                    </h6>
                                  </div>
                                  <div className="col-md-6" align="right">
                                    <h6>{card.bottomRightText}</h6>
                                  </div>
                                </div>
                                {card.bookable? 
                                <>
                                <Link href={card.website}>
                                 <Button
                                 size="small"
                                 variant="outlined"
                                 color="error"
                                 className={`${style1.bottomButton}`}
                               >
                                
                                 {card.booking_button.text}
                               </Button></Link></>:null
                              }
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div></Link>
                    );
                  })}
              </div>
            </div>
                                      {/* right side  cards */}

            <div className="col-md-4 rightContainer">
              <p className={`pb-1 ${style1.mainPara}`}>Featured</p>
              <div className="col-md-12">
                {dataright?.map((card) => {
                  return (
                    <div key={card.id} className={style1.carditems}>
                      <Link href='/Booking'>
                      <div className={style1.rightcard}>
                        <img
                          src={card.image_url}
                          className="card-img-top"
                          alt="..."
                        />
                        <img
                    src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                    className={style1.dealimg}
                  />
                        <div className="card-body">
                          <p className={style1.rightcardtitle}>{card.address}</p>
                          <div className="row">
                            <div className="col-md-6" align="left">
                              <Rating
                                name="read-only"
                                value={card.average_rating}
                                readOnly
                              />
                            </div>
                            <div className="col-md-6" align="right">
                              <h6>{card.bottomRightText}</h6>
                            </div>
                          </div>
                        </div>
                      </div></Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>	
		</>
	);
}

export default FindActivities;
