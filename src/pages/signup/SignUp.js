import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="container">
      <div className="main-div">
        <div className="left-div">
          <h1 className="logo">
            <span style={{ color: "#4285f4" }}>F</span>
            <span style={{ color: "#ea4335" }}>u</span>
            <span style={{ color: "#fbbc05" }}>n</span>
            <span style={{ color: "#4285f4" }}>d</span>
            <span style={{ color: "#34a853" }}>o</span>
            <span style={{ color: "#ea4335" }}>o</span>
          </h1>
          <h1 className="form-heading">Create your Fundoo Account</h1>
          <form className="form">
            <div className="name-inputs">
              <TextField
                type="text"
                label="First name"
                variant="outlined"
                size="small"
              />
              <TextField
                type="text"
                label="Last name"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="email-input">
              <TextField
                type="email"
                label="Username"
                variant="outlined"
                fullWidth
                size="small"
                helperText="You can use letters, numbers & periods"
              />
            </div>
            <div className="password-inputs">
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                size="small"
              />
              <TextField
                type="password"
                label="Confirm"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="helper-text">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
            <div className="show-password-check">
              <FormControlLabel control={<Checkbox />} label="Show password" />
            </div>
            <div className="buttons">
              <Button className="btn" variant="text">
                Sign in instead
              </Button>
              <Button className="btn" variant="contained">
                Next
              </Button>
            </div>
          </form>
        </div>
        <div className="right-div">
          <img
            src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
            alt=""
            width="244"
            height="244"
          />
          <p>One account. All of Fundoo working for you</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
