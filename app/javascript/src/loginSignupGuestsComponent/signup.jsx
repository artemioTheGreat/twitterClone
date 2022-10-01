import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';


class Signup extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            success: "",
            error: "",
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    signup = e => {
        e.preventDefault();

        fetch('/api/users', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                }
            })
        }))
        .then(handleErrors)
        .then(data => {
            this.setState({
                username: "",
                email: "",
                password: "",
                success: 'Sign up success!. You are now allowed to Log in.'
            })
        })
        .catch(error => {
            this.setState({
                error: "Sorry you failed to sign up. Try again if you please."
            })
        })
    }
    
    render() {
        
        const { username, email, password, success, error } = this.state;

        return(
            <div className="sign-up col-xs-4 col-xs-offset-1">
                <form onSubmit={thi.signup}>
                    
                    <div className="new-to-t">
                        <p><strong>New to Twitter?</strong><br></br><span>Sign Up</span></p>
                    </div>

                    <div className="form-group">
                        <input type="text" class="form-control username" placeholder="Username" name="username" value={username} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <input type="email" class="form-control email" placeholder="Email" name='email' value={email} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control password" placeholder="Password" name='password' value={password} onChange={this.handleChange} />
                    </div>

                    <br></br>

                    <button id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
                    {success && <p className='text-success mt-2'>{success}</p>}
                    {error && <p className='text-danger mt-2'>{error}</p>}
                </form>
            </div>
            )
    }
}

export default Signup