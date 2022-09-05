import React from 'react';
import { Rating } from '@mui/material';
import { FcLike } from 'react-icons/fc';

import style from './style.module.css';

const WishList = () => {
	return (
		<div className={style.body}>
			<section className={style.section1}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 p-0">
							<div className={style.topbackground}>
								<h1 style={{ color: 'black', fontWeight: '400px' }}>
									WishList
								</h1>
								<p>
									To add or remove an item from the wishlist, click the heart
									icon on any event or activity.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="text-center">
								<button
									type="button"
									className="btn btn-outline-info m-2 mb-4 mt-4"
								>
									<span className=""> Activities</span>
								</button>

								<button
									type="button"
									class="btn btn-outline-danger  m-2 mb-4 mt-4"
								>
									<span className=""> Kidsapp Tv</span>
								</button>
							</div>
						</div>
					</div>

					<div class="row p-3">
						<div className="col-lg-6 col-md-6 col-sm-12 mb-2">
							<div className={style.boxWrap}>
								<div className={style.imggBox}>
									<img
										className={`img-fluid `}
										src="https://images.kidzapp.com/media/CACHE/images/venues/7f51c17a-8e29-488b-8146-425bda4465d5/splash-pad-at-dubai-hills-park.jpg"
										alt=""
									/>
									<div className={style.rating}>
										<Rating name="size-small" defaultValue={5} size="small" />
									</div>
								</div>

								<div className={style.imgText}>
									<FcLike className={style.hearticon} />
									<h5>Dubai Hills Park</h5>
									<p>Splash Pad at Dubai Hills Park </p>
									<div className={style.rating}>
										<sm className="p-2">
											Get 1 AED cashback, when you book through our mobile app!
										</sm>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 mb-2">
							<div className={style.boxWrap}>
								<div className={style.imggBox}>
									<img
										className={`img-fluid `}
										src="https://images.kidzapp.com/media/CACHE/images/venues/7f51c17a-8e29-488b-8146-425bda4465d5/splash-pad-at-dubai-hills-park.jpg"
										alt=""
									/>
									<div className={style.rating}>
										<Rating name="size-small" defaultValue={5} size="small" />
									</div>
								</div>

								<div className={style.imgText}>
									<FcLike className={style.hearticon} />
									<h5>Dubai Hills Park</h5>
									<p>Splash Pad at Dubai Hills Park</p>
									<div className={style.rating}>
										<sm className="p-2">
											Get 1 AED cashback, when you book through our mobile app!
										</sm>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row p-3">
						<div className="col-lg-6 col-md-6 col-sm-12 mb-2">
							<div className={style.boxWrap}>
								<div className={style.imggBox}>
									<img
										className={`img-fluid `}
										src="https://images.kidzapp.com/media/CACHE/images/venues/7f51c17a-8e29-488b-8146-425bda4465d5/splash-pad-at-dubai-hills-park.jpg"
										alt=""
									/>
									<div className={style.rating}>
										<Rating name="size-small" defaultValue={5} size="small" />
									</div>
								</div>

								<div className={style.imgText}>
									<FcLike className={style.hearticon} />
									<h5>Dubai Hills Park</h5>
									<p>Splash Pad at Dubai Hills Park </p>
									<div className={style.rating}>
										<sm className="p-2">
											Get 1 AED cashback, when you book through our mobile app!
										</sm>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 mb-2">
							<div className={style.boxWrap}>
								<div className={style.imggBox}>
									<img
										className={`img-fluid `}
										src="https://images.kidzapp.com/media/CACHE/images/venues/7f51c17a-8e29-488b-8146-425bda4465d5/splash-pad-at-dubai-hills-park.jpg"
										alt=""
									/>
									<div className={style.rating}>
										<Rating name="size-small" defaultValue={5} size="small" />
									</div>
								</div>

								<div className={style.imgText}>
									<FcLike className={style.hearticon} />
									<h5>Dubai Hills Park</h5>
									<p>Splash Pad at Dubai Hills Park</p>
									<div className={style.rating}>
										<sm className="p-2">
											Get 1 AED cashback, when you book through our mobile app!
										</sm>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default WishList;
