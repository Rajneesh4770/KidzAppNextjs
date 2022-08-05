import { useEffect, useState } from "react";
import style from "../styles/Navbar.module.css";
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
      <header>

        <section className={style.top_nav}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={style.top_bar}>
                  <div className={style.top_lang}>
                    <div className={` dropdown ${style.dropdownLang}`}>
                      <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Lang
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">UAE</a></li>
                        <li><a class="dropdown-item" href="#">EG</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className={style.top_search}>
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn" type="submit"><i class="fa fa-solid fa-magnifying-glass"></i> </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={` ${style.main_nav} fixed`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav class="navbar navbar-expand-lg  ">
                  <div class="container-fluid p-1">
                    <a class="navbar-brand" className={style.navlogo1} href="#">
                      <img className={style.navlogo} src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-logo.png" />
                    </a>
                    <button class="navbar-toggler" className={style.toggle_focus} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"><i class="fa-solid fa-bars-staggered"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Find Activities</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ">Kidzapp Awards</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ">Kidzapp TV</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ">Get In Touch</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ">Get Listed</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ">Login</a>
                        </li>
                        {/* <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                          </a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </li> */}
                      </ul>

                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </header>

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
