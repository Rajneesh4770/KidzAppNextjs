import axiosInstance from "../../../config";
import API from "../../../constants/api";

const collectionList = (params) => (dispatch) => {
  return axiosInstance.get(`${API.KIDZ_APPROVED_COLLECTIONS}`, { params: params })
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
};


export { collectionList };