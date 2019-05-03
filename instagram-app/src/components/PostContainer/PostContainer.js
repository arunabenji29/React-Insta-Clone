import React from 'react'
import styled from 'styled-components'
import CommentSection from '../CommentComponent/CommentSection';
import './postContainer.css'
import PropTypes from 'prop-types';

const ThumbNail = styled.div`
    width:5.5%;
    margin-right:15px;
`

const ThumbNailImg = styled.img`
    width:100%;
    border-radius:50%;
`

const Username = styled.div`
    font-size:22px;
`

class PostContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allComments: this.props.dataProp.comments,
            commentField:'',
            heartCount:this.props.dataProp.likes
            

        }
        
    }

    commentHandle = event => {
        this.setState({
            commentField: event.target.value
        })
        
    }

    commentSubmit = (event) => {
        event.preventDefault();
        // let commentSplit = this.state.commentField.split(' ')
        
        this.setState({
            
            allComments: [...this.state.allComments, {
                // text:commentSplit.slice(1,commentSplit.length).join(' '),
                text:this.state.commentField,
                username:localStorage.getItem('user'),
                
            }],
            
            commentField: '',
            
        })
        
        
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
                    <ThumbNail>
                        <ThumbNailImg src={this.props.dataProp.thumbnailUrl} alt='this is an img1' />
                    </ThumbNail>
                    <Username><strong>{this.props.dataProp.username}</strong></Username>
                </div>


                <div className='insta-img'>
                    <img src={this.props.dataProp.imageUrl} alt='this is an img' />
                </div>


                <div className='below-img'>
                    <i className="far fa-heart" onClick = {this.updateHeartCount}></i>
                    <i className="far fa-comments"></i>

                    <div className='p-tag' >{this.state.heartCount} likes</div>

        

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




PostContainer.propTypes = {
    dataProp: PropTypes.object
}

export default PostContainer


