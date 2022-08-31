import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../components/Logo";

const SignIn = () => {
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: signInUser.email,
      password: signInUser.password,
    };

    axios
      .post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
        payload
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
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
                variant='outlined'
                fullWidth
                value={signInUser.email}
                onChange={(e) =>
                  setSignInUser({ ...signInUser, email: e.target.value })
                }
              ></TextField>
            </div>
            <div className={styles.formControl}>
              <TextField
                type={signInUser.showPassword ? "text" : "password"}
                label='Enter your password'
                variant='outlined'
                fullWidth
                value={signInUser.password}
                onChange={(e) =>
                  setSignInUser({ ...signInUser, password: e.target.value })
                }
              ></TextField>
            </div>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) =>
                      setSignInUser({
                        ...signInUser,
                        showPassword: e.target.checked,
                      })
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
              <Button className={styles.btn} variant='contained' type='submit'>
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
