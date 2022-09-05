import style from "../../styles/kidzappAward.module.css";

const KidzappAward = () => {
  return (
    <>
      <section className={style.section1}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
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
            <div className={`col-md-12 ${style.section2Col}`}>
              <h1 className={style.heading1}>The Journey to the Awards</h1>
              <div className={style.circlesection}>
                <ul className={style.ul}>
                  <li>
                    {" "}
                    <div className={style.circleimg}>
                      <img src="https://drfsb8fjssbd3.cloudfront.net/images/Nomination-open.png" />
                    </div>
                    <h3 className={style.circleimgtext}>Nomination Opens</h3>
                  </li>
                  <li>
                    <div className={style.circleimg}>
                      <img src="https://drfsb8fjssbd3.cloudfront.net/images/Nomination-close-updated.png" />
                    </div>
                    <h3 className={style.circleimgtext}>Nomination Closes</h3>
                  </li>
                  <li>
                    <div className={style.circleimg}>
                      <img src="https://drfsb8fjssbd3.cloudfront.net/images/23rd-july.png" />
                    </div>
                    <h3 className={style.circleimgtext}>Voting Starts</h3>
                  </li>
                  <li>
                    <div className={style.circleimg}>
                      <img src="https://drfsb8fjssbd3.cloudfront.net/images/Nomination02.png" />
                    </div>
                    <h3 className={style.circleimgtext}>Voting Starts</h3>
                  </li>
                  <li>
                    <div className={style.circleimg}>
                      <img src="https://drfsb8fjssbd3.cloudfront.net/images/november-month.png" />
                    </div>
                    <h3 className={style.circleimgtext}>Announcing Winner </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {section3} */}
      <section>
        <div className={style.awardPartner}>
          <div className={`container ${style.awardPartnerContainer}`}>
            <div
              className={`row justify-content-center ${style.awardPartnerRow}`}
            >
              <div className={`col-8 ${style.awardPartnerCol}`}>
                <h2>In Partnership with</h2>
                <img
                  src="https://drfsb8fjssbd3.cloudfront.net/images/Logo-A.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {section4} */}
      <section>
        <div className={style.awardWinners}>
          <div className={`container ${style.awardWinnersContainer}`}>
            <h3>Award Winners</h3>
            <div
              className={`row justify-content-center ${style.winnersMainWrapper} ${style.awardWinnersRow}`}
            >
              <div className={`col-md-12 p-0 ${style.awardWinnersCol}`}>
                <div className={style.winnersOuterSection}>
                  <div className={style.categoryBadgeSection}>
                    <img
                      src="https://drfsb8fjssbd3.cloudfront.net/images/Younger_kids.png"
                      alt="Awards Category"
                      className={style.winnerSectionImg}
                    />
                    <h2 className={style.categoryTitle}>
                      Best for Younger Kids
                    </h2>
                  </div>
                  <div className={style.winnerSection}>
                    <div
                      className={`${style.winnerSectionInner} ${style.goldBlock}`}
                    >
                      <div className={style.leftBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/gold-winner.png"
                          alt="Gold Winner"
                          className={style.winnerSectionImg}
                        />
                        <p>
                          Fun Block
                          <span>Gold Winner</span>
                        </p>
                      </div>
                      <div className={style.rightBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/fun-block.jpeg"
                          alt="Gold Winner"
                        />
                      </div>
                    </div>
                    <div className={`${style.winnerSectionInner} silverBlock`}>
                      <div className={style.leftBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/silver-winner.png"
                          alt="Silver Winner"
                          className={style.winnerSectionImg}
                        />
                        <p>
                          Mattel Playtown
                          <span>Silver Winner</span>
                        </p>
                      </div>
                      <div className={style.rightBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/plat-town.jpg"
                          alt="Silver Winner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-md-12 p-0 ${style.awardWinnersCol}`}>
                <div className={style.winnersOuterSection}>
                  <div className={style.categoryBadgeSection}>
                    <img
                      src="https://drfsb8fjssbd3.cloudfront.net/images/Best_for_Older_Kids.png"
                      alt="Awards Category"
                      className={style.winnerSectionImg}
                    />
                    <h2 className={style.categoryTitle}>Best for Older Kids</h2>
                  </div>
                  <div className={style.winnerSection}>
                    <div
                      className={`${style.winnerSectionInner} ${style.goldBlock}`}
                    >
                      <div className={style.leftBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/gold-winner.png"
                          alt="Gold Winner"
                          className={style.winnerSectionImg}
                        />
                        <p>
                          Fun City
                          <span>Gold Winner</span>
                        </p>
                      </div>
                      <div className={style.rightBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/fun-city.jpg"
                          alt="Gold Winner"
                        />
                      </div>
                    </div>
                    <div className={`${style.winnerSectionInner} silverBlock`}>
                      <div className={style.leftBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/silver-winner.png"
                          alt="Silver Winner"
                          className={style.winnerSectionImg}
                        />
                        <p>
                          IMG World Of Adventures
                          <span>Silver Winner</span>
                        </p>
                      </div>
                      <div className={style.rightBlock}>
                        <img
                          src="	https://drfsb8fjssbd3.cloudfront.net/images/img-worlds.jpg"
                          alt="Silver Winner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-md-12 p-0 ${style.awardWinnersCol}`}>
                <div className={style.winnersOuterSection}>
                  <div className={style.categoryBadgeSection}>
                    <img
                      src="https://drfsb8fjssbd3.cloudfront.net/images/Best_for_Water_Fun.png"
                      alt="Awards Category"
                      className={style.winnerSectionImg}
                    />
                    <h2 className={style.categoryTitle}>Best for Water Fun</h2>
                  </div>
                  <div className={style.winnerSection}>
                    <div
                      className={`${style.winnerSectionInner} ${style.goldBlock}`}
                    >
                      <div className={style.leftBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/gold-winner.png"
                          alt="Gold Winner"
                          className={style.winnerSectionImg}
                        />
                        <p>
                          Yas Waterworld
                          <span>Gold Winner</span>
                        </p>
                      </div>
                      <div className={style.rightBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/yas-waterworld.jpg"
                          alt="Gold Winner"
                        />
                      </div>
                    </div>
                    <div className={`${style.winnerSectionInner} silverBlock`}>
                      <div className={style.leftBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/silver-winner.png"
                          alt="Silver Winner"
                          className={style.winnerSectionImg}
                        />
                        <p>
                          Laguna Waterpark
                          <span>Silver Winner</span>
                        </p>
                      </div>
                      <div className={style.rightBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/water-park.jpg"
                          alt="Silver Winner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-md-12 p-0 ${style.awardWinnersCol}`}>
                <div className={style.winnersOuterSection}>
                  <div className={style.categoryBadgeSection}>
                    <img
                      src="https://drfsb8fjssbd3.cloudfront.net/images/Best_Birthday_Venue.png"
                      alt="Awards Category"
                      className={style.winnerSectionImg}
                    />
                    <h2 className={style.categoryTitle}>Best for Birthdays</h2>
                  </div>
                  <div className={style.winnerSection}>
                    <div
                      className={`${style.winnerSectionInner} ${style.goldBlock}`}
                    >
                      <div className={style.leftBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/gold-winner.png"
                          alt="Gold Winner"
                          className={style.winnerSectionImg}
                        />
                        <p>
                          Cheeky Monkeys
                          <span>Gold Winner</span>
                        </p>
                      </div>
                      <div className={style.rightBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/cheeky-monkeys.jpg"
                          alt="Gold Winner"
                        />
                      </div>
                    </div>
                    <div className={`${style.winnerSectionInner} silverBlock`}>
                      <div className={style.leftBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/silver-winner.png"
                          alt="Silver Winner"
                          className={style.winnerSectionImg}
                        />
                        <p>
                          Kids HQ
                          <span>Silver Winner</span>
                        </p>
                      </div>
                      <div className={style.rightBlock}>
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/kids-hq.jpg"
                          alt="Silver Winner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KidzappAward;
