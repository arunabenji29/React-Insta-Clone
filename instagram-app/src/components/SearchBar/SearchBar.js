import React from 'react'
import './searchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
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


                <form onSubmit={this.props.searchSubmitProp}>
                    <input
                        placeholder='&#128269;Search'
                        value={this.props.fieldProp}
                        onChange={this.props.searchHandleProp} />
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

export default SearchBar