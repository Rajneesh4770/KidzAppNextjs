import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material'
import { multiStepContext } from "./StepContext"
import style from './form.module.css'

const ThirdStep = () => {

  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext)
  const buttons = [
    {
      id: '0',
      btn: 'Below 1'
    },
    {
      id: '1',
      btn: '1'
    },
    {
      id: '2',
      btn: '2'
    },
    {
      id: '3',
      btn: '3'
    },
    {
      id: '4',
      btn: '4'
    },
    {
      id: '5',
      btn: '5'
    },
    {
      id: '6',
      btn: '6'
    },
    {
      id: '7',
      btn: '7'
    },
    {
      id: '8',
      btn: '8'
    },
    {
      id: '9',
      btn: '9'
    },
    {
      id: '10',
      btn: '10'
    },
    {
      id: '11',
      btn: '11'
    },
    {
      id: '12',
      btn: '12-16'
    },
    {
      id: '13',
      btn: '17'
    },
    {
      id: '14',
      btn: '18'
    },
  ]
  return (
    <div className={style.Main}>
      <h5>Ages</h5>
      <p>We use your children's age to personalize Kidzapp.</p>
      <div className={`row ${style.buttons}`}>
        {buttons.map((item,i) => (
          <div className="col-4" key={i} >
            <Button
              label="btn"
              margin='normal'
              className={`${style.formBtn} ${userData['btn']==item.btn?style.selected:null}`}
              value={item.btn}
              onClick={(e) => setUserData({ ...userData, "btn": e.target.value })} 
            >{item.btn}</Button>
          </div>
        ))}
      </div>
      <div>
        <Button
          label="btn"
          margin='normal'
          className={`${style.formBtn} ${style.allAgeBtn}`}
          value={userData['btn']}
          onChange={(e) => setUserData({ ...userData, "btn": e.target.value })}
        >All Ages</Button>
      </div>
      <p>By providing us with the ages of your children <br />we're about to show you activities that are <br />appropriate for their ages.</p>
      <div className={`row ${style.common}`}>
        <div className='col-2'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setStep(2)}
          >Back</Button>
        </div>
        <div className='col-2'>
          <Button
            variant='contained'
            color='success'
            onClick={submitData}
          >Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default ThirdStep