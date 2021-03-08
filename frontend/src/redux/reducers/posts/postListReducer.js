import {
  FETCH_POST_FAIL,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from '../../actions/actionTypes';

const postListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        posts: action.payload,
      };

    case FETCH_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { postListReducer };
