import React from 'react'
import CommentSection from '../CommentComponent/CommentSection';
import './postContainer.css'
import PropTypes from 'prop-types';

class PostContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allComments: this.props.dataProp.comments,
            commentField:'',
            heartCount:this.props.dataProp.likes
            // objectComment: {
                
            //     text:'',
            //     username:'',
            // },

        }
        // console.log('Post container ' + this.state.allComments)
    }

    commentHandle = event => {
        this.setState({
            commentField: event.target.value
        })
        // console.log('comment handle '+this.state.commentField)
    }

    commentSubmit = (event) => {
        event.preventDefault();
        let commentSplit = this.state.commentField.split(' ')
        // console.log('username '+commentSplit[0])
        // console.log('text '+ commentSplit.slice(1,commentSplit.length).join(' '))
        this.setState({
            // objectComment:{
            //     text:commentSplit.slice(1,commentSplit.length).join(' '),
            //     username:commentSplit[0],
                
            // },
            allComments: [...this.state.allComments, {
                text:commentSplit.slice(1,commentSplit.length).join(' '),
                username:commentSplit[0],
                
            }],
            // allComments:this.state.allComments.push(this.state.objectComment),
            commentField: '',
            // objectComment:{
            //     username:'',
            //     text:''
            // }
        })
        
        // console.log('comment submit ' + this.state.objectComment.username)
        // console.log('comment submit ' + this.state.objectComment.text)
    }

    updateHeartCount = () => {
        let count = this.state.heartCount
        console.log('current count '+this.state.heartCount)
        console.log('like count ' + count)
        this.setState({
            heartCount:count+1
        })
    
    }

    render() {
        return (


            <div className='post-container'>

                <div className='user-display'>
                    <div className='user-img'>
                        <img src={this.props.dataProp.thumbnailUrl} alt='this is an img1' />
                    </div>
                    <p><strong>{this.props.dataProp.username}</strong></p>
                </div>


                <div className='insta-img'>
                    <img src={this.props.dataProp.imageUrl} alt='this is an img' />
                </div>


                <div className='below-img'>
                    <i className="far fa-heart" onClick = {this.updateHeartCount}></i>
                    <i className="far fa-comments"></i>

                    <div className='p-tag' >{this.state.heartCount} likes</div>

                    {/* {props.dataProp.comments.map(eachComment => (
                            <CommentSection eachCommentProp={eachComment} />
                        ))} */}

                    <CommentSection commentsProp={this.state.allComments} />

                    <p className='date'>{this.props.dataProp.timestamp}</p>

                    <form onSubmit={this.commentSubmit}>
                        <input
                            className='input'
                            type='text'
                            placeholder='Add a comment'
                            value={this.state.commentField}
                            onChange={this.commentHandle}
                        />
                    </form>

                </div>
            </div>


        );
    }
}


// const PostContainer = (props) => {
//     console.log(props)
//     return (

//                 <div className='post-container'>

//                     <div className='user-display'>
//                         <div className='user-img'>
//                             <img src={props.dataProp.thumbnailUrl} alt='this is an img1' />
//                         </div>
//                         <p><strong>{props.dataProp.username}</strong></p>
//                     </div>


//                     <div className='insta-img'>
//                         <img src={props.dataProp.imageUrl} alt='this is an img' />
//                     </div>


//                     <div className='below-img'>
//                         <i className="far fa-heart" ></i>
//                         <i className="far fa-comments"></i>

//                         <div className='p-tag'>{props.dataProp.likes} likes</div>

//                         {/* {props.dataProp.comments.map(eachComment => (
//                             <CommentSection eachCommentProp={eachComment} />
//                         ))} */}

//                         <CommentSection commentsProp={props.dataProp.comments} />

//                         <p className='date'>{props.dataProp.timestamp}</p>

//                         <form>
//                             <input 
//                             className='input' 
//                             type='text' 
//                             placeholder='Add a comment'
//                             onChange={props.}
//                             />
//                         </form>

//                     </div>
//                 </div>


//     );
// }

PostContainer.propTypes = {
    dataProp: PropTypes.object
}

export default PostContainer


