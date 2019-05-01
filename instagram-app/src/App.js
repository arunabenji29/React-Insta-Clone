import React from 'react';
import withAuthenticate from './authentication/withAuthenticate';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn:false
    }
    console.log('App:constructor running')
  }

  componentDidMount() {
    console.log('App:CDM running')
    this.setState({
      isLoggedIn:true
    })
}

  showUser = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <ComponentFromWithAuthenticate />
      </div>
    );
    
  }

}

export default App;
