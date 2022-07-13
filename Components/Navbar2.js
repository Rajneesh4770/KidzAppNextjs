import React from 'react'
import style from '../styles/ComponentsCss/Navbar2.module.css'
function Navbar2() {
    var prevScrollpos = global.window;
global.window.onscroll = function() {
  var currentScrollPos = global.window.pageYOffset;
  
  prevScrollpos = currentScrollPos;
}
  return (
    <>
    {prevScrollpos > currentScrollPos ? <div className={style.Navbar}> 
  <a className={style.a} href="#home">Home</a>
  <a className={style.a} href="#news">News</a>
  <a className={style.a} href="#contact">Contact</a>
</div>
: <div className={style.Navbar1}>
    <a className={style.a} href="#home">Home</a>
  <a className={style.a} href="#news">News</a>
  <a className={style.a} href="#contact">Contact</a>
</div>
}
    </>
  )
}

export default Navbar2