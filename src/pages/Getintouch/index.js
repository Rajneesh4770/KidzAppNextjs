import { FormLabel, TextField, Button, Box } from '@mui/material';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import Image from 'next/image';

import style from '../../styles/Getintouch.module.css';
import KidzappFeed from '../../Components/KidzappFeed';
import Recaptcha from '../../Components/Recaptcha';
import getInTouchValidation from '../../schema/getInTouchValidation';

function Getintouch() {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  }


  const onSubmit = () => {
    toast.success('Register successfully')
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: getInTouchValidation,
  })

  return (
    <div className={style.body}>
      {/* background image section */}
      <section className={style.section1}>
        <div className="container-flex p-0">
          <div className={`row ${style.row}`} >
            <div className="col-md-12 ">
              <div className={style.topbackground}>
                <h1 style={{ color: "white" }}>Get In Touch</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={style.box1}>
                <div className={style.cicon}>
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div className={style.ctext}>
                  <span>info@kidzapp.com</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={style.box1}>
                <div className={style.cicon}>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div className={style.ctext}>
                  <span>+971585850843</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={style.box1}>
                <div className={style.cicon}>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className={style.ctext}>
                  <span>
                    Kidzapp LLC 1404 Ascott Park Place Sheikh Zayed Road, Dubai
                    P.O. Box 117452 United Arab Emirates
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-12">
              <div className={style.formtitle}>
                <h3>
                  <span className={style.headingcolor}>
                    Suggestion? Help? Just want to say Hi?
                  </span>
                  <br /> Fill out the form below and one of the Kidzapp family
                  will be in touch
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.section2}>
        <div className="container mt-5 mb-5">
          <div className="row p-0">
            <div className={`col-md-7 p-0 ${style.fromcontent}`}>
              <Box
                className={style.box}
              >
                <form className='' onSubmit={formik.handleSubmit}>
                  <FormLabel>
                    <div className="row">
                      <div className={`col-lg-6`}>
                        <TextField
                          id="filled-basic"
                          label="First Name"
                          variant="standard"
                          className={style.TextField}
                          type='text'
                          {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? <p className="text-danger error pl-2">{formik.errors.firstName}</p> : null}
                      </div>
                      <div className={`col-lg-6`}>
                        <TextField
                          id="filled-basic"
                          label="Last Name"
                          variant="standard"
                          className={style.TextField}
                          type='text'
                          {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? <p className="text-danger error pl-2">{formik.errors.lastName}</p> : null}

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
                          type='text'
                          {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? <p className="text-danger error pl-2">{formik.errors.email}</p> : null}
                      </div>
                    </div>
                    <div className="row">
                      <div className={`col-lg-12`}>
                        <TextField
                          id="filled-basic"
                          label="Subject"
                          variant="standard"
                          className={style.TextField}
                          type='text'
                          {...formik.getFieldProps('subject')}
                        />
                        {formik.touched.subject && formik.errors.subject ? <p className="text-danger error pl-2">{formik.errors.subject}</p> : null}

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
                          type='text'
                          {...formik.getFieldProps('message')}
                        />
                        {formik.touched.message && formik.errors.message ? <p className="text-danger error pl-2">{formik.errors.message}</p> : null}

                      </div>
                    </div>
                    <div className="row">
                      <div className={`col-lg-12`}>
                        <div className="pb-2"><label >Recaptcha</label></div>
                          <Recaptcha />
                      </div>
                    </div>

                    <div className="row pt-5">
                      <div className={`col-lg-12`}>
                        <center>
                          <Button
                            className={style.Button}
                            variant="contained"
                            type="submit"
                            // onClick={submitHandler}
                            onClick={() => toast("Successfully")}
                            sx={{ width: 200 }}
                          >
                            Send
                          </Button>
                        </center>
                      </div>
                    </div>
                  </FormLabel>
                </form>
              </Box>
            </div>
            <div className={`col-md-5 my-4 ${style.image}`}>
              <Image src="/getInTouch.png" alt="Picture"
                width="700"
                height="700" />
            </div>
          </div>
        </div>
      </section>
      <KidzappFeed />
    </div>
  );
}

export default Getintouch;
