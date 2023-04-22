import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignInPage/SignIn";
import SignUp from "./components/SignInPage/SignUp";
import Home from "./components/Home";
import NewEntry from "./components/NewEntry";
import NewExit from "./components/NewExit";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/cadastro" element={<SignUp/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Home" element={<NewEntry/>}/>
        <Route path="/Home" element={<NewExit/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
