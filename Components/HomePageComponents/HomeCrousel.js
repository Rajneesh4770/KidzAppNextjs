import React, { useEffect, useState } from 'react'
import { Carousel } from "react-bootstrap"
import Axios from 'axios'
import toast,{ Toaster } from 'react-hot-toast';
import style from '../../styles/ComponentsCss/HomePageComponents/HomeCrousel.module.css';
function HomeCrousel() {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=featured_banner_uae&country_code=&page=1&page_size=10&city=&website=1")
            .then((res) => {
                setData(res.data.results)
                console.log("data",res.data.results)
            })
    }, [])
    return (
        <>
            <div className='container-flex'>
                <Carousel>
                    {data.map((item) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className={style.crouselImages}
                                    src={item.image_url}
                                    alt="https://c4.wallpaperflare.com/wallpaper/921/18/419/loading-black-background-wallpaper-preview.jpg"
                                />
                                <Carousel.Caption>
                                    <h1 className={style.crouselHeading}>{item.title}</h1>
                                    <p className={style.crouselParagraph}>{item.description}</p>
                                    <button className={`btn ${style.button}`}
                                    onClick={()=>toast('Successfully Booked')}
                                    >Book Now</button>
                                </Carousel.Caption>

                            </Carousel.Item>
                        )
                    })};
                </Carousel>
            </div>

        </>
    )
}

export default HomeCrousel