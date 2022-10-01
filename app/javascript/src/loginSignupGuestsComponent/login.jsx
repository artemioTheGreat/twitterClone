import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';


const Login = props => {
    return(
        <div className="log-in col-xs-4 col-xs-offset-1">
            <form>
                <div className="form-group">
                    <input type="text" className="form-control username" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <input type="text" class="form-control password" placeholder="Password"/>
                </div>
                <br/>
                <button id="log-in-btn" className="btn btn-default btn-primary col-xs-3 col-xs-3 col-xs-offset-1">Log in</button>
                <br></br>
                <label>
                    <input type="checkbox"/>
                    <span>Remember me</span>
                    <span> &#183; </span>
                </label>
                    <a href="#">Forgot password?</a>
            </form>
        </div>
    )
}

export default Login