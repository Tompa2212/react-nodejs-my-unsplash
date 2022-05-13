import React, {
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useState,
} from "react";
import reducer from "../reducer/images";
import { GET_IMAGES_BEGIN, GET_IMAGES_ERROR, GET_IMAGES_SUCCESS } from "../actions";
import axios from "axios";
import { useAuth } from "./auth";
import { useLocation } from "react-router-dom";

const base_url = "http://localhost:3000/api/v1/unsplash/images";
const ImagesContext = React.createContext();

const initialState = {
  searchText: "",
  images_loading: false,
  images_error: false,
  images: [],
};

export const ImagesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [refresh, setRefresh] = useState({});

  const {
    user: {
      token,
      user: { id },
    },
  } = useAuth();

  const { pathname } = useLocation();

  const fetchImages = useCallback(
    async (url, concat = false) => {
      dispatch({ type: GET_IMAGES_BEGIN });

      try {
        const response = await axios(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const images = response.data.data;

        dispatch({ type: GET_IMAGES_SUCCESS, payload: { images, concat } });
      } catch (error) {
        dispatch({ type: GET_IMAGES_ERROR });
      }
    },
    [token]
  );

  const triggerRefresh = useCallback(() => {
    setRefresh({});
  }, []);

  useEffect(() => {
    if (pathname === "/myImages") {
      fetchImages(`${base_url}/${id}?label=${state.searchText}`);
    } else {
      fetchImages(`${base_url}?label=${state.searchText}`);
    }
  }, [fetchImages, state.searchText, pathname, id, refresh]);

  return (
    <ImagesContext.Provider value={{ ...state, dispatch, triggerRefresh }}>
      {children}
    </ImagesContext.Provider>
  );
};

export const useImages = () => {
  return useContext(ImagesContext);
};
