import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material'
import { multiStepContext } from './StepContext'
import style from "./form.module.css"
import * as Yup from 'yup'
import { useFormik } from 'formik'
import {toast } from 'react-toastify'

const Secondstep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext)


  const validationSchema = Yup.object({
    address: Yup.string()
      .required("*Required"),

    landmark: Yup.string()
      .required("*Required"),

    zipCode: Yup.string()
      .required("*Required")
  })

  const onSubmit = (values) => {
    setUserData(values)
    setStep(3)
  }

  const formik = useFormik({
    initialValues:userData,
    onSubmit,
    validationSchema
  })

  return (
    <div className={style.Main}>
      <form  onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            label="Address"
            margin="normal"
            variant='outlined'
            className={style.inputField}
            {...formik.getFieldProps('address')}
          />
          {formik.touched.address && formik.errors.address ? <p className='text-danger errors pl-2'>{formik.errors.address}</p> : null}
        </div>
        <div>
          <TextField
            label="Landmark"
            margin="normal"
            variant='outlined'
            className={style.inputField}
            // value={userData['landmark']}
            // onChange={(e) => setUserData({ ...userData, "landmark": e.target.value })}
            {...formik.getFieldProps('landmark')}
          />
          {formik.touched.landmark && formik.errors.landmark ? <p className='text-danger errors pl-2'>{formik.errors.landmark}</p> : null}
        </div>
        <div>
          <TextField
            label="ZIP Code"
            margin="normal"
            variant='outlined'
            className={style.inputField}
            {...formik.getFieldProps('zipCode')}
          />
          {formik.touched.zipCode && formik.errors.zipCode ? <p className='text-danger errors pl-2'>{formik.errors.zipCode}</p> : null}
        </div>
        <div className={`row ${style.common}`}>
          <div className='col-2'>
            <Button
              variant="contained"
              onClick={() => setStep(1)}
              color="secondary"
            >Back</Button>
          </div>
          <div className='col-2'>
          <Button
            variant='contained'
            type='submit'
          > Next</Button>
          </div>
          <span></span>
        </div>
      </form>

    </div>
  )
}

export default Secondstep