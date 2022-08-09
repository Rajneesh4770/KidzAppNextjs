import style from '../../styles/Booking.module.css';
import {
	Button,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from '@mui/material';
const PaymentSection = () => {
	return (
		<>
			<div className="col-lg-6 col-sm-12">
				<div className={style.rightsection}>
					<div className="row mt-4">
						<div className="col-lg-12">
							<div className={style.rightsectiondiv}>
								<div className={style.moneyTop}>
									<h3>
										Total Price:
										<small className={style.money}> AED 590.00</small>
									</h3>
								</div>
							</div>
							<div>
								<p>Payments </p>
								<InputLabel htmlFor=""> Card</InputLabel>
								<TextField
									sx={{ width: '100%' }}
									id="standard-basic"
									label="cardnumber"
									variant="standard"
								/>
								<div className="row pt-3">
									<div className="col-6">
										<InputLabel htmlFor=""> Card</InputLabel>
										<TextField
											id="standard-basic"
											label="cardnumber"
											variant="standard"
										/>
									</div>

									<div className="col-6">
										<InputLabel htmlFor=""> Card</InputLabel>
										<TextField
											id="standard-basic"
											label="cardnumber"
											variant="standard"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<Button variant="contained" className={style.submitbtn}>
								Pay now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PaymentSection;