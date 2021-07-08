import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3 className="heading">Sign In</h3>

                <div className="form-group">
                    <label className="label">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-success btn-lg col-md-12 text-center" style={{borderRadius:"50px"}}>Sign Up</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#top">password?</a>
                </p>
            </form>
        );
    }
}