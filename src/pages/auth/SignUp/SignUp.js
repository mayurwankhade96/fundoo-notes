import React, { useState } from "react";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./SignUp.module.css";
import Logo from "../../../shared/components/Logo";
import ErrorMessage from "../../../shared/components/ErrorMessage";
import { LoadingButton } from "@mui/lab";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const errors = useActionData();
  const { state } = useNavigation();
  const mediumDevice = useMediaQuery("(max-width:801px)");
  const smallDevice = useMediaQuery("(max-width:601px)");

  const togglePasswordVisibility = (e) => {
    setIsPasswordVisible(e.target.checked);
  };

  const onSignInClick = () => {
    navigate("/signin");
  };

  if (state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className='form-container'>
      <Stack
        spacing={1}
        m={smallDevice ? 0 : "auto"}
        width='100%'
        maxWidth={smallDevice ? "none" : "750px"}
      >
        {(errors?.emailAlreadyExists || errors?.serverError) && (
          <Alert
            color='error'
            severity='error'
            className={smallDevice ? `${styles.alert}` : ""}
          >
            {errors.emailAlreadyExists
              ? errors.emailAlreadyExists
              : errors.serverError}
          </Alert>
        )}

        <div className={styles.form}>
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
                  autoFocus
                  variant='outlined'
                  size='small'
                  error={!!errors?.firstName}
                  helperText={
                    errors?.firstName ? (
                      <ErrorMessage>{errors.firstName}</ErrorMessage>
                    ) : (
                      ""
                    )
                  }
                />

                <TextField
                  fullWidth
                  type='text'
                  label='Last name'
                  name='lastName'
                  variant='outlined'
                  size='small'
                  error={!!errors?.lastName}
                  helperText={
                    errors?.lastName ? (
                      <ErrorMessage>{errors.lastName}</ErrorMessage>
                    ) : (
                      ""
                    )
                  }
                />
              </Stack>

              <TextField
                type='email'
                label='Username'
                name='email'
                variant='outlined'
                fullWidth
                size='small'
                error={!!errors?.email}
                helperText={
                  errors?.email ? (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  ) : (
                    "You can use letters, numbers & periods"
                  )
                }
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
                  variant='outlined'
                  size='small'
                  error={!!errors?.password}
                  helperText={
                    errors?.password ? (
                      <ErrorMessage>{errors.password}</ErrorMessage>
                    ) : (
                      ""
                    )
                  }
                />

                <TextField
                  fullWidth
                  type={isPasswordVisible ? "text" : "password"}
                  label='Confirm'
                  name='confirm'
                  variant='outlined'
                  size='small'
                  error={!!errors?.confirm}
                  helperText={
                    errors?.confirm ? (
                      <ErrorMessage>{errors.confirm}</ErrorMessage>
                    ) : (
                      ""
                    )
                  }
                />
              </Stack>

              {!errors?.password && (
                <div
                  className={`${styles.helperText} ${
                    errors?.passwordMismatch ? styles.errorText : ""
                  }`}
                >
                  {!errors?.passwordMismatch ? (
                    "Use 8 or more characters with a mix of letters, numbers & symbols"
                  ) : (
                    <ErrorMessage>{errors.passwordMismatch}</ErrorMessage>
                  )}
                </div>
              )}

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
                <LoadingButton
                  variant='contained'
                  disableElevation
                  type='submit'
                  loading={state === "submitting"}
                >
                  Next
                </LoadingButton>
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
        </div>
      </Stack>
    </div>
  );
};

export default SignUp;
