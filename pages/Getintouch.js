import style from "../styles/Getintouch.module.css";
import { FormLabel, TextField, Button } from "@mui/material";
import Recaptcha from "react-google-recaptcha";
import KidzappFeed from "../Components/KidzappFeed";
function Getintouch() {
  return (
    <div className={style.body}>
      {/* background image section */}

      <section className={style.section1}>
        <div className="container-flex">
          <div className="row">
            <div className="col-12">
              <div className={style.topbackground}>
                <center>
                  <h2>Suggestion?</h2>
                </center>
                <center>
                  <h2>Help?</h2>
                </center>
                <center>
                  <h2>Just Want to say Hi?</h2>
                </center>
                <center>
                  <span>
                    Fill out the form below and one of the Kidzapp family will
                    be in touch
                  </span>
                </center>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.section2}>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className={`col-lg-12 ${style.fromcontent}`}>
              <FormLabel>
                <TextField
                  id="filled-basic"
                  label="First Name"
                  variant="outlined"
                  className={style.TextField}
                />
                <TextField
                  id="filled-basic"
                  label="Last Name"
                  variant="outlined"
                  className={style.TextField}
                />
                <br />
                <br />
                <TextField
                  id="filled-basic"
                  label="E-mail"
                  variant="outlined"
                  placeholder="@gmail.com"
                  sx={{ width: 490 }}
                />
                <br />
                <br />
                <TextField
                  id="filled-basic"
                  label="Subject"
                  variant="outlined"
                  className={style.TextField}
                  sx={{ width: 490 }}
                />{" "}
                <br />
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type Here.."
                  sx={{ width: 490 }}
                />
                <br />
                <br />
                <Recaptcha sitekey="6Ler570SAAAAAOfjh3CNFPtuBSH_QdavHc5x_JUv" />
                <br />
                <br />
                <center>
                  <Button
                    className={style.Button}
                    variant="contained"
                    sx={{ width: 200 }}
                  >
                    Send
                  </Button>
                </center>
                <br />
                <br />
              </FormLabel>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className={`col-lg-12 ${style.addressdiv}`}>
              <h5>E-mail :- </h5> <span>info@kidzapp.com</span>
              <br />
              <h5>Phone :- </h5>
              <span>+971585850843</span>
              <h5>Address</h5>
              <span>
                Kidzapp LLC 1404 Ascott Park Place Sheikh Zayed Road, Dubai P.O.
                Box 117452 United Arab Emirates
              </span>
            </div>
          </div>
        </div>
      </section>
      <KidzappFeed />
    </div>
  );
}

export default Getintouch;
