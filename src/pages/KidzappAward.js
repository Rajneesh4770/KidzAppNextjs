import style from "../styles/kidzappAward.module.css";
import Slider from "react-slick";
const KidzappAward = () => {
  
  return (
    <>
      <section className={style.section1}>
        <div className="container-flex">
          <div className="row">
            <div className="col-lg-12">
            
              <img
                className={style.image1}
                src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-awards-banner.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className={style.section2}>
        <div className="container">
            <div className="row">
                <div className='col-lg-12'>
                    <h1 className={style.heading1}>The Journey to the Awards</h1>
                </div>
                <div className="col-lg-12">
                  <div className={style.circlesection}>
                    <ul className={style.ul}>

                   <li> <div className={style.circleimg}><img src="https://drfsb8fjssbd3.cloudfront.net/images/Nomination-open.png"/></div>
                   <h3 className={style.circleimgtext}>Nomination Opens</h3>
                   </li>
                   <li><div className={style.circleimg}><img src="https://drfsb8fjssbd3.cloudfront.net/images/Nomination-close-updated.png"/></div>
                   <h3 className={style.circleimgtext}>Nomination Closes</h3>
                   </li>
                   <li><div className={style.circleimg}><img src="https://drfsb8fjssbd3.cloudfront.net/images/23rd-july.png"/></div>
                   <h3 className={style.circleimgtext}>Voting Starts</h3></li>
                   <li><div className={style.circleimg}><img src="https://drfsb8fjssbd3.cloudfront.net/images/Nomination02.png"/></div>
                   <h3 className={style.circleimgtext}>Voting Starts</h3></li>
                   <li><div className={style.circleimg}><img src="https://drfsb8fjssbd3.cloudfront.net/images/november-month.png"/></div>
                   <h3 className={style.circleimgtext}>Announcing Winner </h3></li>
                 </ul>
                </div>
                </div>
            </div>


        </div>

      </section>
    </>
  );
};

export default KidzappAward;
