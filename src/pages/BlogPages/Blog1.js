import React from 'react'
import style from "../../styles/BlogPages/BlogPage1.module.css"
const Blog1 = () => {


  const data = [
    {
      id: 1,
      mainHeading: "Bounce over to Bounce (excuse the pun) to enjoy their Summer Offer on their best-selling ticket: the 2-Hour Superpass.",
      detail: "How to spend your cashback - top picks",
      explanation: "The offer is valid until August 31 and at all Bounce locations in Dubai & Abu Dhabi. It includes a FREE large pizza with the purchase of the 2-hour Superpass for just AED 120! ",
      cardImg: "",
      location: "BOUNCE",
      workingHours: "Sun-Thu 10:00 to 23:00, Fri-Sat until 00:00",
      prices: "1 Child : AED 120",
    },
    {
      id: 2,
      mainHeading: "Air Maniax is the ultimate fun-filled destination that has something for everyone!",
      detail: "How to spend your cashback - top picks",
      explanation: "The venue is over 23,000 square feet and offers 6 interactive zones, so you can have a laugh at the inflatables arena, compete against each other in the multi-level warrior assault arena, experience what it's like to fly as you zip-line, navigate through a maze of lasers, or have some fun in the dedicated toddler area. ",
      text: "Enjoy up to 20% OFF Entry Tickets at Air Maniax Dubai & Abu Dhabi!",
      cardImg: "",
      location: "Air Maniax, Al Quoz",
      workingHours: "Mon-Fri 9:00 to 22:00, Sat-Sun from 10:00",
      prices: "1hr General Access : AED 85 ",
    },
    {
      id: 1,
      mainHeading: "",
      detail: "How to spend your cashback - top picks",
      explanation: "",
      cardImg: "",
      location: "",
      workingHours: "",
      prices: "",
    },
    {
      id: 1,
      mainHeading: "",
      detail: "How to spend your cashback - top picks",
      explanation: "",
      cardImg: "",
      location: "",
      workingHours: "",
      prices: "",
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
            <i class="fa-solid fa-arrow-left"></i>     Go Back
          </button>
          <img className={style.mainImage} src="https://images.kidzapp.com/media/blog/cover_images/6e423d51-a9ea-4400-a5fe-ac3189fda6e8/top-action-packed-activities-in-dubai-and-abu-dhabi.jpg" alt="" />

          <div className={`my-4 ${style.mainText}`}>
            <h1>
              Top Action-Packed Activities in Dubai and Abu Dhabi
            </h1>
            <div className="row mt-4">
              <div className={`col-md-8 d-flex ${style.leftContent}`}>
                <h6><i class="fa-solid fa-calendar"></i> July 28, 2022</h6>
                <h6><i class="fa-solid fa-user"></i> Posted by: Kidzapp Team</h6>
                <h6><i class="fa-solid fa-grip-lines"></i> Kidz Activities</h6>
              </div>
              <div className={`col-md-4 ${style.textSearchButton}`}>
                <button className={`btn btn-primary`}><i class="fa-solid fa-share"></i> Share</button>
              </div>
            </div>
            <p>Are you and your family looking to bond over some serious action? Well, keep reading along because we've gathered a number of activities in Dubai and Abu Dhabi that will guarantee you a fun-filled and memorable adventure with the family!</p>
          </div>
          <div className={style.elementorDivider}>
            <span className={style.elementorDividerSeparator}></span>
          </div>


        </div>
      </section>
      <section className="mapCards">

      </section>
    </>
  )
}

export default Blog1


