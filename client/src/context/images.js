import React, { useContext, useReducer, useEffect, useCallback } from "react";
import reducer from "../reducer/images";
import {
  GET_IMAGES_BEGIN,
  GET_IMAGES_ERROR,
  GET_IMAGES_SUCCESS,
} from "../actions";
import axios from "axios";
import { useAuth } from "./auth";

const ImagesContext = React.createContext();

const initialState = {
  images_loading: false,
  images_error: false,
  images: [],
};

export const ImagesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    user: { token },
  } = useAuth();

  const fetchImages = useCallback(
    async (url) => {
      dispatch({ type: GET_IMAGES_BEGIN });

      try {
        const response = await axios(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const images = response.data.data;

        dispatch({ type: GET_IMAGES_SUCCESS, payload: images });
      } catch (error) {
        dispatch({ type: GET_IMAGES_ERROR });
      }
    },
    [token]
  );

  useEffect(() => {
    fetchImages("http://localhost:3000/api/v1/unsplash/images");
  }, [fetchImages]);

  return (
    <ImagesContext.Provider value={{ ...state, fetchImages }}>
      {children}
    </ImagesContext.Provider>
  );
};

export const useImages = () => {
  return useContext(ImagesContext);
};
