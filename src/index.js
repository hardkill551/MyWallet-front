import ResetStyle from './style/ResetStyle';
import App from './App';
import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle/>
    
    <App />
  </React.StrictMode>
);

