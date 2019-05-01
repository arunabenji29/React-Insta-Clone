import React from 'react'


const Login = props => {

    // showUsername = event => {
    //     event.preventDefault();
    //     if(localStorage.getItem('user')){
    //         localStorage.removeItem('user');
            
    //     }
    // }

    return (
        <form>
            <input
                placeholder='username'
                value={props.user}
            />

            <input
                placeholder='password'
                value={props.password}
            />

            <button >login</button>
        </form>
    )
}

export default Login