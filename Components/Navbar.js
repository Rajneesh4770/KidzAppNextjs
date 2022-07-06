import style from '../styles/ComponentsCss/Navbar.module.css'
import Link from 'next/link'
function Navbar() {
    return (
      <>
        <nav className={`container ${style.navbar} fixed-top `}>
          {/* <!-- LOGO --> */}
          <div className={`container ${style.logo}`}>
            <Link href='/'>
              <div>
                <img className={style.logoimage}
                  src='https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-logo.png
'
                ></img>
              </div>
            </Link>
          </div>
          {/* <!-- NAVIGATION MENU --> */}
          <ul className={style.navlinks}>
            {/* <!-- USING CHECKBOX HACK --> */}
            <input
              type='checkbox'
              id='checkbox_toggle'
              className={style.hamburgercheck}
            />
            <label htmlFor='checkbox_toggle' className={style.hamburger}>
              &#9776;
            </label>
            {/* <!-- NAVIGATION MENUS --> */}
            <div className={style.menu}>
              <li>
                <Link href='/FindActivities'>
                  FindActivities
                  
                </Link>
              </li>
              <li>
                <Link href='/Blog'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='/'>
                  KidzAppAwards
                </Link>
              </li>
              <li>
                <Link href='/'>
                  KidzAppTV
                </Link>
              </li>
              <li>
                <Link href='/'>
                  GetInTouch
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </>
    );
}

export default Navbar