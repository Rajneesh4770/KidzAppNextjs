import React from 'react'
import {  useFormik } from 'formik'
import * as Yup from 'yup';
const try1 = () => {
  

  const formik =useFormik({
    initialValues:{
      name :'',
      email:'',
      password:'',
    },
    validationSchema:Yup.object({
      name:Yup.string()
      .max(5,'must be 5 char or less')
      .required('Required'),
      email:Yup.string()
      .email('invalid email address')
      .required('Required'),

    }),
    onSubmit:values=>{
      alert(JSON.stringify(values));
    }

    
  })

 
  

  return (
    <div style={{marginTop:'150px',marginBottom:'50px'}}>
      <div className='container'>

        <form className='form-control' onSubmit={formik.handleSubmit}>

          <input className='form-control' type='test' name='name' onChange={formik.handleChange} values={formik.values.name} placeholder='name'/><br/>
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div>:null}
          <input className='form-control' type='email' name='email' onChange={formik.handleChange} vlaues={formik.values.email} placeholder='email'></input><br/>
          {formik.touched.email && formik.errors.name ? <div>{formik.errors.email}</div>:null}
          <input className='form-control' type='password' name='password' onChange={formik.handleChange} values={formik.values.password} placeholder='password'></input><br/>
          <button className='btn btn-primary'  type='submit'>Submit</button>
        </form>
    </div>
    </div>

  )
}

export default try1