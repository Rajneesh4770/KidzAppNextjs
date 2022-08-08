import React from "react";
import style from "../../../styles/Booking.module.css"
import { Button } from "@mui/material";
function Bookingreview() {
  return (
    <>
      <div className="col-lg-6 col-sm-12">
        <div className={style.rightsection}>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className={style.rightsectiondiv}>
                <p className={` m-0 ${style.datetimecontent}`}>
                Please confirm your booking details
                </p>
                
                <button className={style.schedulebutton}>
                  <span className={`${style.blogSpan} ${style.blog_age}`}>
                    <i className="fa-solid fa-calendar-days"></i> &nbsp; View
                    Schedule
                  </span>
                </button>
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
    </>
  );
}

export default Bookingreview;
