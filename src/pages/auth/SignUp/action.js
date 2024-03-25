import axios from "axios";
import { redirect } from "react-router-dom";

const registerUser = async (formData) => {
  try {
    const response = await axios.post(
      "https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
      formData
    );
    return response;
  } catch (err) {
    const { message, response } = err;
    console.log(message);
    return response;
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);
  const { firstName, lastName, email, password, confirm } = formValues;
  const errors = {};

  if (firstName.trim() === "") {
    errors.firstName = "Enter first name";
  }

  if (lastName.trim() === "") {
    errors.lastName = "Enter last name";
  }

  if (email.trim() === "") {
    errors.email = "Enter an email";
  }

  if (password.trim() === "") {
    errors.password = "Enter a password";
  }

  if (confirm.trim() === "") {
    errors.confirm = "Confirm your password";
  }

  if (password !== confirm) {
    errors.passwordMismatch = "Those passwords didn’t match. Try again.";
  }

  const hasError =
    errors.firstName ||
    errors.lastName ||
    errors.email ||
    errors.password ||
    errors.confirm ||
    errors.passwordMismatch;

  if (!hasError) {
    const { confirm, ...rest } = formValues;
    const payload = { ...rest, service: "advance" };
    const { data, status } = await registerUser(payload);

    if (status === 200 && data.data.success) {
      return redirect("/signin");
    }

    if (status === 422 && data.error && data.error.statusCode === 422) {
      errors.emailAlreadyExists = data.error.details.messages.email;
    } else {
      errors.serverError = "Something went wrong";
    }
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  return null;
};
