import React from 'react'
import style from '../styles/SubKidzapproved.module.css'
const SubKidzapproved = () => {
  return (
    <>
    <section className={style.section1}>
        <div className='container-fluid m-0 p-0'>
            <div className='row'>
                <div className='col-12'>
                    <div className={style.topbackground}>
                      <div className='container d-flex'>
                        <img  src='https://testimages.kidzapp.com/media/lists/Deals%3A%20Big%20Attractions_bd5fafdc-6791-4ae0-b02f-416d384af321.jpg' alt=''></img>
                        <div className={style.heading}>
                        <h1>Birthday Deals</h1>
                        <h5>Our list of Kidzapp birthday deals</h5></div>
                      </div>
                    </div>
                </div>

            </div>

        </div>
        <div className='container'>
            <div className='row pt-4'>
                <div className='col-lg-4 sm-6'>
                <div className={`card mb-3  ${style.card}`}>
										<img
											className={`card-img-top ${style.cardimg}`}
											src="https://images.kidzapp.com/media/venues/d7535285-797c-4114-a306-164a81d648de/kidzania-dubai.jpeg"
											alt="..."
										/>
										<img
											src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg"
											className={style.cardimg2}
										/>
										<img
											src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
											className={style.dealimg}
										/>
										<div className="card-body">
											<h5 className="card-title">KidZania Dubai</h5>
											<h6 className={`card-title ${style.secondheading} pt-2`}>
												The Dubai Mall, Downtown
											</h6>
											<span>
												<del>AED 99</del>
											</span>{' '}
											&nbsp; <span style={{ color: 'red' }}> AED 79</span>
										</div>
									</div>
                </div>

            </div>

        </div>

    </section>
    
    </>
  )
}

export default SubKidzapproved