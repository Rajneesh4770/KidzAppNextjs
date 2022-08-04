import { style } from "@mui/system";
import React, { useState, useEffect, useTransition } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Axios from "axios";
import { baseUrl } from "../config";
import style1 from "../styles/FindActivities.module.css";
import { Rating, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import {Router} from "next/router"

function find2(props) {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const [pageindex, setPageindex] = useState(9);
  const [scroll, setScroll] = useState(400);

  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  const pagginationHandler = (page) => {
    const scrolling = (event) => {
      if (window.scrollY > scroll) {
        setPageindex(pageindex + 4);
        setScroll(scroll + 400);
        console.log("hello", pageindex);
      }
      console.log(window.scrollY, "scroll");
    };
    window.addEventListener("scroll", scrolling, false);
    return () => window.removeEventListener("scroll", scrolling, false);
  };

  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  else {
    content = <div>un Loading...</div>
    // (
    // //   <ul>
    // //     {props.posts.map((post) => {
    // //       return <li key={post.id}>{post.title}</li>;
    // //     })}
    // //   </ul>
    // );
  }

  return (
    <div className="container">
      <h1>Posts List with Pagination in Next.js</h1>
      <div className="posts">{content}</div>

      <ReactPaginate
        initialPage={props.pageindex - 1}
        pageCount={props.pageindex} //page count
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={pagginationHandler}
      />
    </div>
  );
}

find2.getInitialProps = async ({ query }) => {
  const page = query.page || 1;
  const posts = await Axios.get(
    baseUrl + `experiences/?country_code=ae&page=1&page_size=${page}`
  );
  return {
    // totalCount: posts.data._meta.totalCount,
    // pageCount: posts.data._meta.pageCount,
    // currentPage: posts.data._meta.currentPage,
    // perPage: posts.data._meta.perPage,
    // posts: posts.data.result,
    isLoading: false,
  };
};

export default find2;
