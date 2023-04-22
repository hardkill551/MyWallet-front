import ResetStyle from './style/ResetStyle';
import GlobalStyle from "./style/GlobalStyle"
import App from './App';
import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from './ContextAPI/ContextUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <ResetStyle/>
    <GlobalStyle/>
    <App />
    </UserProvider>
  </React.StrictMode>
);

