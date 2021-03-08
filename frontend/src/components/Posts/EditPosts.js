import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updatePostAction } from '../../redux/actions/posts/postActions';

const EditPosts = () => {
   
  
const post =  useSelector(state => state.getPost)    

console.log()  

const [keywords, setKeywords] = useState(post?.keywords);
const [title, setTitle] = useState(post?.title);
const [content, setContent] = useState(post?.content);
const dispatch = useDispatch();

  //dispatch

  //Handle form submit

  const handleFormSubmit = e => {
    e.preventDefault();

    const data = {
      title,
      content,
      keywords,
    };
    
    dispatch(updatePostAction(data));
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
        <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'>
            Click to Update Post.
          </button>
          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog' >
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Update Post
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <h1 className='text-center'>Update Post</h1>
                  <form onSubmit={handleFormSubmit}>
                    <fieldset>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>title</label>
                        <input
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Post title'
                        />
                      </div>
                      
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>Content </label>
                        <textarea

                          value={content}
                          onChange={e => setContent(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Content'
                        />
                      </div>
                      <div className='form-group'>
                      <label htmlFor='exampleInputSelect1'>Keywords</label>
                      <input
                        value={keywords}
                        onChange={e => setKeywords(e.target.value)}
                        type='text'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='Keywords separated by , '
                        />
                      </div>
                     
                      <button type='submit' className='btn btn-warning m-auto'>
                        Update Post
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPosts;
