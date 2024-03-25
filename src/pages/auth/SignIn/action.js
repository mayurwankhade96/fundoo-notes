import axios from "axios";
import { redirect } from "react-router-dom";

const authenticateUser = async (formData) => {
  try {
    const response = await axios.post(
      "https://fundoonotes.incubation.bridgelabz.com/api/user/login",
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
  const email = formData.get("email");
  const password = formData.get("password");
  const errors = {};

  if (email.trim() === "") {
    errors.email = "Enter an email";
  }

  if (password.trim() === "") {
    errors.password = "Enter a password";
  }

  if (!errors.email && !errors.password) {
    const payload = Object.fromEntries(formData);
    const { data, status } = await authenticateUser(payload);
    if (status === 200 && data) {
      localStorage.setItem("token", data.id);
      return redirect("/home");
    }

    if (status === 401 && data.error && data.error.statusCode === 401) {
      errors.emailPasswordMismatch = "Email or password doesn't match";
    } else {
      errors.serverError = "Something went wrong";
    }
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  return null;
};
