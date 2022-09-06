import { useEffect, useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";
import getResponseMessage from "../language/multilingualServices";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import { useFormik } from "formik";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { TextField } from "@mui/material";
import axios, { Axios } from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AccountCircle } from "@mui/icons-material";
import PulseLoader from "react-spinners/PulseLoader";

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
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export let constants = "";
const Header = (props) => {
  
  const [status,setStatus]=useState()
  const [login, setLogin] = useState(true);
  const [access,setAccess]=useState(false)
  const [email, setEmail] = useState(null);
  const [resmodal, setResmodal] = useState(true);
  const [modal, setModal] = useState(true);
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const [Language, setLanguage] = useState("ae");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    constants = localStorage.getItem("language") || "ae";
  }, [Language]);

  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }, []);

  const openModal = () => {
    setModal(false);
  };
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email format")
      .required("Email required"),
  });
  const onSubmit = (e) => {
    toast("confirm your mail & register here");
    setLogin(false);
    console.log(e);
    setResmodal(false);
    axios
      .post("https://api2.kidzapp.com/api/3.0/customlogin/", e)
      .then((res) => {
        console.log(res, "res");
        if (res.data.message === "EMAIL SENT") {
          setEmail(e.email);
        }
      })
      .catch((err) => {
        console.error(err, "err");
      });
  };
  const myData = () => {
    axios
      .post(
        "https://api2.kidzapp.com/api/1.9/custom_email_authentication/",
        { email }
      )
      .then((res) => {
        console.log(res.data.access_token, "token");
        if(res.data?.access_token){
          localStorage.setItem("access_token", res.data.access_token);
          toast('Now you are successfully login')
          // setResmodal(true)
          setEmail(null);
        }
        setAccess(x=>!x);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    setStatus( localStorage.getItem('access_token') )
    
  },[myData])



  useEffect(() => {
    if (email) {
      setTimeout(myData, 2000);
    }
  }, [email,access]);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <>
      <header>
        <section className={style.top_nav}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`${style.top_bar}`}>
                  <div className={style.top_lang}>
                    <div className={` dropdown ${style.dropdownLang}`}>
                      <a
                        className=" dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Lng<i className="fa-solid fa-language"></i>
                      </a>
                      <ul className="dropdown-menu widthset">
                        <li>
                          <a
                            className="dropdown-item"
                            onClick={() => {
                              setLanguage("ae");
                              localStorage.setItem("language", "ae");
                              window.location.reload("/");
                            }}
                          >
                            UAE
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            onClick={() => {
                              setLanguage("ar");
                              localStorage.setItem("language", "ar");
                              window.location.reload("/");
                            }}
                          >
                            EG
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={style.top_search}>
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn" type="submit">
                        <i className="fa fa-solid fa-magnifying-glass"></i>{" "}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`header ${style.main_nav} `} id="myHeader">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className={`navbar navbar-expand-lg  ${style.nav2} `}>
                  <div className="container-fluid p-1">
                    <Link href="/">
                      <a className={`${style.navlogo1} navbar-brand`}>
                        <img
                          className={`animate__animated animate__zoomIn 	 ${style.navlogo}`}
                          src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-logo.png"
                        />
                      </a>
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon">
                        <i className="fa-solid fa-bars-staggered"></i>
                      </span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className={`${style.ul} navbar-nav mb-2 mb-lg-0`}>
                        <Link href="/Filter">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              aria-current="page"
                              href="#"
                            >
                              {getResponseMessage(constants).find_act1}
                            </a>
                          </li>
                        </Link>
                        <Link href="/Blog">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              {getResponseMessage(constants).blog}
                            </a>
                          </li>
                        </Link>
                        <Link href="/KidzappAward">
                          <li className="nav-item">
                            <a className="nav-link ">
                              {getResponseMessage(constants).kidzapp_awards}
                            </a>
                          </li>
                        </Link>
                        <Link href="/KidzappTv">
                          <li className="nav-item">
                            <a className="nav-link ">
                              {getResponseMessage(constants).kidzapp_tv}{" "}
                            </a>
                          </li>
                        </Link>
                        <Link href="/Getintouch">
                          <li className="nav-item">
                            <a className="nav-link ">
                              {getResponseMessage(constants).get_in_touch}
                            </a>
                          </li>
                        </Link>
                        <Link href="/GetListed">
                          <li className="nav-item">
                            <a className="nav-link ">
                              {getResponseMessage(constants).get_listed}
                            </a>
                          </li>
                        </Link>

                        {!status ? (
                          <Link href="/">
                            <li className="nav-item">
                              <a className="nav-link " onClick={handleOpen}>
                                Login
                              </a>
                            </li>
                          </Link>
                        ) : (
                          <>
                            <Link href="/">
                              <li className="nav-item">
                                <a
                                  className="nav-link "
                                  onClick={() => setStatus(localStorage.removeItem('access_token') )}
                                >
                                  Logout
                                </a>
                              </li>
                            </Link>

                            <li className="nav-item dropdown">
                              <a
                                className="nav-link toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <AccountCircle sx={{ color: "#58cbf8" }} />
                              </a>
                              <ul
                                className={`${style.ullist} dropdown-menu`}
                                aria-labelledby="navbarDropdownMenuLink"
                              >
                                <Link href="/Profile">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Profile
                                    </a>
                                  </li>
                                </Link>
                                <Link href="/Mybooking">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Booking
                                    </a>
                                  </li>
                                </Link>
                                <Link href="WishList">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      WishList
                                    </a>
                                  </li>
                                </Link>
                              </ul>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </header>

      {modal ? (
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
              <Button
                onClick={() => setModal(false)}
                variant="outlined"
                color="success"
                sx={{ width: 300 }}
              >
                LogIn With E-mail &nbsp; <HiOutlineMail />
              </Button>
              <br />
              <Button variant="outlined" color="success" sx={{ width: 300 }}>
                LogIn With Facebook &nbsp; <FaFacebookF />
              </Button>
            </Box>
          </Fade>
        </Modal>
      ) : resmodal ? (
        <Modal
          id="knkjn"
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          // BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style2} className={style.loginModalForm}>
              <form onSubmit={formik.handleSubmit}>
                <div className={style.loginModal}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-danger error pl-2">
                      {formik.errors.email}
                    </p>
                  ) : null}
                  <br />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={style.btn}
                  >
                    NEXT
                  </Button>
                  <br />
                  <br />
                  <hr></hr>
                  <p>Tap Next to get a Confirmation Email from a system </p>
                </div>
              </form>
            </Box>
          </Fade>
        </Modal>
      ) : (
        <Modal
          id="knkjn"
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          // BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style2} className={style.confirmationModal}>
              <form>
                <div className={style.messagepopup}>
                  <a></a>
                </div>
                <div className={style.detail}>
                  <div className={style.wrapper}>
                    <p className={style.title}>
                      We have sent an email to
                      <span>A@gmail.com</span>
                      Open the email and confirm your email address
                    </p>
                    <h6>
                      If you dont see the email please check your spam <br></br>{" "}
                      folder
                    </h6>
                    <div className={style.icon}>
                      <AiOutlineMail
                        style={{ height: "100px", width: "300px" }}
                      />
                    </div>
                  </div>
                  <div className={`${style.resendWrapper} p-3`}>
                    <center>
                      {" "}
                      <button className="btn">Resend Email</button>
                    </center>
                  </div>
                  <div className={`${style.loader} p-3`}>
                    <PulseLoader color="#FF8C00" />
                  </div>
                  <div>
                    <p>
                      Please keep this open until you've confirmed your email
                    </p>
                  </div>
                </div>
              </form>
            </Box>
          </Fade>
        </Modal>
      )}
    </>
  );
};

export default Header;
