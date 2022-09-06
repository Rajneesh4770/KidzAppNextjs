import axiosInstance from "../../../config";
import API from "../../../constants/api";

const blogCategories = (country_code) => (_dispatch) => {
  return axiosInstance.get(`${API.BLOG_CATEGORY}`, {params: {country_code}})
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
};

const blogList = (page, limit, country_code, category) => (_dispatch) => {
  return axiosInstance.get(`${API.BLOG_LIST}`, { params: {page, limit, country_code, category } });
};

export { blogCategories, blogList };