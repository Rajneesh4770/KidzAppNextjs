// import { Carousel } from "react-bootstrap";
// export const getStaticProps =async ()=>{
//     const res = await fetch('https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=featured_banner_uae&country_code=ae&page=1&page_size=10&city=&website=1&lang=ar')
//     const data = await res.json();
//     return{
//         props:{apidata:data}
//     }
// }
// const apidata=({apidata})=>{
//     return(
//         <>
// <Carousel>
       
//             {apidata.map(item=>{

          
//             <Carousel.Item key={item.id}>
//               <img
//                 className={style.crouselImages}
//                 src={item.image_url}
//                 alt="https://c4.wallpaperflare.com/wallpaper/921/18/419/loading-black-background-wallpaper-preview.jpg"
//               />
//               <Carousel.Caption>
//                 <h1 className={style.crouselHeading}>hello</h1>
//                 <p className={style.crouselParagraph}>a content id displayed and we can easily see this content on crousel</p>
//                 <Link href="/Booking">
//                 <button
//                   className={`btn ${style.button}`}
//                   onClick={() => toast("Successfully Booked")}
//                 >
//                   Book Now
//                 </button></Link>
//               </Carousel.Caption>
//             </Carousel.Item>
//             })}
//         ;
//       </Carousel>
//         </>
//     )
// }
import axios, { Axios } from 'axios'
import style from '../styles/ComponentsCss/HomePageComponents/HomeCrousel.module.css'
import { Carousel } from "react-bootstrap";
import useSWR from 'swr'
const fetcher =url =>Axios.get(url).then(res=>res.data.results)
function Profile () {
  const { data, error } = useSWR('https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=featured_banner_uae&country_code=ae&page=1&page_size=10&city=&website=1&lang=ar', fetcher)
console.log("data",res.data.results)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <>
   <Carousel className=''>
         {data.map(item=>{
         <Carousel.Item key={item.id}>
               <img
                 className={style.crouselImages}
                 src={item.image_url}
                 alt="https://c4.wallpaperflare.com/wallpaper/921/18/419/loading-black-background-wallpaper-preview.jpg"
               />
               <Carousel.Caption>
                 <h1 className={style.crouselHeading}>hello</h1>
                 <p className={style.crouselParagraph}>a content id displayed and we can easily see this content on crousel</p>
                 <Link href="/Booking">
                <button
                   className={`btn ${style.button}`}
                   onClick={() => toast("Successfully Booked")}
                 >
                   Book Now
                 </button></Link>
               </Carousel.Caption>
             </Carousel.Item>
              })};
        </Carousel>
          </>
}
export default Profile;

