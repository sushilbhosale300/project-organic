import axios from 'axios';
import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  FETCH_POST_FAIL,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  POST_DETAIL_FAIL,
  POST_DETAIL_SUCCESS,
  POST_DETAIL_REQUEST,
} from '../actionTypes';

const createPostAction = (postData) => {
  return async (dispatch,getState) => {
    try {
      console.log("1");
      dispatch({
        type: CREATE_POST_REQUEST,
      });

      const {userInfo}  = getState().userLogin;
      var keys = postData.keywords.toString().split[','];
      let post = JSON.stringify({
        title:postData.title,
        content:postData.content,
        keywords:keys,
        createdBy:userInfo._id

      })

      const config = {
        headers:{
          'Content-Type': 'application/json',
        },

      };
      
      const { data } = await axios.post('/api/posts/create', post, config);

      console.log(data);
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: data,
      });
    } catch (error){
      if(error) console.log(error) ;
      dispatch({
        type: CREATE_POST_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch all books action

const fetchPostsAction = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_POST_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //make http call to our backend
      const { data } = await axios.get('/api/posts', config);
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POST_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};





const deletePostAction = (id) => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_POST_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //make http call to our backend
      const { data } = await axios.delete(`/api/posts/${id}`, config);
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_POST_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};


const updatePostAction = (postData) => {
  return async (dispatch,getState) => {
    try {
      dispatch({
        type: DELETE_POST_REQUEST,
      });

      const {userInfo} = getState().userLogin;
      
      const id =  userInfo._id;
      const token  = userInfo.token;
     
      const config = {
        headers:{
          'Content-Type': 'application/json',
           Authorization : `Bearer ${token}`,
        },

      };
      //make http call to our backend
      const { data } = await axios.put(`/api/posts/update/${id}`, postData, config);
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_POST_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};



const getPostsAction = (id) => {
  return async dispatch => {
    try {
      dispatch({
        type: POST_DETAIL_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //make http call to our backend
      const { data } = await axios.get(`/api/posts/${id}`, config);
      dispatch({
        type: POST_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POST_DETAIL_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};





export { createPostAction, fetchPostsAction,deletePostAction, updatePostAction, getPostsAction  };
