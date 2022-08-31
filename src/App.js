import "./App.css";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='signup' element={<SignUp />} />
      <Route path='signin' element={<SignIn />} />
    </Routes>
  );
}

export default App;
