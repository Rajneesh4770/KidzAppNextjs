import style from "../../styles/Booking.module.css";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { FcGoogle } from "react-icons/fc";

const PaymentSection = () => {
  return (
    <>
      <div className="col-lg-6 col-sm-12">
        <div className={style.rightsection}>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className={style.rightsectiondiv}>
                <div className={style.moneyTop}>
                  <h3 className={style.moneyheading}>
                    Total Price:
                    <small className={style.money}> AED 590.00</small>
                  </h3>
                </div>
              </div>

              <p className="mt-3">Payments </p>

              <div className="bg-white p-4">
                <InputLabel htmlFor=""> Card Number</InputLabel>
                <Input
                  sx={{ width: "100%" }}
                  placeholder="Cardnumber"
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <CreditCardIcon />
                    </InputAdornment>
                  }
                />
                <div className="row pt-4">
                  <div className="col-6">
                    <InputLabel htmlFor=""> Expiry Date</InputLabel>
                    <Input
                      id="standard-basic"
                      placeholder="MM/YY"
                      variant="standard"
                      startAdornment={
                        <InputAdornment position="start">
                          <CalendarMonthIcon />
                        </InputAdornment>
                      }
                    >
                      <CreditCardIcon />
                    </Input>
                  </div>

                  <div className="col-6">
                    <InputLabel htmlFor=""> Security Code</InputLabel>
                    <Input
                      id="standard-basic"
                      placeholder="CVV"
                      variant="standard"
                      startAdornment={
                        <InputAdornment position="start">
                          <CreditScoreIcon />
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div className="pt-4">
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Save Card"
                      />
                    </FormGroup>
                  </div>

                  <div className="row">
                    <div className="col">
                      <Button
                        style={{ backgroundColor: "#e35b26", color: "white" }}
                        variant="contained"
                        className="btn  btn-sm btn-block w-100 m-2 "
                      >
                        Pay now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <p>Other Payement Option</p>
            <div>
              <p
                className="text-center bg-white p-2"
                style={{ cursor: "pointer" }}
              >
                Pay With <FcGoogle />
                Pay
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSection;
