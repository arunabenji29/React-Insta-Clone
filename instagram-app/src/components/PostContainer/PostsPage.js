import React from 'react'
import dummyData from '../../dummy-data'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from '../PostContainer/PostContainer'

class PostsPage extends React.Component{
    constructor(){
        super()
        this.state={
            data: [],
            searchResult: [],
            searchField: ''
        }
    }

    componentDidMount() {
        console.log('App:CDM running')
        this.setState({
          data: dummyData,
          searchResult: [],
          searchField: ''
        })
    
    
      }

      searchHandle = (event) => {
        console.log('search content ' + event.target.value)
        this.setState({
          searchField: event.target.value,
          searchResult: [],
        })
        console.log('search handle ' + this.state.searchField)
      }
    
    
      searchSubmit = (event) => {
        event.preventDefault();
    
        let matched = this.state.data.filter(post => 
          post.username.includes(this.state.searchField))
    
        this.setState({
          searchResult: matched
        })
    
        console.log('search result ' + this.state.searchResult)
    
      }

      logoutSubmit = () => {
        // console.log(event.target+ 'i was clicked');
        localStorage.removeItem('user')
        window.location.reload();
        // this.setState({
        //   this.props.isLoggedIn
        // })
      }

    render(){
        if (this.state.searchResult.length === 0) {
            return (
              <div className="App">

                <button onClick={this.logoutSubmit}>Logout 👈</button>
                <SearchBar
                  userProp={this.state.searchField}
                  searchSubmitProp={this.searchSubmit}
                  searchHandleProp={this.searchHandle}
                />
      
      
                {this.state.data.map((data, index) => (
      
                  <PostContainer key={index} dataProp={data} />
                ))}
      
              </div>
            );
          }
      
          else {
            return (
              <div className="App">
      
                <SearchBar
                  searchHandleProp={this.searchHandle}
                  searchSubmitProp={this.searchSubmit}
                  userProp={this.state.searchField} />
      
      
                {this.state.searchResult.map((data,index) => (
      
                  <PostContainer key={index} dataProp={data} />
                ))}
      
              </div>
            );
          }
    }

}

export default PostsPage