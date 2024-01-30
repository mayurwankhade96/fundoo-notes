import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./SignUp.module.css";
import Logo from "../../components/Logo";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const mediumDevice = useMediaQuery("(max-width:801px)");
  const smallDevice = useMediaQuery("(max-width:601px)");

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
        border={mediumDevice ? "none" : "1px solid #dadce0"}
        borderRadius='8px'
        p='3rem 2.5rem 2.25rem'
        m={mediumDevice ? 0 : "auto"}
      >
        <div className={styles.leftDiv}>
          <Logo align='left' />
          <Typography variant='h5'>Create your Fundoo Account</Typography>
          <Form method='POST'>
            <Stack
              direction={smallDevice ? "column" : "row"}
              spacing={smallDevice ? 3 : 1}
              pt={3}
            >
              <TextField
                fullWidth
                type='text'
                label='First name'
                name='firstName'
                required
                autoFocus
                variant='outlined'
                size='small'
              />

              <TextField
                fullWidth
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

            <Stack
              direction={smallDevice ? "column" : "row"}
              spacing={smallDevice ? 3 : 1}
              pt={3}
            >
              <TextField
                fullWidth
                type={isPasswordVisible ? "text" : "password"}
                label='Password'
                name='password'
                required
                variant='outlined'
                size='small'
              />

              <TextField
                fullWidth
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
          display={mediumDevice ? "none" : "flex"}
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
