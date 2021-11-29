import React from "react";
import { GoogleLogin } from "react-google-login";
import googleLogo from "../../images/google-logo.svg";
import facebookLogo from "../../images/facebook-logo.svg";
import githubLogo from "../../images/github-logo.svg";
import { login } from "../../redux/actions/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import "./LoginMain.css";

export const LoginMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginFail = useSelector((state) => state.errorsReducer.error);

  const handleLogin = (googleData) => {
    const userInfo = {
      email: googleData.profileObj.email,
      givenName: googleData.profileObj.givenName,
      familyName: googleData.profileObj.familyName,
      picture: googleData.profileObj.imageUrl,
    };
    dispatch(login(userInfo));
    navigate("/company-number");
  };

  return (
    <div className="lm-container">
      <h1 className="get-started-timebase">
        Get started with <span className="time-base">TimeBase</span>
      </h1>
      <h2 className="intro-description">supercharge your productivity</h2>
      {loginFail ? (
        <p className="login-fail">! Something went wrong. Try again</p>
      ) : (
        ""
      )}
      <div className="login-create-container">
        <div className="user-container">
          <h1 className="sign-in-create">Sign in/create employee account</h1>
          <div className="google-button-container">
            <div className="google-logo-container">
              <img
                className="google-logo-button"
                src={googleLogo}
                alt="google-logo"
              />
            </div>
            <GoogleLogin
              render={(renderProps) => (
                <button
                  className="google-login-button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign in/create account with Google
                </button>
              )}
              clientId="322422677461-ppfmok8nudsq9712fk306u9rsce9cip2.apps.googleusercontent.com"
              onSuccess={handleLogin}
              onFailure={(response) => console.log(response)}
              //onFailure={} add failure here
            />
          </div>
        </div>
        <div id="or">OR</div>
        <div className="admin-container">
          <h1 className="create-admin">Create admin account</h1>
          <div className="google-button-container">
            <div className="google-logo-container">
              <img
                className="google-logo-button"
                src={googleLogo}
                alt="google-logo"
              />
            </div>
            <GoogleLogin
              render={(renderProps) => (
                <button
                  className="google-login-button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Create admin account with Google
                </button>
              )}
              clientId="322422677461-pf3q7g6ogdk5ia3ns7ss999vkrmss4sl.apps.googleusercontent.com"
              onSuccess={handleLogin}
              onFailure={(response) => console.log(response)}
              //onFailure={} add failure here
            />
          </div>
        </div>
      </div>
      <div className="login-extras">
        <h2 className="coming-soon">Coming soon!</h2>
        <h3 className="more-ways">new ways to sign in</h3>
        <div className="facebook-button-container">
          <div className="facebook-logo-container">
            <img
              className="facebook-logo-button"
              src={facebookLogo}
              alt="facebook-logo"
            />
          </div>
          <button className="facebook-login-button">
            Create account with Facebook
          </button>
        </div>
        <div className="github-button-container">
          <div className="github-logo-container">
            <img
              className="github-logo-button"
              src={githubLogo}
              alt="github-logo"
            />
          </div>
          <button className="github-login-button">
            Create account with Github
          </button>
        </div>
      </div>
    </div>
  );
};
