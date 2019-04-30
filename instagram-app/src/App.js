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
      
    }
    console.log('App:constructor running')
  }

  componentDidMount(){
    console.log('App:CDM running')
    this.setState({
      data:dummyData
    })
    console.log(this.state.data)
    
  }

  componentDidUpdate(){
    console.log('App: CDU Update')
  }

  render(){
    console.log('App:rendering')
    return (
      <div className="App">
       
        <SearchBar />
        
        
        {this.state.data.map(data => (
        
          <PostContainer dataProp={data}/> 
        ))}
        
      </div>
    );
  }
  
}

export default App;
