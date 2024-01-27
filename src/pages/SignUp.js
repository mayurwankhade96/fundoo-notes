import React, { useReducer } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

import styles from "../styles/SignUp.module.css";
import Logo from "../components/Logo";
import signupReducer from "../reducers/signupReducer";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  service: "advance",
  isPasswordShown: false,
  isLoading: false,
  error: "",
};

const SignUp = () => {
  const [state, dispatch] = useReducer(signupReducer, initialState);
  const navigate = useNavigate();

  const {
    firstName,
    lastName,
    email,
    password,
    service,
    isPasswordShown,
    isLoading,
    error,
  } = state;

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "SUBMIT" });

    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      service: service,
    };

    axios
      .post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
        payload
      )
      .then((res) => {
        console.log(res);
        dispatch({ type: "SUCCESS" });
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR" });
      });

    dispatch({ type: "RESET" });
  };

  return (
    <div>
      {isLoading ? (
        "Please wait..."
      ) : (
        <div className='form-center'>
          <div className={styles.mainDiv}>
            <div className={styles.leftDiv}>
              <Logo />
              <h1 className='form-heading'>Create your Fundoo Account</h1>
              <form className='form' onSubmit={handleSubmit}>
                <div className={styles.nameInputs}>
                  <TextField
                    type='text'
                    label='First name'
                    name='firstName'
                    required
                    autoFocus
                    variant='outlined'
                    size='small'
                    error={false}
                    value={firstName}
                    onChange={(e) => handleInput(e)}
                  />
                  <TextField
                    type='text'
                    label='Last name'
                    name='lastName'
                    required
                    variant='outlined'
                    size='small'
                    value={lastName}
                    onChange={(e) => handleInput(e)}
                  />
                </div>

                <div className={styles.emailInput}>
                  <TextField
                    type='email'
                    label='Username'
                    name='email'
                    required
                    variant='outlined'
                    fullWidth
                    size='small'
                    helperText='You can use letters, numbers & periods'
                    value={email}
                    onChange={(e) => handleInput(e)}
                  />
                </div>

                <div className={styles.passwordInputs}>
                  <TextField
                    type={isPasswordShown ? "text" : "password"}
                    label='Password'
                    name='password'
                    required
                    variant='outlined'
                    size='small'
                    value={password}
                    onChange={(e) => handleInput(e)}
                  />
                  <TextField
                    type={isPasswordShown ? "text" : "password"}
                    label='Confirm'
                    name='confirm'
                    required
                    variant='outlined'
                    size='small'
                  />
                </div>
                <div className='helper-text'>
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </div>

                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isPasswordShown}
                        onChange={() =>
                          dispatch({ type: "TOGGLE_PASSWORD_VISIBILITY" })
                        }
                      />
                    }
                    label='Show password'
                  />
                </div>

                <div className='buttons'>
                  <Button className={styles.btn} variant='text'>
                    <Link to='/signin'>Sign in instead</Link>
                  </Button>
                  <Button
                    className={styles.btn}
                    variant='contained'
                    type='submit'
                  >
                    Next
                  </Button>
                </div>
              </form>
            </div>

            <div className={styles.rightDiv}>
              <img
                src='https://ssl.gstatic.com/accounts/signup/glif/account.svg'
                alt=''
                width='244'
                height='244'
              />
              <p>One account. All of Fundoo working for you</p>
            </div>
          </div>
        </div>
      )}
      {error ? error : null}
    </div>
  );
};

export default SignUp;
