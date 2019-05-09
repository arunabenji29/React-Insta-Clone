import React from 'react'
import './Login.css'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            user:'',
            password:''
        }
    }

    userHandle = (event) => {
        this.setState({
            user:event.target.value
        })
    }

    pwdHandle = (event) => {
        this.setState({
            password:event.target.value
        })
    }

    loginSubmit = () => {
        const username = this.state.user;
        localStorage.setItem('user',username);
        window.location.reload();
    }

    render(){
        return (
                    <form className='login-Form'>
                        <input className="user"
                            placeholder='username 🧐'
                            value={this.state.user}
                            onChange={this.userHandle}
                            
                        />
            
                        <input className="user"
                            placeholder='password 🤫'
                            value={this.state.password}
                            onChange={this.pwdHandle}
                        />
            
                        <button className="submit"
                        onClick={this.loginSubmit}>
                        login 🔑</button>
                    </form>
                )
    }
}

// const Login = props => {

//     // showUsername = event => {
//     //     event.preventDefault();
//     //     if(localStorage.getItem('user')){
//     //         localStorage.removeItem('user');
            
//     //     }
//     // }

//     userHandle = event => {

//     }

//     return (
//         <form>
//             <input
//                 placeholder='username'
//                 value={props.user}
//                 onChange={this.userHandle}
//             />

//             <input
//                 placeholder='password'
//                 value={props.password}
//                 onChange={this.pwdHandle}
//             />

//             <button >login</button>
//         </form>
//     )
// }

export default Login