import React from 'react'
import './commentSection.css'

// class CommentSection extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             inputComment:''
//         }
//     }

//     addNewComment = ()=>{
//         return (
//             console.log('new comment')
//         );
//     }

//     render(){
//         return (
//             <div className='comment-section'>
//             {props.commentsProp.map(eachComment =>
//                 <p><strong>{eachComment.username}</strong>  {eachComment.text}</p>
//                 )}
//             </div>
           
//         );
//     }
// }




const CommentSection = (props) => {
    return (
        <div className='comment-section'>
        {props.commentsProp.map(eachComment =>
            <p><strong>{eachComment.username}</strong>  {eachComment.text}</p>
            )}
        </div>
       
    );
}
export default CommentSection