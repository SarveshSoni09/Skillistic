const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGINUSER": {
      return {
        currentUser: action.payload,
        currentVerifier: null,
      };
    }
    case "LOGINVERIFIER": {
      return {
        currentVerifier: action.payload,
        currentUser: null,
      };
    }
    case "LOGOUT": {
      return {
        currentUser: null,
        currentVerifier: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
