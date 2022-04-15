import {
  GET_IMAGES_BEGIN,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
  SEARCH_IMAGES,
} from "../actions";

const images_reducer = (state, action) => {
  if (action.type === GET_IMAGES_BEGIN) {
    return { ...state, images_loading: true };
  }

  if (action.type === GET_IMAGES_SUCCESS) {
    return {
      ...state,
      images_loading: false,
      images: [action.payload],
    };
  }

  if (action.type === GET_IMAGES_ERROR) {
    return { ...state, images_error: true, images_loading: false };
  }

  if (action.type === SEARCH_IMAGES) {
    return { ...state, searchText: action.payload };
  }

  return state;
};

export default images_reducer;
