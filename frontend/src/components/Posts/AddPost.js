import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../redux/actions/posts/postActions';

const AddPost = () => {
  const [keywords, setKeywords] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //dispatch
  const dispatch = useDispatch();

  //Handle form submit

  const handleFormSubmit = e => {
    e.preventDefault();

    const data = {
      title,
      content,
      keywords,
    };
    console.log(data);
    dispatch(createPostAction(data));
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
            Click to add Post.
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Create Post
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
                  <h1 className='text-center'>Add Post</h1>
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
                        Create Post
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

export default AddPost;
