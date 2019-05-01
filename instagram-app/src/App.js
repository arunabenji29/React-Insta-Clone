import React from 'react';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data:[],
      searchResult:[],
      searchField:''
    }
    console.log('App:constructor running')
  }

  componentDidMount(){
    console.log('App:CDM running')
    this.setState({
      data:dummyData,
      searchResult:[],
      searchField:''
    })
    
    
  }

 searchHandle = (event) => {
    console.log('search content '+event.target.value)
    this.setState({
        searchField: event.target.value
    })
    console.log('search handle ' + this.state.searchField)
}


searchSubmit = (event) => {
  event.preventDefault();

  let matched = this.state.data.filter(post => post.username.includes(this.state.searchField))
  
  this.setState({
      searchResult: matched
  })

  console.log('search result ' + this.state.searchResult)

}

 render(){
    console.log('App:rendering')
    if(this.state.searchResult.length === 0) {
    return (
      <div className="App">
       
        <SearchBar userProp={this.state}/>
        
        
        {this.state.data.map((data,index) => (
        
          <PostContainer key={index} dataProp={data}/> 
        ))}
        
      </div>
    );
        }

        else{
          return (
            <div className="App">
             
              <SearchBar 
              searchHandleProp={this.searchHandle} 
              searchSubmitProp={this.searchSubmit} 
              fieldProp={this.state.searchField}/>
              
              
              {this.state.searchResult.map(data => (
              
                <PostContainer dataProp={data}/> 
              ))}
              
            </div>
          );
        }
  }
  
}

export default App;
