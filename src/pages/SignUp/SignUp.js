import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./SignUp.module.css";
import Logo from "../../components/Logo";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = (e) => {
    setIsPasswordVisible(e.target.checked);
  };

  const onSignInClick = () => {
    navigate("/signin");
  };

  return (
    <div className='form-container'>
      <Stack
        direction='row'
        width='100%'
        maxWidth='750px'
        border='1px solid #dadce0'
        borderRadius='8px'
        p='3rem 2.5rem 2.25rem'
        m='auto'
      >
        <div className={styles.leftDiv}>
          <Logo align='left' />
          <Typography variant='h5'>Create your Fundoo Account</Typography>
          <Form>
            <Stack direction='row' spacing={1} pt={3}>
              <TextField
                type='text'
                label='First name'
                name='firstName'
                required
                autoFocus
                variant='outlined'
                size='small'
              />

              <TextField
                type='text'
                label='Last name'
                name='lastName'
                required
                variant='outlined'
                size='small'
              />
            </Stack>

            <TextField
              type='email'
              label='Username'
              name='email'
              required
              variant='outlined'
              fullWidth
              size='small'
              helperText='You can use letters, numbers & periods'
              sx={{ mt: 3 }}
            />

            <Stack direction='row' spacing={1} pt={3}>
              <TextField
                type={isPasswordVisible ? "text" : "password"}
                label='Password'
                name='password'
                required
                variant='outlined'
                size='small'
              />

              <TextField
                type={isPasswordVisible ? "text" : "password"}
                label='Confirm'
                name='confirm'
                required
                variant='outlined'
                size='small'
              />
            </Stack>

            <div className={styles.helperText}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>

            <FormControlLabel
              control={<Checkbox />}
              label='Show password'
              onChange={togglePasswordVisibility}
            />

            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              mt={5}
              mb={2.5}
            >
              <Button onClick={onSignInClick}>Sign in instead</Button>
              <Button variant='contained' disableElevation type='submit'>
                Next
              </Button>
            </Stack>
          </Form>
        </div>

        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          pl='3rem'
          width='45%'
        >
          <img
            src='https://ssl.gstatic.com/accounts/signup/glif/account.svg'
            alt=''
            width='244'
            height='244'
          />
          <Typography
            align='center'
            sx={{ color: "#202124", p: "0 0.5rem", fontWeight: 300 }}
          >
            One account. All of Fundoo working for you
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default SignUp;
