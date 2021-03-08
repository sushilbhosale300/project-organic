import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddPost from './components/Posts/AddPost';
import Posts from './components/Posts/Posts';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import UserUpdate from './components/Profile/UpdateProfile';
import EditPost from './components/Posts/EditPosts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginUser} />
          <Route path = '/user-update' component ={UserUpdate} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/addpost' component={AddPost} />
          <Route exact path='/editpost/:id' component={EditPost} />
          <Route exact path='/register' component={RegisterUser} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
