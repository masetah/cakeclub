import React, {Component} from 'react';
import { Button} from react
class Login extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    render(){
        return(
            <div className="login-page">
                <form className="form-signin" onSubmit={this.handleLogin}>
                    <h3 className="form-signin-heading">Login</h3>
                        <input className="form-control" type="text" placeholder="Email Address" name="email" autoComplete="off" onChange={this.handleChange}></input>
                        <input className="form-control" type="password" placeholder="Password" name="password" autoComplete="off" onChange={this.handleChange}></input>
                        <label className="checkbox">
                            <input
                            type="checkbox"
                            value="remember-me"
                            id="rememberMe"
                            name="rememberMe"
                            />{" "}
                            Remember me
                        </label>
                        <Button className="btn btn-lg btn-primary btn-block" id="loginButton" color="primary" href="/dashboard">
                            Login
                            {/* <Link id="loginLink" to={{pathname:`/dashboard`, 
                                state: this.state
                            }}>Login</Link>  */}
                        </Button>
                        <Button id="forgot-password" color="link" >Forgot Password?</Button>
                        <Register />
                        <p id="disclaimer">This application is a demo. Do not leave any sensitive information. Anyone can log in by clicking "login."</p>
                    </form>
            </div>
 
        )
    }
}

export default Login;