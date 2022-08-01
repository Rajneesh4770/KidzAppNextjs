import style from "../../styles/Homehandpickedbooking/Booking.module.css";
import Router from "next/router";
import { Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
              <div className="col-lg-8">
                <img
                  className={style.leftimg1}
                  src="https://testimages.kidzapp.com/media/CACHE/images/venues/b00dc740-c214-4528-8b6b-025fe2942656/dubai-miracle-garden.jpg"
                />
                {/* heading and button section row */}
                <div className="row">
                  <div className="col-6">
                    <h1>Dubai Miracle Garden</h1>
                  </div>
                  <div className="col-6">
                    <Button className={style.Bookingbtn} variant="contained">
                      Book Now
                    </Button>
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
                        <div className={style.agetext}> Age:- &nbsp; 0-16</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-4">
                    <div className={style.timediv}>
                      <div className={style.boxicon}>
                        <AccessTimeIcon className={style.icons}/>
                        <p className={style.paragraphtext}>Sun-Thu 9:00 to 21:00, Fri-Sat until 23:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className={style.timediv}>
                      <div className={style.boxicon}>
                        <StarBorderPurple500Icon className={style.icons}/>
                        <p  className={style.paragraphtext}>4.1</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className={style.timediv}>
                      <div className={style.boxicon}>
                        <LocationOnIcon className={style.icons}/>
                        <p  className={style.paragraphtext}>Dubai Miracle Garden, Barsha South,Barsha</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-12">
                    <div className={style.paragraphdiv}>
                      <p className="m-3">
                        Escape to floral bliss with your family as you explore
                        the awe-inspiring flower designs and structures. Dubai
                        Miracle Garden is home to 70 flower varieties and
                        approximately 100 million blooming flowers! Be sure to
                        pass by its structure of an Airbus 380 that has made it
                        to the Guinness Book of World Records for the largest
                        floral
                      </p>
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
