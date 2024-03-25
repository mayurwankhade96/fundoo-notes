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
import styles from "./SignIn.module.css";
import { LoadingButton } from "@mui/lab";
import ErrorMessage from "../../../shared/components/ErrorMessage";
import Logo from "../../../shared/components/Logo";

const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const errors = useActionData();
  const matches = useMediaQuery("(max-width:601px)");
  const { state } = useNavigation();

  const togglePasswordVisibility = (e) => {
    setIsPasswordVisible(e.target.checked);
  };

  const onCreateAccountClick = () => {
    navigate("/signup");
  };

  if (state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className='form-container'>
      <Stack
        spacing={1}
        m={matches ? 0 : "auto"}
        width='100%'
        maxWidth={matches ? "none" : "450px"}
      >
        {(errors?.emailPasswordMismatch || errors?.serverError) && (
          <Alert
            color='error'
            severity='error'
            className={matches ? `${styles.alert}` : ""}
          >
            {errors.emailPasswordMismatch
              ? errors.emailPasswordMismatch
              : errors.serverError}
          </Alert>
        )}

        <div className={styles.form}>
          <Logo align='center' />
          <Typography variant='h5' align='center' mt='1rem'>
            Sign in
          </Typography>
          <Typography align='center' mt={1}>
            to continue to Fundoo
          </Typography>

          <Form method='POST' className={styles.formFields}>
            <Stack gap={3}>
              <TextField
                variant='outlined'
                autoFocus
                fullWidth
                label='Email'
                name='email'
                type='email'
                error={!!errors?.email}
                helperText={
                  errors?.email ? (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  ) : (
                    ""
                  )
                }
              />

              <TextField
                variant='outlined'
                fullWidth
                label='Enter your password'
                name='password'
                type={isPasswordVisible ? "text" : "password"}
                error={!!errors?.password}
                helperText={
                  errors?.password ? (
                    <ErrorMessage>{errors.password}</ErrorMessage>
                  ) : (
                    ""
                  )
                }
              />
            </Stack>

            <FormControlLabel
              control={<Checkbox />}
              label='Show password'
              onChange={togglePasswordVisibility}
            />

            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              mt={4}
            >
              <Button onClick={onCreateAccountClick}>Create account</Button>
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
      </Stack>
    </div>
  );
};

export default SignIn;
