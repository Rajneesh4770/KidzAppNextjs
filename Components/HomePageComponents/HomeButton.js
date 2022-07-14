import React from 'react'
import style from '../../styles/ComponentsCss/HomePageComponents/HomeButton.module.css';
import toast,{ Toaster } from 'react-hot-toast';
function HomeButton() {
  return (
    <>
      <center>
        <button className={style.button17}
        onClick={()=>toast('Now You See All')}
        >View All</button>
      </center>
      <Toaster/>
    </>
  );
}

export default HomeButton