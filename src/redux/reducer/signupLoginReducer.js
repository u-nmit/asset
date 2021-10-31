const initialState = {
  saving: false,
  loginIn: false,
  firebaseError: null,
  firebaseErrorCode: null,
  token: null,
  userId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };

    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        firebaseError: action.error.response.data.error.message,
      };

    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.token,
        userId: action.userId,
      };
    case "login_USER_START":
      return {
        ...state,
        loginIn: true,
      };
    case "login_USER_ERROR":
      return {
        ...state,
        loginIn: false,
        firebaseError: action.error.response.data.error.message,
        firebaseErrorCode: action.error.response.data.error.code,
      };
    case "login_USER_SUCCESS":
      return {
        ...state,
        loginIn: false,
        token: action.token,
        userId: action.userId,
      };

    case "LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      return {
        ...state,
        loginIn: false,
        token: null,
        userId: null,
        firebaseError: null,
        firebaseErrorCode: null,
      };

    default:
      return state;
  }
};

export default reducer;
