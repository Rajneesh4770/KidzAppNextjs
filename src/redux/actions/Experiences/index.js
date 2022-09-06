import axiosInstance from "../../../config";
import API from "../../../constants/api";

const curatedList = (params) => (dispatch) => {
  return axiosInstance.get(`${API.EXPERIENCE_CURATED_LIST}`, { params: params })
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
};

const experienceCategories = (params) => (dispatch) => {
  return axiosInstance.get(`${API.EXPERIENCE_CATEGORIES}`, { params: params })
  .then(res => res.data)
  .catch(err => {
    console.log(err);
  });
};

export { curatedList, experienceCategories };