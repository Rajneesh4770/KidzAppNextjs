import React from "react";
import style from "../../styles/Booking.module.css"
import { Button } from "@mui/material";
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
function Bookingreview() {
  return (
    <>
      <div className="col-lg-6 col-sm-12">
        <div className={style.rightsection} >
          <div className="row mt-4">
            <div className="col-lg-12">
              <div>
                <p className={` m-0 pb-3`}>
                Please confirm your booking details
                </p>
                <h6><DateRangeIcon /> &nbsp; Mon, 15 Aug, 2022</h6>
                
              </div>
              <div className={` m-0 pt-4`}>
                <p>Personal Details</p>
                <h6>  <AccountCircleIcon/>&nbsp; User</h6>
                <h6><LocalPhoneIcon/>&nbsp; 94186-52165</h6>
                <h6><EmailIcon/>&nbsp; rajneesh@gmail.com</h6>
              </div>
              <div className='m-0 pt-4'>
              <p>Price Details</p>
              <h4>124th Floor tickets(non prime hours)</h4>
              <h6>Time Slot : 12:00 PM - 12:30 PM</h6>
              <div className={`pt-2 ${style.priceconfrm}`}>
              <span>1 adult X AED 200.00</span>
             
              <h6 >
AED 200.00</h6>
              </div><br/>
              <hr></hr>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Button variant="contained" className={style.submitbtn}>
               Confirm and pay now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookingreview;
