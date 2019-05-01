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
      searchResult:[]
    }
    console.log('App:constructor running')
  }

  componentDidMount(){
    console.log('App:CDM running')
    this.setState({
      data:dummyData,
      searchResult:[]
    })
    // console.log(this.state.data)
    
  }

  // componentDidUpdate(){
  //   console.log('App: CDU Update')
  // }

  addSearch = item => {
    this.setState({
      searchResult:item

      })

      console.log('add search in App '+this.state.searchResult)
    
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
             
              <SearchBar userProp={this.state}/>
              
              
              {this.state.searchResult.map(data => (
              
                <PostContainer dataProp={data}/> 
              ))}
              
            </div>
          );
        }
  }
  
}

export default App;
