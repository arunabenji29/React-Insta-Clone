import React from 'react'
import './commentSection.css'

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }

    
    render(){
        return (
            <div className='comment-section'>
            {this.props.commentsProp.map((eachComment,index) =>
                (<p key={index}><strong>{eachComment.username}</strong>  {eachComment.text}</p> )
                )}
            </div>
           
        );
    }
}




// const CommentSection = (props) => {
//     return (
//         <div className='comment-section'>
//         {props.commentsProp.map(eachComment =>
//             <p><strong>{eachComment.username}</strong>  {eachComment.text}</p>
//             )}
//         </div>
       
//     );
// }
export default CommentSection