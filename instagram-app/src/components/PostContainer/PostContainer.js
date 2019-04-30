import React from 'react'
import CommentSection from '../CommentComponent/CommentSection';
import './postContainer.css'
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    console.log(props)
    return (
        
                <div className='post-container'>

                    <div className='user-display'>
                        <div className='user-img'>
                            <img src={props.dataProp.thumbnailUrl} alt='this is an img1' />
                        </div>
                        <p><strong>{props.dataProp.username}</strong></p>
                    </div>


                    <div className='insta-img'>
                        <img src={props.dataProp.imageUrl} alt='this is an img' />
                    </div>


                    <div className='below-img'>
                        <i className="far fa-heart" ></i>
                        <i className="far fa-comments"></i>

                        <div className='p-tag'>{props.dataProp.likes} likes</div>

                        {/* {props.dataProp.comments.map(eachComment => (
                            <CommentSection eachCommentProp={eachComment} />
                        ))} */}

                        <CommentSection commentsProp={props.dataProp.comments} />

                        <p className='date'>{props.dataProp.timestamp}</p>

                        <form>
                            <input className='input' type='text' placeholder='Add a comment'
                            />
                        </form>

                    </div>
                </div>
        

    );
}

PostContainer.propTypes = {
    dataProp: PropTypes.array
}

export default PostContainer


