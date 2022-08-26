import React, { useContext, useState } from 'react'
import { Button, TextField, MenuItem } from '@mui/material'
import { multiStepContext } from './StepContext'
import style from './form.module.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Firststep = () => {

  const { setStep, userData, setUserData } = useContext(multiStepContext)

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('*Required'),

    lastName: Yup.string()
      .required("*Required"),

    email: Yup.string()
      .email("Invalid Email format")
      .required("*Required"),

    code: Yup.string()
      .required("Required"),

    phoneNumber: Yup.string()
      .required("Required")

  })

  const onSubmit = (values) => {
    setUserData(values);
    setStep(2)
  }

  const formik = useFormik({
    initialValues:userData,
    onSubmit,
    validationSchema
  })

  const countries = [
    {
      value: '0',
      label: 'United Arab Emirates (+971)'
    },
    {
      value: "1",
      label: 'India (+91)'
    },
    {
      value: "2",
      label: 'UK (+44)'
    },
    {
      value: "3",
      label: 'USA (+1)'
    },
    {
      value: "4",
      label: 'USA (+1)'
    },
    {
      value: "5",
      label: 'Algeria (+213)'
    },
    {
      value: "6",
      label: 'Austria (+61)'
    },
    {
      value: "7",
      label: 'Argentina (+54)'
    },
    {
      value: "8",
      label: 'Bahamas (+1242)'
    },
    {
      value: "9",
      label: 'Bangladesh (+880)'
    },
    {
      value: "10",
      label: 'Belarus (+375)'
    },
  ];

  return (
    <div className={style.Main}>
      <form className='' onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            label="First Name"
            margin='normal'
            variant='outlined'
            className={style.inputField}
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? <p className='text-danger error pl-2'>{formik.errors.firstName}</p>: null}
        </div>
        <div>
          <TextField
            label="Last Name"
            margin='normal'
            variant='outlined'
            className={style.inputField}
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName ? <p className='text-danger error pl-2'>{formik.errors.lastName}</p> : null}
        </div>
        <div>
          <TextField
            label="Email Address"
            margin='normal'
            variant='outlined'
            className={style.inputField}
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? <p className='text-danger error pl-2'>{formik.errors.email}</p>: null}
        </div>
        <div>
          <TextField
            id='outlined-select-country'
            select
            label="Select"
            margin='normal'
            variant='outlined'
            className={style.inputField}
            value={userData["Phone"]}
            helperText='Select your country'
            onChange={(e) => {
              setUserData({ ...userData, "Phone": e.target.value });
            }}
            {...formik.getFieldProps('code')}
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            {formik.touched.code && formik.errors.code ? <p className='text-danger error pl-2'>{formik.errors.code}</p> :null}
          </TextField>
        </div>
        <div>
          <TextField
            label="Phone Number"
            margin='normal'
            variant='outlined'
            className={style.inputField}
            {...formik.getFieldProps('phoneNumber')}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p className='text-danger error pl-2'>{formik.errors.phoneNumber}</p> :null}
        </div>
        <div>
          <Button
            variant='contained'
            type='submit'
          >Save & Next</Button>
        </div>
      </form>

    </div>
  )
}

export default Firststep