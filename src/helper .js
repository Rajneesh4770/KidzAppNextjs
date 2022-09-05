export const isAuthenticate = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("access_token")) {
    return localStorage.getItem("access_token");
  } else {
    return false;
  }
};
