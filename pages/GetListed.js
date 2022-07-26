import style from "../styles/Getintouch.module.css";
import { FormLabel, TextField, Button, Box,InputLabel,NativeSelect } from "@mui/material";
import Recaptcha from "react-google-recaptcha";
import KidzappFeed from "../Components/KidzappFeed";
function Getintouch() {
  return (
    <div className={style.body}>
      {/* background image section */}

      <section className={style.section1}>
        <div className="container-flex">
          <div className="row">
            <div className="col-12 p-0">
              <div className={style.topbackground}>
                <h1 style={{ color: "white" }}>Get Listed on Kidzapp</h1>
                <h5 style={{ color: "white" }}>
                  Expand your reach by listing your business with us. Simply
                  fill out the form below and you'll hear back from us very
                  soon.{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.section2}>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className={`col-lg-12 ${style.fromcontent}`}>
              <div className={style.formtitle}>
                <h3>
                  <span className={style.headingcolor}>
                    Experience Information
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row p-3">
            <div className={`col-lg-12 ${style.fromcontent}`}>
              <Box className={style.box}>
                <FormLabel>
                  <div className="row">
                    <div className={`col-lg-12`}>
                      <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                      >
                        Type
                      </InputLabel>
                      <NativeSelect
                      fullWidth
                        // defaultValue={}
                      >
                        <option value={10}>Course</option>
                        <option value={20}>Venue</option>
                        <option value={30}>Event</option>
                      </NativeSelect>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`col-lg-12`}>
                      <TextField
                        className={style.TextField}
                        id="filled-basic"
                        label="E-mail"
                        variant="standard"
                        placeholder="@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className={`col-lg-12`}>
                      <TextField
                        id="filled-basic"
                        label="Subject"
                        variant="standard"
                        className={style.TextField}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className={`col-lg-12`}>
                      <TextField
                        id="standard-helperText"
                        variant="standard"
                        label="Message"
                        multiline
                        rows={4}
                        className={style.TextField}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className={`col-lg-12`}>
                      <div className="pb-2">
                        <lable>Recaptcha</lable>
                      </div>
                      <Recaptcha sitekey="6Ler570SAAAAAOfjh3CNFPtuBSH_QdavHc5x_JUv" />
                    </div>
                  </div>

                  <div className="row pt-5">
                    <div className={`col-lg-12`}>
                      <center>
                        <Button
                          className={style.Button}
                          variant="contained"
                          sx={{ width: 200 }}
                        >
                          Send
                        </Button>
                      </center>
                    </div>
                  </div>
                </FormLabel>
              </Box>
            </div>
          </div>
        </div>
      </section>
      <KidzappFeed />
    </div>
  );
}

export default Getintouch;
