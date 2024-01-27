import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>Hello</div>
    // <Routes>
    //   <Route path='home' element={<Home />} />
    //   <Route path='' element={<Navigate to='/signup' />} />
    //   <Route path='signup' element={<SignUp />} />
    //   <Route path='signin' element={<SignIn />} />
    // </Routes>
  );
}

export default App;
