import style from "../styles/GetListed.module.css";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import KidzappFeed from "../../src/Components/KidzappFeed";
import Recaptcha from "../Components/Recaptcha";
import Map from "../Components/Map";
import { useState } from "react";
function Getintouch() {

  const [data, setData] = useState({
    type: '',
    city: '',
    experienceName: '',
    venueName: '',
    category: '',
    subCategory: '',
    description: '',
    designation: '',
    name: '',
    email: '',
    phoneNumber: ''
  })

  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    type: Yup.string()
      .required('Required'),
    city: Yup.string()
      .required('Choose your city'),
    experienceName: Yup.string()
      .required('Required'),
    venueName: Yup.string()
      .required('Required'),
    category: Yup.string()
      .required('Required'),
    subCategory: Yup.string()
      .required('Required'),
    description: Yup.string()
      .required('Required'),
    designation: Yup.string()
      .required('Required'),
    name: Yup.string()
      .min(2, 'Too Short')
      .max(20, 'Too long')
      .required('Enter your name'),
    email: Yup.string()
      .email('Invalid Email format')
      .required('Email Required'),
    phoneNumber: Yup.string()
      .required('Phone number required')
      .matches( 'Phone number is not valid')
      .min(10, 'Too short')
      .max(10, 'Too long')

  })

  const handleSubmit = async () => {
    window.confirm("Submit Successfully")
  };

  return (
    <>
      <div className={style.body}>
        {/* background image section */}

        <section>
          <div className={style.GetListedBanner}>
            <div className="container">
              <div className='row'>
                <div className='col'>
                  <div className={`${style.wrapper} ${style.GetListedBannerWrapper}`}>
                    <h1>Get Listed on Kidzapp</h1>
                    <h2>Expand your reach by listing your business with us. Simply fill out<br /> the form below and you'll hear back from us very soon.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Formik
          initialValues={data}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <section className={style.getListedForm}>
              <div className='container'>
                <div className={`row ${style.justifyContentCenter}`}>
                  <div className='col-md-10'>
                    <h4>Experiences Information</h4>

                      <div className={style.formGroup}>
                        <label>Type*</label>
                        <Field as="select" className={style.formControl} style={{ width: "100%", height: "45px" }}>
                          <option>-</option>
                          <option>Course</option>
                          <option>Venue</option>
                          <option>Event</option>
                        </Field>
                        <small className="text-danger m-2">
                          <ErrorMessage name="type" />
                        </small>
                      </div>

                      <div className={style.formGroup}>
                        <label>City*</label>
                        <Field as="select" className={style.formControl} style={{ width: "100%", height: "45px" }}>
                          <option>-</option>
                          <option>Dubai</option>
                          <option>AI Ain</option>
                          <option>Fujairah</option>
                          <option>Abu dhabi </option>
                          <option>Ajman</option>
                          <option>Sharjah</option>
                          <option>Ras AI Khaimah</option>
                          <option>Umm AI Quwain</option>
                        </Field>
                        <small className="text-danger m-2">
                          <ErrorMessage name="city" />
                        </small>
                      </div>

                      <div className={style.location}>
                        <label>Location Map</label>
                        <span className={style.drag}>
                          Drag pointer to your location
                          <div id='map'>
                            <Map />
                          </div>
                        </span>
                      </div>

                      <div className={style.formGroup}>
                        <label>Experience Name*</label>
                        <Field
                          type="text"
                          className={`${style.formControl} ${style.formInput}`}
                          id='ex_name'
                          name='experience'
                        />
                        <small className="text-danger m-2">
                          <ErrorMessage name="experienceName" />
                        </small>
                      </div>

                      <div className={style.formGroup}>
                        <label>Venue Name*</label>
                        <Field
                          type="text"
                          className={`${style.formControl} ${style.formInput}`}
                          id='ex_name'
                          name='experience'
                        />
                        <small className="text-danger m-2">
                          <ErrorMessage name="venueName" />
                        </small>
                      </div>

                      <div className={style.formGroup}>
                        <label>Category*</label>
                        <Field as="select" className={style.formControl} style={{ width: "100%", height: "45px" }}>
                          <option>-</option>
                          <option>AE National Day</option>
                          <option>Spring Fun</option>
                          <option>Winter Fun</option>
                          <option>Afterschool Activities</option>
                          <option>Animal Fun</option>
                          <option>Art,Music & Dance</option>
                          <option>Baby & Toddler</option>
                          <option>Birthdays</option>
                          <option>Courses,Camps & Workshops</option>
                          <option>Eat Out</option>
                          <option>Explore The City</option>
                          <option>Markets & Fairs</option>
                          <option>Outdoor & Nature</option>
                          <option>Schools & Nurseries</option>
                          <option>Show & Cinema</option>
                          <option>Sports & Active</option>
                          <option>Theme Parks</option>
                          <option>Water Fun</option>
                          <option>Test Temp</option>
                        </Field>
                        <small className="text-danger m-2">
                          <ErrorMessage name="category" />
                        </small>
                      </div>

                      <div className={style.formGroup}>
                        <label>Subcategory*</label>
                        <Field as="select" className={style.formControl} style={{ width: "100%", height: "45px" }}>
                          <option>-hh</option>
                        </Field>
                        <small className="text-danger m-2">
                          <ErrorMessage name="subCategory" />
                        </small>
                      </div>

                      <div className={style.formGroup}>
                        <label>Description</label>
                        <textarea
                          className={`${style.formControl}`}
                          name='description'
                          id='description'
                        />
                      </div>

                      <h4>Contact Information</h4>

                      <div className={style.formGroup}>
                        <label>Designation*</label>
                        <Field
                          type="text"
                          className={`${style.formControl} ${style.formInput}`}
                          id='designation'
                          name='designation'
                        />
                        <small className="text-danger m-2">
                          <ErrorMessage name="designation" />
                        </small>
                      </div>

                      <div className={style.formGroup}>
                        <label>Name*</label>
                        <Field
                          type="text"
                          className={`${style.formControl} ${style.formInput}`}
                          id="name"
                          name='name'
                        />
                        <small className="text-danger m-2">
                          <ErrorMessage name="name" />
                        </small>
                      </div>

                      <div className={style.formGroup}>
                        <label>Email*</label>
                        <Field
                          type="text"
                          className={`${style.formControl} ${style.formInput}`}
                          id='email'
                          name='email'
                        />
                        <small className="text-danger m-2">
                          <ErrorMessage name="email" />
                        </small>
                      </div>

                      <div className={style.formGroup}>
                        <label>Phone Number*</label>
                        <Field
                          type="text"
                          className={`${style.formControl} ${style.formInput}`}
                          id='phone-number'
                          name='phone number'
                        />
                        <small className="text-danger m-2">
                          <ErrorMessage name="phoneNumber" />
                        </small>
                      </div>
                      <Recaptcha />
                  </div>
                  <button type="submit" className={`mt-5 ${style.getListedButton}`}>GET LISTED</button>

                </div>
              </div>
            </section>
          </Form>
        </Formik>



        <KidzappFeed />
      </div>
    </>
  );
}

export default Getintouch;
