import React from 'react'
import style from '../styles/ComponentsCss/Footer.module.css';
import Link from 'next/link';
import { BsYoutube, BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';
function Footer() {
  return (
    <>
      <div className={`container-fluid ${style.footer}`}>
        <div className={`container row ${style.maincontainer}`}>
          <div className='col-lg-2'>
            <ul>
              <h6>Kidz activities by Category</h6>
              <Link href='/'>
               <li> Exclusive on kidz app</li>
              </Link>
              <Link href='/Spring Fun'>
                <li> Spring Fun</li>
              </Link>
              <Link href='/AfterSchool activities'>
                <li> AfterSchool activities</li>
              </Link>
              <Link href='/Animal Fun'>
                <li> Animal Fun</li>
              </Link>
              <Link href='/Art, Music & Dance'>
                <li> Art, Music & Dance</li>
              </Link>
            </ul>
          </div>

          <div className='col-lg-2'>
            <ul>
              <h6>Kidz activities by Category</h6>
              <Link href='/Baby'>
                <li> Baby & hrefddler</li>
              </Link>
              <Link href='/Birthdays'>
                <li> Birthdays</li>
              </Link>
              <Link href='/Courses '>
                <li> Courses,Camps & Workshops</li>
              </Link>
              <Link href='/Eat '>
                <li> Eat Out</li>
              </Link>
              <Link href='/Explore '>
                <li> Explore the city</li>
              </Link>
            </ul>
          </div>

          <div className='col-lg-2'>
            <ul>
              <h6>Family Activity</h6>
              <Link href='/Venues '>
                <li> Venues</li>
              </Link>
              <Link href='/Courses '>
                <li> Courses</li>
              </Link>
              <Link href='/Events '>
                <li> Events</li>
              </Link>

              <li> </li>
              <li> </li>
            </ul>

            <br />
            <br />
            <ul>
              <li></li>
            </ul>
            <ul>
              <h6>Indoor/Outdoor kids Activity</h6>
              <Link href='/Indoor '>
                <li> Indoor</li>
              </Link>
              <Link href='/Outdoor '>
                <li> Outdoor</li>
              </Link>
            </ul>
          </div>

          <div className='col-lg-2'>
            <ul>
              <h6>Others</h6>
              <Link href='/activities '>
                <li> Find activities</li>
              </Link>
              <Link href='/Shrefry '>
                <li> Our Shrefry</li>
              </Link>
              <Link href='/app '>
                <li> About the app</li>
              </Link>
              <Link href='/hrefuch '>
                <li> Get in hrefuch</li>
              </Link>
              <Link href='/Blog '>
                <li> Blog</li>
              </Link>
              <Link href='/map '>
                <li> Site map</li>
              </Link>
            </ul>

            <ul>
              <h6>Legal</h6>
              <Link href='/Policy '>
                <li> Privacy Policy</li>
              </Link>
              <Link href='/Term '>
                <li> Term & Conditions</li>
              </Link>
              <Link href='/Cancellation '>
                <li> Cancellation Policy</li>
              </Link>
            </ul>
          </div>

          <div className='col-lg-2'>
            <div>
              <ul>
                <h6>Available on</h6>
                <Link href='https://apps.apple.com/us/app/kidzapp-dubai-family-guide/id1255769149'>
                  <li>
                    <img
                      src='https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-app-store.svg'
                      alt=''
                      className={style.img1}
                    />
                  </li>
                </Link>
                <br />
                <Link href='https://play.google.com/store/apps/details?id=com.kidzapp'>
                  <li>
                    <img
                      src='https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-google-play.svg'
                      alt=''
                      className={style.img2}
                    />
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className='col-lg-2'>
            <div>
              <ul>
                <h6>Follow us on</h6>
                <Link href='https://www.facebook.com/kidzappAE/'>
                  <li className={style.iconEffect}>
                    {' '}
                    <BsFacebook /> Facebook
                  </li>
                </Link>

                <Link href='https://www.instagram.com/accounts/login/?next=/kidzappuae/'>
                  <li className={style.iconEffect}>
                    {' '}
                    <BsInstagram /> Instagram
                  </li >
                </Link>
                <Link href='https://www.youtube.com/channel/UCcWhXfXzQ8cbVvJC3cGgu2Q'>
                  <li className={style.iconEffect}>
                    {' '}
                    <BsYoutube /> Youtube
                  </li>
                </Link>
                <Link href='https://api.whatsapp.com/send?phone=971566578854&text=Hi%2C+I%27m+browsing+home+screen+and+have+some+questions'>
                  <li className={style.iconEffect}>
                    {' '}
                    <BsWhatsapp /> Whatsapp
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <br />

        <center>
          {' '}
          <span>Copyright © 2022 kidzapp.com. All Rights Reserved</span>
        </center>
      </div>
    </>
  );
}

export default Footer