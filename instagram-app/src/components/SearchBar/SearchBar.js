import React from 'react'
import './searchBar.css'

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <div className='left'>
                <div className='logo'>
                    {/* <img src="../images/instagram-logo.png" alt=''/> */}
                    <i className="fab fa-instagram"></i>
                </div>
                <p className='logo-text'><strong>Instagram</strong></p>
            </div>

            {/* <div className='middle'></div> */}
            <input className='search' placeholder='Search' />

            <div className='right'>
                <div className='compass'>
                    <i className="far fa-compass"></i>
                    {/* <img src='../images/compass.png' alt='compass' /> */}
                </div>
                <div className='heart'>
                <i className="far fa-heart"></i>
                    {/* <img src='../images/like.png' alt='heart' /> */}
                </div>
                <div className='person'>
                <i className="far fa-user"></i>
                    {/* <img src='../images/profile.png' alt='person' /> */}
                </div>
            </div> 
        </div>
    );
}
export default SearchBar