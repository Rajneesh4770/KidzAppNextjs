import React from "react";
import { Rating } from "@mui/material";
import { BiTime } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";
import {  Star } from "@mui/icons-material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import style from "./AllReview.module.css";

const AllReviews = () => {
  return (
    <>
      <section className={style.section1}>
        <div className="container">
          <div className="row">
            <center>
              <h1 className="p-3 ">
                Kidzapp Reviews - Read Customer Unbiased Reviews
              </h1>
            </center>
            <div className="col-lg-9">
              <div className={style.firstcard}>
                <div className="container">
                  <h3 className="pt-3 pb-3">Commission Percentage Test-1</h3>
                  <div className="d">
                    <Rating name="read-only" value={5} readOnly /> &nbsp;{" "}
                    <span>
                      <b>Love it</b>
                    </span>
                    &nbsp; &nbsp;{" "}
                    <span>
                      <b>
                        {" "}
                        <BiTime style={{ color: "#00adee" }} /> &nbsp;7 months
                        ago
                      </b>
                    </span>
                    &nbsp; &nbsp;{" "}
                    <span>
                      <b>
                        {" "}
                        <FaUserCheck style={{ color: "#00adee" }} /> &nbsp;
                        Kainath
                      </b>
                    </span>
                  </div>
                  <br />
                  <h3>Test Kidzapp</h3>
                  <p>
                    How was your experience?????????????????????????????????????
                    How was your experience??????????????? How was your
                    experience??????
                  </p>
                  <div className="row pb-2">
                    <div className="col-4 ">
                      <img
                        src="https://testimages.kidzapp.com/media/review_images/Review_of_Commission_percentage_test_1_a0872f19-b7a7-435c-8541-55dc0c193477.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="col-4 ">
                      <img
                        src="https://testimages.kidzapp.com/media/CACHE/images/venues/5c72b62f-aee5-4a99-af7c-334c106d483e/xdubai-skatepark.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="col-4 ">
                      <img
                        src="https://testimages.kidzapp.com/media/review_images/Review_of_Commission_percentage_test_1_b4636066-81c9-439e-9ee4-d0227a81d716.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                  <hr />
                  <br />
                  <div className="row d-flex">
                    <div className="col-2">
                      <span>
                        <ChatBubbleOutlineIcon /> &nbsp; Like
                      </span>
                    </div>
                    <div className="col-2">
                      <span>
                        <ChatBubbleOutlineIcon /> &nbsp; Comment
                      </span>
                    </div>
                    <div className="col-8">
                      <button className="btn btn-success float-end ">
                        See All the Reviews of Commission Percentage Test-1
                      </button>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <br />
              <div className={style.secondcard}>
                <div className="container">
                  <h3 className="pt-3 pb-3">test-qc - Copy</h3>
                  <div className="pb-4">
                    <span>
                      <b>
                        {" "}
                        <Star style={{ color: "#00adee" }} /> &nbsp;5 Love it
                      </b>
                    </span>
                    &nbsp; &nbsp;{" "}
                    <span>
                      <b>
                        {" "}
                        <BiTime style={{ color: "#00adee" }} /> &nbsp;7 months
                        ago
                      </b>
                    </span>{" "}
                  </div>

                  <div className="pb-1">
                    <h3>Kevin</h3>
                    <p>but the only person I have seen was a man with</p>
                  </div>
                  <hr />
                  <br />
                  <div className="row d-flex">
                    <div className="col-2">
                      <span>
                        <ThumbUpOffAltIcon /> &nbsp; Like
                      </span>
                    </div>
                    <div className="col-2">
                      <span>
                        <ChatBubbleOutlineIcon /> &nbsp; Comment
                      </span>
                    </div>
                    <div className="col-8">
                      <button className="btn btn-success float-end ">
                        See All the Reviews of Test qc-copy
                      </button>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            {/* rightg section */}
            <div className="col-lg-3">
              <h5>Related Activities</h5>
              <div className={`card mt-3 ${style.card}`}>
                <img
                  className={`card-img-top ${style.cardimg}`}
                  src="https://testimages.kidzapp.com/media/CACHE/images/venues/5c72b62f-aee5-4a99-af7c-334c106d483e/xdubai-skatepark.jpg"
                  alt="..."
                />
                <img
                  src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg"
                  className={style.cardimg2}
                />

                <div className="card-body">
                  <h5 className="card-title"> XDubai SkatPark</h5>
                  <h6 className={`card-title ${style.secondheading} pt-2`}>
                    Kite Beach, Jumariah
                  </h6>
                </div>
              </div>
              <div className={`card mt-4 ${style.card}`}>
                <img
                  className={`card-img-top ${style.cardimg}`}
                  src="https://testimages.kidzapp.com/media/CACHE/images/venues/7e5c8430-62a5-4a1b-ae24-afb23643770f/safa-park-2.jpg"
                  alt="..."
                />
                <img
                  src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg"
                  className={style.cardimg2}
                />

                <div className="card-body">
                  <h5 className="card-title"> Safa Park-2</h5>
                  <h6 className={`card-title ${style.secondheading} pt-2`}>
                    Ai Safa-2, Jumeirah
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllReviews;
