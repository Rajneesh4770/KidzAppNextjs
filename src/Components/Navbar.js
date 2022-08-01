import { useEffect, useState } from "react";
import style from "../styles/ComponentsCss/Navbar.module.css";
import Link from "next/link";
import HomeHandpicked from "./HomePageComponents/HomeHandpicked";
import LoginIcon from "@mui/icons-material/Login";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import getResponseMessage from "../Language/multilingualServices";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useSelector, useDispatch } from 'react-redux'
import { ar, ae } from '../Redux/Langauge'

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
export let constants = "";
const Header = () => {
  // if (typeof window !== "undefined") {
  //   var dropdownValue = localStorage.getItem("language");
  // }

  const [Language, setLanguage] = useState("ae");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    constants = localStorage.getItem("language") || "ae";
  }, [Language]);
  const dispatch = useDispatch()
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-6 ">
            <nav className={` ${style.navbar1} fixed-top `}>
              {/* <!-- LOGO --> */}
              <div className={`row ${style.navRow}`}>
                <div className={`col-sm-6 ${style.tglBTN} `}>
                  <span className={` ${style.logo}`}>
                    <Link href="/">
                      <img
                        className={style.logoimage}
                        src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-logo.png"
                      ></img>
                    </Link>
                  </span>
                </div>
                <div className={`col-sm-6 ${style.tglBTN} `}>
                  <ul className={style.navlinks}>
                    {/* <!-- USING CHECKBOX HACK --> */}

                    <input
                      type="checkbox"
                      id="checkbox_toggle"
                      className={style.hamburgercheck}
                    />
                    <label
                      htmlFor="checkbox_toggle"
                      className={style.hamburger}
                    >
                      &#9776;
                    </label>
                    {/* <!-- NAVIGATION MENUS --> */}
                    <div className={`float-right ${style.menu}`}>
                      <li>
                        <Link href="/FindActivities">{getResponseMessage(constants).find_act1}</Link>
                      </li>
                      <li>
                        <Link href="/Blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/KidzappAward">
                          KidzAppAwards</Link>
                      </li>
                      <li>
                        <Link href="/">KidzAppTV</Link>
                      </li>
                      <li>
                        <Link href="/Getintouch">GetInTouch</Link>
                      </li>
                      <li>
                        <Link href="/GetListed">GetListed</Link>
                      </li>
                      <li>
                        <FormControl >
                          <InputLabel id="demo-select-small">
                            Language
                          </InputLabel>
                          <Select
                        className={style.languagebtn}
                            
                            size="small"
                            value={Language}
                            // {dropdownValue}
                            // {dropdownValue ? dropdownValue : "ae"}
                            // defaultValue={10}
                            label="Language"
                          >
                            
                            <MenuItem
                              value={"ae"}
                              onClick={() => {
                                setLanguage("ae");
                                localStorage.setItem("language", "ae");
                                window.location.reload("/");
                              }}
                            >
                              UAE
                            </MenuItem>
                            <MenuItem value=""></MenuItem>
                            <MenuItem
                              value={"ar"}
                              onClick={() => {
                                setLanguage("ar");
                                localStorage.setItem("language", "ar");
                                window.location.reload("/");
                              }}
                            >
                              EG
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </li>
                      <li className={style.LoginIcon}>
                        <LoginIcon
                          onClick={handleOpen}
                          className={style.LoginIcon1}
                        />
                      </li>
                    </div>
                  </ul>
                </div>

                {/* <!-- NAVIGATION MENU --> */}
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style1}>
            <Typography id="transition-modal-title" variant="h3" component="h1">
              Login
            </Typography>
            <TextField
              id="standard-basic"
              label="Email-ID"
              variant="standard"
              sx={{ width: 300 }}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              sx={{ width: 300 }}
            />
            <br></br>
            <br />
            <Button variant="outlined" color="success" sx={{ width: 300 }}>
              Sign in
            </Button>
            <br />
            <Typography>Forgot password? </Typography>
            {/* <hr/>  */}
            <Typography sx={{ width: 300 }}>
              <HorizontalRuleIcon />
            </Typography>
            <Link href="/Login/SignIn">
              <Button variant="outlined" color="success" sx={{ width: 300 }}>
                Sign Up
              </Button>
            </Link>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Header;
