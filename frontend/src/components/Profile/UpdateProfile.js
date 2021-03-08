import React ,{useState}from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { updateUser } from '../../redux/actions/users/usersActions';

const UpdateProfile = () =>{

const userLogin =  useSelector(state => state.userLogin)
const {userInfo} = userLogin;


const dispatch  = useDispatch();

const [name,setName] = useState(userInfo?.name);
const [email,setEmail] = useState(userInfo?.email);
const [password,setPassword]   = useState('');
const [status,setStatus]   = useState(userInfo?.status);


const updatedUser = useSelector(state => state.updatedUser);

const { user, loading , success , error } = updatedUser;

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("1");
    dispatch(updateUser(name,email,password,status))
}


    return(
        <div className="row container-height">
            <div className="col-lg-6 col-md-6 m-auto">
                <div className="container">
                    { error && <h1> error</h1>}
                    { loading && <h1> Loading...</h1>}
                    <div className="text-center">
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">
                                                Name
                                        </label>
                                        <input
                                        value={name}
                                        onChange = {e => setName(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id='exampleInputEmail1'
                                        aria-describedby='emailHelp'
                                        placeholder="Enter Name"
                                        />
                                </div>
                                <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">
                                                Email Address
                                        </label>
                                        <input
                                        value={email}
                                        onChange = {e => setEmail(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id='exampleInputEmail1'
                                        aria-describedby='emailHelp'
                                        placeholder="Enter Email"
                                        />
                                </div>
                                <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">
                                                Password
                                        </label>
                                        <input
                                         value={password}
                                         onChange = {e => setPassword(e.target.value)}
                                        type="password"
                                        className="form-control"
                                        id='exampleInputEmail1'
                                        aria-describedby='emailHelp'
                                        placeholder="Enter Password"
                                        />
                                </div>   
                                <div className='form-group'>
                                <label htmlFor='exampleInputSelect1'>Status</label>
                                            <select
                                            id="exampleInputSelect1"
                                            value={status}
                                            onChange={e => setStatus(e.target.value)}
                                            className='custom-select'>
                                            <option defaultValue='programming'>
                                                None
                                            </option>
                                            <option value='Active'>Active</option>
                                            <option value='Inactive'>Inactive</option>
                                            </select>
                                    </div> 
                                <button type="submit" className="btn btn-primary m-auto"> 
                                    Update Your profile
                                </button>


                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfile;