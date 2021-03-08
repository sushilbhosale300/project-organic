import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createPostReducer } from '../reducers/posts/createPostReducer';
import { postListReducer } from '../reducers/posts/postListReducer';
import { userReducer } from '../reducers/users/userAuthReducer';
import updateUserProfile from '../reducers/users/updateUserProfile';
import { userProfileReducer } from '../reducers/users/userProfileReducer';
import {getPostReducer} from '../reducers/posts/getPostReducer';

const middlewares = [thunk];

const reducer = combineReducers({
  postCreated: createPostReducer,
  postsList: postListReducer,
  userLogin: userReducer, //login/register
  updatedUser : updateUserProfile,
  userProfile: userProfileReducer,
  getPost:getPostReducer,
  
});

//Get user from localstorage and save it into our store

const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const initialState = {
  userLogin: { userInfo: userAuthFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
