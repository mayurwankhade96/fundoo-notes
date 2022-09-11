import React, { useReducer, useEffect, useRef } from "react";
import styles from "../styles/SignIn.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import signinReducer from "../reducers/signinReducer";

const initialState = {
  email: "",
  password: "",
  isPasswordShown: false,
  isLoading: false,
  error: "",
};

const SignIn = () => {
  const [state, dispatch] = useReducer(signinReducer, initialState);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const { email, password, isPasswordShown, isLoading, error } = state;

  useEffect(() => {
    inputRef.current.childNodes[1].childNodes[0].focus();
  }, []);

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
      email: email,
      password: password,
    };

    axios
      .post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
        payload
      )
      .then((res) => {
        console.log(res);
        dispatch({ type: "SUCCESS" });
        navigate("/home");
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
            <div style={{ textAlign: "center" }}>
              <Logo />
            </div>
            <h1 className='form-heading' style={{ textAlign: "center" }}>
              Sign in
            </h1>
            <h2 className={styles.formSubheading}>to continue to Fundoo</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formControl}>
                <TextField
                  type='email'
                  label='Email'
                  name='email'
                  ref={inputRef}
                  variant='outlined'
                  fullWidth
                  value={email}
                  onChange={(e) => handleInput(e)}
                ></TextField>
              </div>

              <div className={styles.formControl}>
                <TextField
                  type={isPasswordShown ? "text" : "password"}
                  label='Enter your password'
                  name='password'
                  variant='outlined'
                  fullWidth
                  value={password}
                  onChange={(e) => handleInput(e)}
                ></TextField>
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

              {/* <div>
              <Button className={styles.btn} variant='text'>
                <Link to='/password-recover'>Forgot password?</Link>
              </Button>
            </div> */}

              <div className='buttons'>
                <Button className={styles.btn} variant='text'>
                  <Link to='/signup'>Create account</Link>
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
        </div>
      )}
      {error ? error : null}
    </div>
  );
};

export default SignIn;
