import React from 'react'

const withAuthenticate = PostsPage => LoginPage =>
    class extends React.Component {

        render(){
            if(localStorage.getItem('user')){

                return <PostsPage />
            }
            else{
                return <LoginPage />
            }

        }
    }

    export default withAuthenticate;