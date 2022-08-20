import style from "../styles/GetListed.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import KidzappFeed from "../../src/Components/KidzappFeed";
import Recaptcha from "../Components/Recaptcha";
import Map from "../Components/Map";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Getintouch() {
  const [cities, setCities] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [data, setData] = useState({
    type: "",
    city: "",
    experienceName: "",
    venueName: "",
    category: "",
    subCategory: "",
    description: "",
    designation: "",
    names: "",
    email: "",
    phoneNumber: "",
  });

  const validationSchema = Yup.object({
    type: Yup.string().required("Required"),
    city: Yup.string().required("Choose your city"),
    experienceName: Yup.string().required("Required"),
    venueName: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    subCategory: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    designation: Yup.string().required("Required"),
    names: Yup.string()
      .min(2, "Too Short")
      .max(20, "Too long")
      .required("Enter your name"),
    email: Yup.string()
      .email("Invalid Email format")
      .required("Email Required"),
    phoneNumber: Yup.string().required("Phone number required"),
  });

  const handleSubmit = (e) => {
    toast.success("Submit Successfully");
  };

  useEffect(() => {
    debugger;
    axios.get("https://api2.kidzapp.com/api/1.9/cities").then((res) => {
      setCities(res.data);
    });
    axios
      .get("https://api2.kidzapp.com/api/1.9/categories?country_code=ae")
      .then((res) => {
        setCategory(res.data);
      });
    axios.get("https://api2.kidzapp.com/api/1.9/subcategories").then((res) => {
      setSubCategory(res.data);
    });
  }, []);

  return (
    <>
      <div className={style.body}>
        {/* background image section */}

        <section>
          <div className={style.GetListedBanner}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className={` ${style.GetListedBannerWrapper}`}>
                    <h1>Get Listed on Kidzapp</h1>
                    <h2>
                      Expand your reach by listing your business with us. Simply
                      fill out
                      <br /> the form below and you'll hear back from us very
                      soon.
                    </h2>
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
            <div className={style.getListedForm}>
              <div className="container">
                <div className={`row ${style.justifyContentCenter}`}>
                  <div className="col-md-10">
                    <h4>Experiences Information</h4>
                    <div className={style.formGroup}>
                      <label>Type*</label>
                      <Field
                        as="select"
                        style={{ width: "100%", height: "45px" }}
                        name="type"
                      >
                        <option value="">-</option>
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

                      <Field
                        as="select"
                        style={{ width: "100%", height: "45px" }}
                        name="city"
                      >
                        <option value> -</option>
                        {cities.map((list) => {
                          return (
                            <>
                              <option>{list.name}</option>
                            </>
                          );
                        })}
                      </Field>
                      <small className="text-danger m-2">
                        <ErrorMessage name="city" />
                      </small>
                    </div>

                    <div className={style.location}>
                      <label>Location Map</label>
                      <span className={style.drag}>
                        Drag pointer to your location
                        <div id="map">
                          <Map />
                        </div>
                      </span>
                    </div>
                    <div className={style.formGroup}>
                      <label>Experience Name*</label>
                      <Field
                        type="text"
                        className={`${style.formControl} ${style.formInput}`}
                        id="ex_name"
                        name="experienceName"
                      />
                      <small className="text-danger m-2">
                        <ErrorMessage name="experienceName" />
                      </small>
                    </div>
                    <div className={style.formGroup}>
                      <label>Venue Name*</label>
                      <Field
                        type="text"
                        className={`  ${style.formControl}  ${style.formInput}`}
                        id="ex_name"
                        name="venueName"
                      />
                      <small className="text-danger m-2">
                        <ErrorMessage name="venueName" />
                      </small>
                    </div>
                    <div className={style.formGroup}>
                      <label>Category*</label>
                      <Field
                        as="select"
                        style={{ width: "100%", height: "45px" }}
                        name="category"
                      >
                        <option value={""}> -</option>

                        {category.map((list) => {
                          return <option value={list.name}>{list.name}</option>;
                        })}
                      </Field>
                      <small className="text-danger m-2">
                        <ErrorMessage name="category" />
                      </small>
                    </div>
                    <div className={style.formGroup}>
                      <label>Subcategory*</label>
                      <Field
                        as="select"
                        style={{ width: "100%", height: "45px" }}
                        name="subCategory"
                      >
                        <option value=""> -</option>
                        {subcategory.map((list) => {
                          return <option value={list.name}>{list.name}</option>;
                        })}
                      </Field>
                      <small className="text-danger m-2">
                        <ErrorMessage name="subCategory" />
                      </small>
                    </div>
                    <div className={style.formGroup}>
                      <label>Description</label>
                      <Field
                        as="textarea"
                        className={`${style.formControl}`}
                        name="description"
                        id="description"
                      />
                    </div>
                    <h4>Contact Information</h4>
                    <div className={style.formGroup}>
                      <label>Designation*</label>
                      <Field
                        type="text"
                        className={`${style.formControl} ${style.formInput}`}
                        id="designation"
                        name="designation"
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
                        name="names"
                      />
                      <small className="text-danger m-2">
                        <ErrorMessage name="names" />
                      </small>
                    </div>
                    <div className={style.formGroup}>
                      <label>Email*</label>
                      <Field
                        type="text"
                        className={`${style.formControl} ${style.formInput}`}
                        id="email"
                        name="email"
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
                        id="phone-number"
                        name="phoneNumber"
                      />
                      <small className="text-danger m-2">
                        <ErrorMessage name="phoneNumber" />
                      </small>
                    </div>
                    <Recaptcha />
                  </div>
                  <button
                    type="submit"
                    className={`mt-5 ${style.getListedButton}`}
                  >
                    GET LISTED
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>

        <KidzappFeed />
      </div>
    </>
  );
}

export default Getintouch;
