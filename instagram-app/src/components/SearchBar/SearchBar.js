import React from 'react'
import './searchBar.css'
import styled from 'styled-components'


const InSearchBar = styled.div`
    width:100%;
    height:100px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    
`

const Left = styled.div`
    height:100px;
    display:flex;
    align-items: center;
`

const Logo = styled.div`
    margin-right: 10px;
    
    

    // :hover{
    //     background-color: pink;
    //     border-radius:5px;
    
    // }
`

const LogoText = styled.p`
    font-family: 'Dancing', cursive;
    font-size:2rem;
`

const Right = styled.div`
    display:flex;
    align-items: center;

    position:right;
`


const SearchBar = (props) => {

    console.log(props.userProp)
        return (
            <InSearchBar>
                <Left>
                    <Logo>
                        
                        <i className="fab fa-instagram"></i>
                    </Logo>
                    <LogoText><strong>Instagram</strong></LogoText>
                </Left>
    
               <form onSubmit={props.searchSubmitProp}>
                     <input
                        placeholder='Search 🔎 🔎 🔎 🔎 🔎'
                        value={props.userProp}
                        onChange={props.searchHandleProp} />
                </form>
    
                <Right>
                    <div className='compass'>
                        <i className="far fa-compass"></i>
                        
                    </div>
                    <div className='heart'>
                    <i className="far fa-heart"></i>
                        
                    </div>
                    <div className='person'>
                    <i className="far fa-user"></i>
                        
                    </div>
                </Right> 
            </InSearchBar>
        );
    }



export default SearchBar