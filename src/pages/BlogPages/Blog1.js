import React from "react";
import style from "../../styles/BlogPages/BlogPage1.module.css";
const Blog1 = () => {
  const data = [
    {
      id: 1,
      mainHeading: "BOUNCE Summer Offer",
      detail:
        "Bounce over to Bounce (excuse the pun) to enjoy their Summer Offer on their best-selling ticket: the 2-Hour Superpass.",
      explanation:
        "The offer is valid until August 31 and at all Bounce locations in Dubai & Abu Dhabi. It includes a FREE large pizza with the purchase of the 2-hour Superpass for just AED 120! ",
      cardImg:
        "https://images.kidzapp.com/media/CACHE/images/venues/d40837f4-9b9e-436b-8730-e0cec1a1f421/bounce-x-summer-offer.jpeg",
      location: "BOUNCE",
      workingHours: "Sun-Thu 10:00 to 23:00, Fri-Sat until 00:00",
      prices: "1 Child : AED 120",
    },
    {
      id: 2,
      mainHeading: "Up to 20% off Entry at Air Maniax",
      detail:
        "Air Maniax is the ultimate fun-filled destination that has something for everyone!",
      explanation:
        "The venue is over 23,000 square feet and offers 6 interactive zones, so you can have a laugh at the inflatables arena, compete against each other in the multi-level warrior assault arena, experience what it's like to fly as you zip-line, navigate through a maze of lasers, or have some fun in the dedicated toddler area. ",
      text: "Enjoy up to 20% OFF Entry Tickets at Air Maniax Dubai & Abu Dhabi!",
      cardImg:
        "https://images.kidzapp.com/media/CACHE/images/venues/2f6f9b2e-39be-4a29-8219-1c284fe8c9aa/up-to-20-off-entry-at-air-maniax-dubai.jpg",
      location: "Air Maniax, Al Quoz",
      workingHours: "Mon-Fri 9:00 to 22:00, Sat-Sun from 10:00",
      prices: "1hr General Access : AED 85 ",
    },
    {
      id: 3,
      mainHeading: "TR88HOUSE Family Entertainment Center",
      explanation:
        "This family entertainment hub is sure to get both big and small excited with the likes of glow-in-the-dark mini golf, a bioluminescent laser tag jungle, a thrilling trampoline park, a soft play haven for the little ones - and a food hall, on-site, to satisfy every tummy. The place is basically 65,000 sqft of family fun- so it has it all! ",
      text: "Get 10% OFF all Fun and Play.",
      cardImg:
        "https://images.kidzapp.com/media/CACHE/images/venues/66183f7e-210b-4874-94ba-8a52a884f37a/tr88house-family-entertainment-center.jpeg",
      location: "No. EB1, Entrance 8 - Bluewaters Island - Dubai",
      workingHours: "Daily from 10:00 (see details in description)",
      prices: "Skyfall Trampoline",
    },
    {
      id: 4,
      mainHeading: "Aqua Parks Leisure",
      detail:
        "Aqua Parks Leisure is a hidden gem located on Kite Beach - Dubai's first fresh water swimming pool waterpark! ",
      explanation:
        "It features over 21 different activities for families to enjoy from, frog jumps to monkey bars, and much much more! You and your kids will be splashing and giggling for hours.",
      text: "Enjoy a great offer with over 15% OFF Entry Tickets OR Buy 1 Hour Get 1 Hour FREE on weekdays!",
      cardImg:
        "https://images.kidzapp.com/media/CACHE/images/venues/06f03fbd-c981-4351-b1e1-53faba1ecf0e/aqua-parks-leisure.jpeg",
      location: "Kite Beach, Umm Suqqueim 2, Dubai",
      workingHours: "Daily 08:30 to sunset",
      prices: "1 Hour + 1 Hour FREE : AED 60",
    },
  ];

  return (
    <>
      <section className={style.blog1}>
        <div className={style.searchAndBanner}>
          <div className={`container ${style.container}`}>
            <div className={`row `}>
              <div className={`col-md-12`}>
                <div className={`searchButton d-flex`}>
                  <input
                    type="text"
                    name=""
                    className={`form-control ${style.searchInput}`}
                    placeholder="🔍 Type here to search video"
                  />
                  <button className={`btn ${style.searchBtn}`}>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mainContentSection">
          <button className={`btn px-0 my-3 ${style.goBackBtn}`}>
            <i class="fa-solid fa-arrow-left"></i> Go Back
          </button>
          <img
            className={style.mainImage}
            src="https://images.kidzapp.com/media/blog/cover_images/6e423d51-a9ea-4400-a5fe-ac3189fda6e8/top-action-packed-activities-in-dubai-and-abu-dhabi.jpg"
            alt=""
          />

          <div className={`my-4 ${style.mainText}`}>
            <h1>Top Action-Packed Activities in Dubai and Abu Dhabi</h1>
            <div className="row mt-4">
              <div className={`col-md-8 d-flex ${style.leftContent}`}>
                <h6>
                  <i class="fa-solid fa-calendar"></i> July 28, 2022
                </h6>
                <h6>
                  <i class="fa-solid fa-user"></i> Posted by: Kidzapp Team
                </h6>
                <h6>
                  <i class="fa-solid fa-grip-lines"></i> Kidz Activities
                </h6>
              </div>
              <div className={`col-md-4 ${style.textSearchButton}`}>
                <button className={`btn btn-primary`}>
                  <i class="fa-solid fa-share"></i> Share
                </button>
              </div>
            </div>
            <p>
              Are you and your family looking to bond over some serious action?
              Well, keep reading along because we've gathered a number of
              activities in Dubai and Abu Dhabi that will guarantee you a
              fun-filled and memorable adventure with the family!
            </p>
          </div>
          <div className={style.elementorDivider}>
            <span className={style.elementorDividerSeparator}></span>
          </div>
        </div>
      </section>
      <section className={`${style.mapCards} container`}>
        {data.map((item) => (
          <div key={item.id} className="my-5">
            <div className={`row ${style.cardRow}`}>
              <div className="col-md-7">
                <h2>{item.mainHeading}</h2>

                <p>{item.detail ? item.detail : ""}</p>
                <p>{item.explanation}</p>
                <p>{item.text ? item.text : ""}</p>
              </div>
              <div className="col-md-5">
                <div class={`card ${style.cardClass}`}>
                  <img src={item.cardImg} class="card-img-top" alt="..." />
                  <div class={`card-body ${style.cardBody}`}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={style.location}>
                          <p ><b>Location:</b></p>
                          <p>{item.location}</p>
                        </div>
                        <div className={style.location}>
                          <p><b>Working-Hours :</b></p>
                          <p>{item.workingHours}</p>
                        </div>
                        <div className={style.location}>
                          <p><b>Prices : </b></p>
                          <p>{item.prices}</p>
                        </div>
                      </div>
                    </div>
                    
                   
                    <div className="row">
                      <a href="#" className={`btn ${style.CardButton}`}>
                        {" "}
                 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Blog1;
