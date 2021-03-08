import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import{useDispatch,useSelector} from 'react-redux'
import {getUserProfileAction} from '../../redux/actions/users/usersActions'






const Profile = () => {

  const dispatch = useDispatch();

  useEffect( () =>{
    dispatch(getUserProfileAction());
  },[dispatch])

const userProfile = useSelector(state => state.userProfile);
const {error, loading, user} =userProfile;
console.log(user);

  return (
    <>
    {error && <h2>{error}</h2>}
    {loading ? <h3> Loading...</h3> : (
       <div className='container'>
       <div className='row'>
         <div className='col mt-5'>
           <div className='card m-auto ' style={{ width: '50%' }}>
             <div className='card-body'>
               <h3 className='card-title'>{user?.name}</h3>
               <h4 className='card-title'>{user?.email}</h4>
               <p className='card-text'>{user?.status}</p>
               <Link to='/user-update' className='btn btn-primary'>
                 Update your profile
               </Link>
             </div>
           </div>
         </div>
       </div>
     </div>
    ) }
     
      {/* Table */}
      {/* <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Author</th>
            <th scope='col'>Book Name</th>
            <th scope='col'>Delete</th>
            <th scope='col'>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr className='table-dark'>
            <th scope='row'>author</th>
            <td>Title</td>
            <td>Delete</td>
            <td>Update</td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
};

export default Profile;
