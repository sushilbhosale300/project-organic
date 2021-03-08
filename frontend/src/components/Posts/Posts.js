import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAction,deletePostAction,getPostsAction } from '../../redux/actions/posts/postActions';
import Loading from '../Loading/Loading';
import {Link} from 'react-router-dom'
const Posts = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch action
    dispatch(fetchPostsAction());
  }, [dispatch]);

  //GRAB THE DATA FROM OUR STORE
  const { posts, loading } = useSelector(state => {
    return state.postsList;
  });
  

  

  const handleDelete = (id) =>{
    dispatch(deletePostAction(id));

  }


  const handleEdit = (id) =>{
    dispatch(getPostsAction(id));
    props.history.push(`/editpost/${id}`)

  }

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Content</th>
                <th scope='col'>Keywords</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loading />
              ) : (
                <>
                  {posts &&
                    posts.map(post => {
                      return (
                        <>
                          {/* Map through here */}
                          <tr className='table-dark'>
                            <th scope='row'>{post.title}</th>
                            <td>{post.content}</td>
                            <td>{post.keywords}</td>
                            <td>
                              <button
                                className='fas fa-trash '
                                style={{
                                  color: 'red',
                                  cursor: 'progress',
                                }} onClick={e=>handleDelete(post._id)}></button>
                              
                              <button
                                className='far fa-edit'
                                style={{
                                  color: 'yellow',
                                  cursor: 'progress',
                                }} onClick={e=>handleEdit(post._id)}></button>
                            </td>
                          </tr>
                          {/* End of map thr */}
                        </>
                      );
                    })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Posts;
