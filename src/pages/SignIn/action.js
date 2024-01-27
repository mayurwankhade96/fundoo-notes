import axios from "axios";
import { redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  const { data, status } = await authenticateUser(payload);
  if (status === 200 && data) {
    localStorage.setItem("token", data.id);
  }
  if (status === 401 && data.error && data.error.statusCode === 401) {
    return { emailPasswordMismatch: "Email or password doesn't match" };
  }
  return redirect("/home");
};

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
