import * as Yup from 'yup';

const getListedValidationSchema = Yup.object({
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

export default getListedValidationSchema;
