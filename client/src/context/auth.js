import React, { useContext, useReducer, useCallback } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../util/getLocalStorage";
import axios from "axios";

const login_url = "http://localhost:3000/api/v1/unsplash/auth/login";
const register_url = "http://localhost:3000/api/v1/unsplash/auth/register";

const AuthContext = React.createContext();

const initialState = {
  user: getLocalStorage("user", null),
  loading: false,
  error: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START": {
      return { ...state, loading: true, error: false };
    }

    case "LOGIN_SUCCESFULL": {
      const { user, setLocalStorage } = action.payload;
      setLocalStorage(user);

      return { ...initialState, user };
    }

    case "LOGIN_FAILED": {
      return { ...state, loading: false, error: true };
    }

    case "SIGNOUT": {
      action.payload(null);

      return { ...initialState };
    }

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [, setLocalStorage] = useLocalStorage("user", null);

  const navigate = useNavigate();

  const loginUser = useCallback(
    async (login_credentials) => {
      try {
        dispatch({ type: "LOGIN_START" });

        const user = await axios.post(login_url, login_credentials);

        if (user.status === 400 || user.status === 401) {
          throw new Error(user.data.msg);
        }

        dispatch({
          type: "LOGIN_SUCCESFULL",
          payload: { user: user.data, setLocalStorage },
        });
        //navigate to home page after login
        navigate("/");
      } catch (error) {
        dispatch({ type: "LOGIN_FAILED" });
      }
    },
    [navigate, setLocalStorage]
  );

  const reqisterUser = useCallback(
    async (accountInfo) => {
      try {
        dispatch({ type: "LOGIN_START" });

        const createdUser = await axios.post(register_url, accountInfo);

        if (createdUser.status === 400 || createdUser.status === 401) {
          throw new Error(createdUser.data.msg);
        }

        dispatch({
          type: "LOGIN_SUCCESFULL",
          payload: { user: createdUser.data, setLocalStorage },
        });
        navigate("/");
      } catch (error) {
        dispatch({ type: "LOGIN_FAILED" });
      }
    },
    [setLocalStorage, navigate]
  );

  const signOut = () => {
    dispatch({ type: "SIGNOUT", payload: setLocalStorage });
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ ...state, reqisterUser, loginUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
