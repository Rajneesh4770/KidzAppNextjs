import { useEffect, useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";
import getResponseMessage from "../Language/multilingualServices";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { ar, ae } from "../Redux/Langauge";
import { FaFacebookF } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { TextField } from "@mui/material";

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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // flexDirection: "column",
}


export let constants = "";
const Header = () => {
  const [modal, setModal] = useState(true)
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
  // const dispatch = useDispatch();

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
    setModal(false)

  }

  const initialValues = {
    email: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid Email format')
      .required('Email required')
  })

  const onSubmit = () => {
    toast.success("Registered Successfully")
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })



  return (
    <>
      <header >
        <section className={style.top_nav}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`${style.top_bar}`}>
                  <div className={style.top_lang}>
                    <div className={` dropdown ${style.dropdownLang}`}>
                      <a
                        class=" dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Lng<i class="fa-solid fa-language"></i>
                      </a>
                      <ul class="dropdown-menu widthset">
                        <li>
                          <a class="dropdown-item" onClick={() => {
                            setLanguage("ae");
                            localStorage.setItem("language", "ae");
                            window.location.reload("/");
                          }}>
                            UAE
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" onClick={() => {
                            setLanguage("ar");
                            localStorage.setItem("language", "ar");
                            window.location.reload("/");
                          }}>
                            EG
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={style.top_search}>
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button class="btn" type="submit">
                        <i class="fa fa-solid fa-magnifying-glass"></i>{" "}
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
                <nav class={`navbar navbar-expand-lg  ${style.nav2} `}>
                  <div class="container-fluid p-1">
                    <Link href="/">
                      <a class="navbar-brand" className={style.navlogo1}>
                        <img
                          className={style.navlogo}
                          src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-logo.png"
                        />
                      </a>
                    </Link>
                    <button
                      class="navbar-toggler"
                      // className={style.toggle_focus}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon">
                        <i class="fa-solid fa-bars-staggered"></i>
                      </span>
                    </button>
                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul class={`${style.ul} navbar-nav mb-2 mb-lg-0`}>
                        <Link href="/FindActivities">
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              aria-current="page"
                              href="#"
                            >
                              {getResponseMessage(constants).find_act1}
                            </a>
                          </li>
                        </Link>
                        <Link href="/Blog">
                          <li class="nav-item">
                            <a class="nav-link" href="#">
                              {getResponseMessage(constants).blog}
                            </a>
                          </li>
                        </Link>
                        <Link href="/KidzappAward">
                          <li class="nav-item">
                            <a class="nav-link ">
                              {getResponseMessage(constants).kidzapp_awards}</a>
                          </li>
                        </Link>
                        <Link href="/KidzappTv">
                          <li class="nav-item">
                            <a class="nav-link ">
                              {getResponseMessage(constants).kidzapp_tv} </a>
                          </li>
                        </Link>
                        <Link href="/Getintouch">
                          <li class="nav-item">
                            <a class="nav-link ">
                              {getResponseMessage(constants).get_in_touch}</a>
                          </li>
                        </Link>
                        <Link href="/GetListed">
                          <li class="nav-item">
                            <a class="nav-link ">
                              {getResponseMessage(constants).get_listed}</a>
                          </li>
                        </Link>
                        <Link href="/">
                          <li class="nav-item">
                            <a class="nav-link " onClick={handleOpen}>Login</a>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </header>
      {modal ?
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
            <Box sx={style1}>
              <Button variant="outlined" color="success" sx={{ width: 300 }} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={openModal}>
                LogIn With E-mail &nbsp; <HiOutlineMail />
              </Button>
              <br />
              <Button variant="outlined" color="success" sx={{ width: 300 }}>
                LogIn With Facebook &nbsp; <FaFacebookF />
              </Button>
            </Box>
          </Fade>
        </Modal> :

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
            <Box sx={style2} style={{ borderRadius: "10px", width: "700px", height: "350px" }}>

              <form onSubmit={formik.handleSubmit}>
                <div className={style.loginModal}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? <p className="text-danger error pl-2">{formik.errors.email}</p> : null}
                  <br />
                  <br />
                  <Button variant='contained' color='primary' className={style.btn}>NEXT</Button>
                  <br /><br />
                  <hr></hr>
                  <p>Tap Next to get a Confirmation Email from a system </p>
                </div>
              </form>

            </Box>
          </Fade>
        </Modal>
      }
    </>
  );
};

export default Header;
