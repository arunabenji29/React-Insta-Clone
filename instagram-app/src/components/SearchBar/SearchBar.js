import React from 'react'
import './searchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userMatch: [],
            searchField: '',
            // heartCount:this.props.userProp.data.likes
        }
        // console.log(this.props)
    }

    // let heartCount = 0;

    // updateHeartCount = () => {
    //     heartCount++
    //     this.props.userProp.data.likes = heartCount
    
    // }

    searchHandle = (event) => {
        console.log('search content '+event.target.value)
        this.setState({
            searchField: event.target.value
        })
        // console.log('search handle ' + this.state.searchField)
    }

    searchSubmit = (event) => {
        event.preventDefault();
        console.log('props in searchSubmit '+this.props.userProp.data.username)
        console.log('search handle ' + this.state.searchField)

        console.log('search prop data '+this.props.userProp.data.username)
        let matched = this.props.userProp.data.filter(post => post.username.includes(this.state.searchField))
        
        console.log('matched '+matched.username)

        this.setState({
            userMatch: matched
        })

        console.log('userMatch '+this.state.userMatch)

        console.log('search Submit ' + this.state.searchField)
        this.props.addSearch(this.state.userMatch)
        console.log('search result transferred to this.state.searchfield in App' + this.props.userProp.searchField)

    }

    render() {
        return (
            <div className='search-bar'>
                <div className='left'>
                    <div className='logo'>

                        <i className="fab fa-instagram"></i>
                    </div>
                    <p className='logo-text'><strong>Instagram</strong></p>
                </div>


                <form onSubmit={this.searchSubmit}>
                    <input
                        placeholder='&#128269;Search'
                        value={this.state.searchField}
                        onChange={this.searchHandle} />
                </form>

                <div className='right'>
                    <div className='compass'>
                        <i className="far fa-compass"></i>

                    </div>
                    <div className='heart'>
                        <i className="far fa-heart" ></i>

                    </div>
                    <div className='person'>
                        <i className="far fa-user"></i>

                    </div>
                </div>
            </div>
        );
    }
}

// const SearchBar = () => {
//     return (
//         <div className='search-bar'>
//             <div className='left'>
//                 <div className='logo'>
//                     {/* <img src="../images/instagram-logo.png" alt=''/> */}
//                     <i className="fab fa-instagram"></i>
//                 </div>
//                 <p className='logo-text'><strong>Instagram</strong></p>
//             </div>

//             {/* <div className='middle'></div> */}
//             <form>
//             <input  placeholder='&#128269;Search' />
//             </form>

//             <div className='right'>
//                 <div className='compass'>
//                     <i className="far fa-compass"></i>
//                     {/* <img src='../images/compass.png' alt='compass' /> */}
//                 </div>
//                 <div className='heart'>
//                 <i className="far fa-heart"></i>
//                     {/* <img src='../images/like.png' alt='heart' /> */}
//                 </div>
//                 <div className='person'>
//                 <i className="far fa-user"></i>
//                     {/* <img src='../images/profile.png' alt='person' /> */}
//                 </div>
//             </div> 
//         </div>
//     );
// }
export default SearchBar