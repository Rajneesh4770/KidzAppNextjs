import React from 'react';
import style from '../../styles/Booking.module.css';
import { Button } from '@mui/material';
import { useState } from 'react';
import PaymentSection from './PaymentSection';
function Bookingreview() {
  const [payment,setPayment]=useState(true);
	return (
		<>
    {payment? 
    <>
			<div className="col-lg-6 col-sm-12">
				<div className={style.rightsection}>
					<div className="row mt-4">
						<div className="col-lg-12">
							<div className={style.rightsectiondiv}>
								<p className={` m-0 ${style.datetimecontent}`}>
									Please confirm your booking detailssssss
								</p>
								<p></p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<Button variant="contained" className={style.submitbtn} onClick={()=>(setPayment(false))}>
								Confirm and pay now
							</Button>
						</div>
					</div>
				</div>
			</div>
      </>: <PaymentSection/> }

		</>
	);
}

export default Bookingreview;
