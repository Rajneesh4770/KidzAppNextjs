import style from "../styles/kidzappAward.module.css";
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

            </div>


        </div>

      </section>
    </>
  );
};

export default KidzappAward;
