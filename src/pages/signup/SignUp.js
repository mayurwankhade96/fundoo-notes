import React, { useState } from "react";
import styles from "./SignUp.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    service: "advance",
    showPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      service: user.service,
    };

    axios
      .post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
        payload
      )
      .then((res) => {
        setLoading(false);
        setError("");
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Something went wrong");
      });

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      service: "advance",
      showPassword: false,
    });
  };

  return (
    <div>
      {loading ? (
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
                    variant='outlined'
                    size='small'
                    value={user.firstName}
                    onChange={(e) =>
                      setUser({ ...user, firstName: e.target.value })
                    }
                  />
                  <TextField
                    type='text'
                    label='Last name'
                    variant='outlined'
                    size='small'
                    value={user.lastName}
                    onChange={(e) =>
                      setUser({ ...user, lastName: e.target.value })
                    }
                  />
                </div>
                <div className={styles.emailInput}>
                  <TextField
                    type='email'
                    label='Username'
                    variant='outlined'
                    fullWidth
                    size='small'
                    helperText='You can use letters, numbers & periods'
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div className={styles.passwordInputs}>
                  <TextField
                    type={user.showPassword ? "text" : "password"}
                    label='Password'
                    variant='outlined'
                    size='small'
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <TextField
                    type={user.showPassword ? "text" : "password"}
                    label='Confirm'
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
                        onChange={(e) =>
                          setUser({ ...user, showPassword: e.target.checked })
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
