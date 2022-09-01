import "./App.css";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='' element={<Navigate to='/signup' />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='signin' element={<SignIn />} />
    </Routes>
  );
}

export default App;
