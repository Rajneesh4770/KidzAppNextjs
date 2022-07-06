import { style } from '@mui/system'
import React from 'react'
import style1 from '../styles/FindActivities.module.css'
function FindActivities() {
  return (
    <div className={style1.body}>
    <section className={style1.section1}>
    <div className={`container`} >
      <div className="row">
        <div className="col-lg-12 md-12 sm-12 ">
        <input type="search" id="query" name="q"
   placeholder="Search..."
   aria-label="Search through site content"></input>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default FindActivities