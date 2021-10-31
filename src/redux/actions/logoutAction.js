export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expireDate");
  localStorage.removeItem("refreshToken");
  return {
    type: "LOGOUT",
  };
};
export const autoLogout = (ms) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(logout());
    }, ms);
  };
};
