import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignInPage/SignIn";
import SignUp from "./components/SignInPage/SignUp";
import Home from "./components/Home/Home";
import Transactions from "./components/Transactions";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/cadastro" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/nova-transacao/:tipo" element={<Transactions/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
