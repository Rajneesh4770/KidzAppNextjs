import React from 'react'
import style from './style/HomeButton.module.css';
import toast,{ Toaster } from 'react-hot-toast';

import getResponseMessage from '../../language/multilingualServices';
import { constants } from '../Navbar';

function HomeButton() {
  return (
    <>
      <center>
        <button className={style.button17}
        onClick={()=>toast('Now You See All ')}
        >{getResponseMessage(constants).view_all}</button>
      </center>
      <Toaster/>
    </>
  );
}

export default HomeButton