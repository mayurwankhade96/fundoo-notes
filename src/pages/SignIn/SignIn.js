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
import Logo from "../../components/Logo";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const erros = useActionData();
  const matches = useMediaQuery("(max-width:601px)");
  const { state } = useNavigation();

  const togglePasswordVisibility = (e) => {
    setIsPasswordVisible(e.target.checked);
  };

  const onCreateAccountClick = () => {
    navigate("/signup");
  };

  if (state === "submitting" || state === "loading") {
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
        {erros?.emailPasswordMismatch && (
          <Alert
            color='error'
            severity='error'
            className={matches ? `${styles.alert}` : ""}
          >
            {erros.emailPasswordMismatch}
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
                required
                type='email'
              />

              <TextField
                variant='outlined'
                fullWidth
                label='Enter your password'
                name='password'
                type={isPasswordVisible ? "text" : "password"}
                required
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
              <Button variant='contained' disableElevation type='submit'>
                Next
              </Button>
            </Stack>
          </Form>
        </div>
      </Stack>
    </div>
  );
};

export default SignIn;
