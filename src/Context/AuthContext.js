import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  currentVerifier: JSON.parse(localStorage.getItem("verifier")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
    localStorage.setItem("verifier", JSON.stringify(state.currentVerifier));
  }, [state.currentUser, state.currentVerifier]);

  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        currentVerifier: state.currentVerifier,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
