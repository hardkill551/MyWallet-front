import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
}
p{
    font-family: 'Raleway', sans-serif;
}
a{
    text-decoration:none;
}
input{
    width:100%;
    height:58px;
    border-radius:5px;
    border:0px;
    margin-bottom:13px;
    padding-left:15px;
    font-size:20px;
    color:black;
}
input::placeholder{
    font-family: 'Raleway', sans-serif;
    color:black;
    font-size:20px;
}

button, a{
    font-family: 'Raleway', sans-serif;
    font-weight:700;
    width:100%;
    height:58px;
    border-radius:5px;
    border:0px;
    background-color: #A328D6;
    display:flex;
    justify-content:center;
    color:white;
    font-size:20px;
    margin-bottom:13px;
}
a{
    background-color: #8C11BE;
    font-size:15px;
}
`

export default GlobalStyle