import axios from "axios";
import { useReducer, useEffect } from "react";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const useFetch = (url, token) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "LOADING" });

        const response = await axios(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          dispatch({ type: "SUCCESS", payload: response.data.data });
          return;
        }
        throw new Error(response.statusText);
      } catch (error) {
        dispatch({ type: "ERROR" });
      }
    };

    fetchData();
  }, [url, token]);

  return { ...state };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return { ...initialState, loading: true };
    }

    case "ERROR": {
      return { ...initialState, error: true };
    }

    case "SUCCESS": {
      return { ...initialState, data: action.payload };
    }

    default: {
      return state;
    }
  }
};
