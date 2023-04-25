import styled from "styled-components"

export const NoHistory = styled.div`
background-color:white;
    width:100%;
    height:100%;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:400;
    font-size:20px;
    color:#868686;
    text-align:center;
    padding:20%;
`

export const Balance = styled.div`
font-family: 'Raleway', sans-serif;
font-weight: 400;
font-size:17px;
display:flex;
background-color:white;
justify-content:space-between;
align-items:center;
padding: 0px 10px;
height:40px;
position:fixed;
left:28px;
right:28px;
bottom: 171px;
border-radius:5px;

p:first-child{
    font-weight:700;
}

p:nth-child(2){
    font-weight:700;
}
`
export const History = styled.div `
background-color:white;
    width:100%;
    height:100%;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    padding:22px 12px;
    padding-bottom: 50px;
    overflow:scroll ;
`
export const Background = styled.div`
background-color:#8C11BE;
width: 100vw;
height: 100vh;
display:flex;
flex-direction:column;
font-family: 'Raleway', sans-serif;
padding:25px;

>div:first-child{
    display:flex;
    justify-content:space-between;
    align-items:center;
    color: white;
    font-size:26px;
    font-weight:700;
    margin-bottom:22px;
    svg{
        font-size:36px;
    }
    
}

>div:nth-child(3){
    background-color:#8C11BE;
    display:flex;
    justify-content:space-between;
    margin-top:13px;
    a{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        background-color:#A328D6;
        padding:10px;
        width:40vw;
        height: 120px;   
        color:white;
        font-weight:700;
        font-size:17px;
        border-radius:5px;
        border:0px;
        svg{
            font-size:28px;
        }
    }
    
}
`