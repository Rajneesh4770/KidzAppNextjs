import React from 'react'
import style from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from "next/image";
import { BsYoutube, BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';
function Footer() {
  return (
    <>
      <footer className={style.footer}>


        <div className={`container row ${style.maincontainer}`}>
          <div className='col-lg-2 col-md-4 col-sm-6'>
            <ul>
              <h6>Kidz activities by Category</h6>
              <Link href='/FindActivities'>
                <li className={style.iconEffect}> Exclusive on kidz app</li>
              </Link>
              <Link href='/FindActivities '>
                <li className={style.iconEffect}> Spring Fun</li>
              </Link>
              <Link href='/FindActivities'>
                <li className={style.iconEffect}> AfterSchool activities</li>
              </Link>
              <Link href='/FindActivities'>
                <li className={style.iconEffect}> Animal Fun</li>
              </Link>
              <Link href='/FindActivities'>
                <li className={style.iconEffect}> Art, Music & Dance</li>
              </Link>
            </ul>
          </div>

          <div className='col-lg-2 col-md-4 col-sm-6'>
            <ul>
              <h6>Kidz activities by Category</h6>
              <Link href='/Baby'>
                <li className={style.iconEffect}> Baby & hrefddler</li>
              </Link>
              <Link href='/Birthdays'>
                <li className={style.iconEffect}> Birthdays</li>
              </Link>
              <Link href='/Courses '>
                <li className={style.iconEffect}> Courses,Camps & Workshops</li>
              </Link>
              <Link href='/Eat '>
                <li className={style.iconEffect}> Eat Out</li>
              </Link>
              <Link href='/Explore '>
                <li className={style.iconEffect}> Explore the city</li>
              </Link>
            </ul>
          </div>

          <div className='col-lg-2 col-md-4 col-sm-6'>
            <ul>
              <h6>Family Activity</h6>
              <Link href='/Venues '>
                <li className={style.iconEffect}> Venues</li>
              </Link>
              <Link href='/Courses '>
                <li className={style.iconEffect}> Courses</li>
              </Link>
              <Link href='/Events '>
                <li className={style.iconEffect}> Events</li>
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
                <li className={style.iconEffect}> Indoor</li>
              </Link>
              <Link href='/Outdoor '>
                <li className={style.iconEffect}> Outdoor</li>
              </Link>
            </ul>
          </div>

          <div className='col-lg-2 col-md-4 col-sm-6'>
            <ul>
              <h6>Others</h6>
              <Link href='/activities '>
                <li className={style.iconEffect}> Find activities</li>
              </Link>
              <Link href='/Shrefry '>
                <li className={style.iconEffect}> Our Shrefry</li>
              </Link>
              <Link href='/app '>
                <li className={style.iconEffect}> About the app</li>
              </Link>
              <Link href='/hrefuch '>
                <li className={style.iconEffect}> Get in hrefuch</li>
              </Link>
              <Link href='/Blog '>
                <li className={style.iconEffect}> Blog</li>
              </Link>
              <Link href='/map '>
                <li className={style.iconEffect}> Site map</li>
              </Link>
            </ul>

            <ul>
              <h6 className='pt-3'>Legal</h6>
              <Link href='/PrivacyPolicy '>
                <li className={style.iconEffect}> Privacy Policy</li>
              </Link>
              <Link href='/TermCondition '>
                <li className={style.iconEffect}> Term & Conditions</li>
              </Link>
              <Link href='/Cancellation '>
                <li className={style.iconEffect}> Cancellation Policy</li>
              </Link>
            </ul>
          </div>

          <div className='col-lg-2 col-md-4 col-sm-6'>
            <div>
              <ul>
                <h6>Available on</h6>
                <Link href='https://apps.apple.com/us/app/kidzapp-dubai-family-guide/id1255769149'>
                  <li className={style.iconEffect}>
                    <img
                      src='https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-app-store.svg'
                      alt=''
                      className={style.img1}
                    />
                  </li>
                </Link>
                <br />
                <Link href='https://play.google.com/store/apps/details?id=com.kidzapp'>
                  <li className={style.iconEffect}>
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

          <div className='col-lg-2 col-md-4 col-sm-6'>
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
          <hr></hr>
          {/* <br /> */}

          <center className={style.copyrightdiv}>
            {' '}
            <span>Copyright © 2022 kidzapp.com. All Rights Reserved</span>
          </center>

          <div className={`row ${style.chatbot}`}>
            <div className='col'>
              <a>
                <i>
                  <img src='https://www.code-brew.com/wp-content/uploads/2019/06/whatsapp-logo.png' className={style.whatsappImg} />
                </i>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}


export default Footer