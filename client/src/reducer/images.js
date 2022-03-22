import {
  GET_IMAGES_BEGIN,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
} from "../actions";

const images_reducer = (state, action) => {
  if (action.type === GET_IMAGES_BEGIN) {
    return { ...state, images_loading: true };
  }

  if (action.type === GET_IMAGES_SUCCESS) {
    return {
      ...state,
      images_loading: false,
      images: [...state.images, action.payload],
    };
  }

  if (action.type === GET_IMAGES_ERROR) {
    return { ...state, images_error: true, images_loading: false };
  }

  return { ...state };
};

export default images_reducer;
