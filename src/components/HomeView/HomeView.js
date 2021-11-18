import React from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { createAdmin } from "../../redux/actions/createAdmin";
import { useNavigate } from "react-router";

import "./HomeView.css";

export const HomeView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = (googleData) => {
    const userInfo = {
      email: googleData.profileObj.email,
      givenName: googleData.profileObj.givenName,
      familyName: googleData.profileObj.familyName,
      picture: googleData.profileObj.imageUrl,
    };
    dispatch(createAdmin(userInfo));
    navigate("/create-company");
  };

  return (
    <div className="home-view-container">
      <h1 className="intro">
        Free <span className="intro-time">time tracking</span> for your company
      </h1>
      <p className="description">
        TimeBase is a time tracking and timesheet app that lets you track hours
        across projects. Unlimited users, always free
      </p>
      <GoogleLogin
        render={(renderProps) => (
          <button
            className="get-started"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Get started now - it's free
          </button>
        )}
        clientId="322422677461-6nlclaik5vcgvhu8l4eb2oik99jm4a8c.apps.googleusercontent.com"
        onSuccess={handleGoogleLogin}
        onFailure={(response) => console.log(response)}
      />
    </div>
  );
};
