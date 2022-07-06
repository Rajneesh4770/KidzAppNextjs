import { style } from '@mui/system'
import React from 'react'
import style1 from '../styles/FindActivities.module.css'
function FindActivities() {
  const leftContainerCards = [
    {
      id: 1,
      image: "https://images.kidzapp.com/media/venues/0b3eba19-d27a-4de3-984d-e239e7b734a3/lotty-learns.jpg",
      cardTopPara: "Special Offer at Fun City - Century Mall",
      cardTitle: "Century Mall, Deira",
      buttonLeftText: "Be the first to review",
      bottomText: "Ages 3 - 9",
      bottomLeftText: "Distance:2102.5 KM",
      bottomRightText: "AED 99",
      buttonText: "Book Now",
      newDealImg: "https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg",
    },
    {
      id: 2,
      image: "https://images.kidzapp.com/media/venues/b2a65d39-7f64-46c8-a42f-f2c5db9f6323/cardboard-castle.JPG",
      cardTopPara: "Al Khazzan Park Dubai",
      cardTitle: "Al Safa Street, Jumeirah",
      buttonLeftText: "5.0",
      bottomText: "Ages 0 - 16",
      bottomLeftText: "Distance:2113.5 KM",
      // buttonText:'',
      newDealImg: "https://drfsb8fjssbd3.cloudfront.net/images/free-green.svg",
    },
    {
      id: 3,
      image: "https://images.kidzapp.com/media/venues/8ce1d8ce-bd53-46b2-9826-30c7cfcf4cd4/carnival-style-ball-toss.jpg",
      cardTopPara: "My Gym UAE",
      cardTitle: "My Gym UAE, Jumeirah",
      buttonLeftText: "5.0",
      bottomText: "Ages 0 - 10",
      bottomLeftText: "Distance:2115.5 KM",
      buttonText: "Book Now",
    },
    {
      id: 4,
      image: "https://images.kidzapp.com/media/venues/d6acdd36-7f6d-4997-822a-32d959b04136/cardboard-box-basketball.jpg",
      cardTopPara: "My Gym UAE",
      cardTitle: "My Gym UAE, Jumeirah",
      buttonLeftText: "5.0",
      bottomText: "Ages 0 - 10",
      bottomLeftText: "Distance:2115.5 KM",
      buttonText: "Book Now",
    },
  ];

  const rightContainerCards = [
    {
      id: 1,
      image: "https://images.kidzapp.com/media/CACHE/images/venues/676b1127-d76b-49a6-b063-6ac8995682e8/premier-padel-kids-academy.jpg",
      cardTitle: "Premier Padel Kids Academy",
      bottomLeftButtonText: "Be the first to review",
      bottomRightText: "AED 294",
      newDealImg: "https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg",
    },
    {
      id: 2,
      image: "https://images.kidzapp.com/media/CACHE/images/venues/f00d8c05-3490-4d30-bbfb-5f23295fa0fa/school-tours-at-clarion-school.jpg",
      cardTitle: "Freedom Pizza & More - Kids Catering by local",
      bottomLeftButtonText: "Be the first to review",
      bottomRightText: "AED 20",
    },
    {
      id: 3,
      image: "https://images.kidzapp.com/media/CACHE/images/venues/cf632c47-ef9d-45fa-a2da-e6739717a3d4/early-childhood-program-at-dunecrest-american-school.jpg",
      cardTitle: "Enhance Fitness",
      bottomLeftButtonText: "Be the first to review",
      bottomRightText: "AED 0",
      newDealImg: "https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg",
    },
  ];
  return (
    <>

    <div className={style1.marginFromHeader}>
      <section className={style1.filter}>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10">
              <div className="row leftContent">
                <div className={`col-md-2 ${style1.md2}`}>
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search 🔍"
                    aria-label="Search"
                  />
                </div>
                <div className="col-md-2">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="">City</option>
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                    <option>Ajman</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="">Area</option>
                    <option>All Area</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="">All Dates</option>
                    <option>Today</option>
                    <option>Weekend</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="">Category*</option>
                    <option>Spring Fun</option>
                    <option>Eat Out</option>
                    <option>Animal Fun</option>
                    <option>Play and Fun</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    disabled
                  >
                    <option value="">Sub Category</option>
                    <option>Spring Fun</option>
                    <option>Eat Out</option>
                    <option>Animal Fun</option>
                    <option>Play and Fun</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-2 rightContent">
              <button className={style1.btn1}>More Filter</button>
            </div>
          </div>
        </div>
      </section>

      <section className="searchResultSection py-3 container">
        <div className="row">
          <div className={`col-md-8 ${style1.leftcontainer}`}>
            <p className={`pb-1 ${style1.mainPara}`}>Search Results</p>
            <div className="col-md-12">
              {leftContainerCards.map((card) => {
                return (
                  <div key={card.id} className="card-items">
                    <div className={style1.card}>
                      <div className="row no-gutters">
                        <div className={`col-md-6 ${style1.imgSection}`}>
                          <img
                            src={card.image}
                            className="card-img"
                            alt="..."
                          />
                          <div
                            className={`${
                              !card.newDealImg ? "d-none" : style1.newdeal
                            }`}
                          >
                            <img
                              src={card.newDealImg}
                              alt=""
                              width="100"
                              height="100"
                              className={style1.newDealImg}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <p className={`card-top-para ${style1.cardtoppara}`}>{card.cardTopPara}</p>
                            <h6 className={style1.cardtitle}>{card.cardTitle}</h6>
                            <button className={`btn starRateButton absolute-center mb-2 ${style1.starRateButton}`}>
                              <img
                                className="mr-2"
                                src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                                alt="..."
                              />
                              <span className={style1.starspan}> {card.buttonLeftText}</span>
                            </button>
                            <h6 className={`card-text bottom-text mb-0 ${style1.buttotext}`}>
                              {card.bottomText}
                            </h6>
                            <div className="row">
                              <div className="col-md-6" align="left">
                                <h6>{card.bottomLeftText}</h6>
                              </div>
                              <div className="col-md-6" align="right">
                                <h6>{card.bottomRightText}</h6>
                              </div>
                            </div>
                            <button
                              className={`${
                                !card.buttonText ? "d-none" :  style1.bottomButton
                              }`}
                            >
                              {card.buttonText}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-4 rightContainer">
            <p className={`pb-1 ${style1.mainPara}`}>Featured</p>
            <div className="col-md-12">
              {rightContainerCards.map((card) => {
                return (
                  <div key={card.id} className={style1.carditems}>
                    <div className={style1.rightcard}>
                      <img
                        src={card.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div
                        className={`${
                          !card.newDealImg ? "d-none" : style1.newdeal
                        }`}
                      >
                        <img
                          src={card.newDealImg}
                          alt=""
                          width="100"
                          height="100"

                        />
                      </div>
                      <div className="card-body">
                        <p className={style1.rightcardtitle}>{card.cardTitle}</p>
                        <div className="row">
                          <div className="col-md-6" align="left">
                            <button className={`btn starRateButton absolute-center ${style1.rightstarRateButton}`}>
                              <img
                                className="mr-2"
                                src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                                alt="..."
                              />
                              <span className={style1.rightspan}> {card.bottomLeftButtonText}</span>
                            </button>
                          </div>
                          <div className="col-md-6" align="right">
                            <h6>{card.bottomRightText}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default FindActivities