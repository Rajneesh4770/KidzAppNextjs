import { useState, useEffect } from 'react';
import Link from 'next/link';
import getResponseMessage from '../../Language/multilingualServices';
import { constants } from '../Navbar';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import HomeButton from './HomeButton';
import style from '../../styles/ComponentsCss/HomePageComponents/HomeHandpicked.module.css';
import {
	Typography,
	CardContent,
	CardMedia,
	CardActions,
	Button,
	Card,
	Rating,
} from '@mui/material';
function HomeHandpicked() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: (
			<Typography className={style.typography}>
				<ArrowBackIosNew className={style.backarrow} />
			</Typography>
		),
		nextArrow: (
			<Typography className={style.typography}>
				<ArrowForwardIos className={style.forwardarrow} />
			</Typography>
		),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 800,
				settings: {
					dots: false,
					slidesToShow: 3,
					arrows: false,
					autoplay: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					slidesToShow: 2,
					arrows: false,
					autoplay: true,
				},
			},
		],
	};
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('https://api2.kidzapp.com/api/3.0/lists?country_code=ae')
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => console.log(err, 'error'));
	}, []);

	const settings1 = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	const [newlanguage, setNewlanguage] = useState(constants);
	const [resData1, setResData1] = useState([]);
	const [activeTab, setActiveTab] = useState('hearts_day_fun');
	useEffect(() => {
		axios
			.get(
				`https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=${activeTab}&country_code=&page=1&page_size=10&city=&website=1`,
			)
			.then((res) => {
				setResData1(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [activeTab]);

	useEffect(() => {
		setNewlanguage(constants);
	}, [constants]);
	const notify = () => toast('Login & Book here');

	return (
		<div className={style.background}>
			{/* Headings */}

			<div className={`${style.headingDiv}`}>
				<h1 className={style.heading}>
					{getResponseMessage(constants).find_best_place_uae}{' '}
				</h1>
				<h1 className={style.h1}>
					{getResponseMessage(constants).hand_pick_exp}
				</h1>
				<p className={style.p}>
					{
						getResponseMessage(constants)
							.Our_pick_of_the_best_kids_activities_in_UAE
					}
				</p>
			</div>

			<div className={`container modifiedSlickBtn ${style.buttonRow}`}>
				<div className="row">
					<Slider {...settings}>
						{data?.map((item) => (
							<div className="col-lg-12" key={item.id}>
								<div className={style.buttondiv} key={item.id}>
									<button
										onClick={() => setActiveTab(item.internal_name)}
										className={style.button14}
										role="button"
									>
										{item.name}
									</button>
								</div>
							</div>
						))}
					</Slider>
					<br />
				</div>
			</div>

			<div className={`container ${style.card1}`}>
				<div className="row">
					<Slider className={style.mainslider} {...settings1}>
						{resData1?.map((item) => (
							<div className="col-lg-4" key={item.id}>
								<div className={`card ${style.card}`}>
									<img
										className={`card-img-top ${style.cardimage}`}
										src={item.image_url}
										alt="Card image cap"
									/>
									<img
										src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
										className={style.dealimg}
									/>
									<div className="card-body">
										<h5 className={`card-title ${style.itemTitle} `}>
											{item.title}
										</h5>
										<p className="card-text">{item.brief_address}</p>
										<div>
											<Rating
												name="read-only"
												value={item.average_rating}
												readOnly
											/>
										</div>
										<div>
											<span style={{ color: 'red' }}>
												<del>
													<b>AED 120</b>
												</del>
											</span>
											&nbsp;
											<span>
												<b>AED 99</b>
											</span>
											<Link href="/Booking">
												<a className="btn btn-success float-end">Book Now</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<Link href="/AllReviews">
							<center>
								<button className={style.button}>View All</button>
							</center>
						</Link>
					</div>
				</div>
			</div>

			<Toaster />
		</div>
	);
}

export default HomeHandpicked;
