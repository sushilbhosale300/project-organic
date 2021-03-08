import {
    POST_DETAIL_SUCCESS,
    POST_DETAIL_REQUEST,
    POST_DETAIL_FAIL,
  } from '../../actions/actionTypes';
  
  const getPostReducer = (state = [], action) => {
    switch (action.type) {
      case POST_DETAIL_REQUEST:
        return {
          loading: true,
        };
      case POST_DETAIL_SUCCESS:
        return {
          post: action.payload,
        };
  
      case POST_DETAIL_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export { getPostReducer };
  