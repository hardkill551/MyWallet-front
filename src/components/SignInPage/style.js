import styled from "styled-components"



const Background = styled.div`
background-color: #8C11BE;
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding: 0 10%;
form{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
}
h1{
    color: white;
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    margin-bottom:24px;
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
    align-items:center;
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

export default Background