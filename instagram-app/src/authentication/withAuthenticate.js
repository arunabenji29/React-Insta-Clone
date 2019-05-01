import React from 'react'

const withAuthenticate = PostsPage => LoginPage =>
    class extends React.Component {

        render(){
            if(true){

                return <PostsPage />
            }

        }
    }

    export default withAuthenticate;