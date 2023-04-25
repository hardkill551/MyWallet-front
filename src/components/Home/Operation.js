import styled from "styled-components"

export default function Operation({value, description, date, type}){
    return (
        <Transaction type={type}>
            <div>
                <p>{date}</p>
                <p>{description}</p>
            </div>
            <p>{value}</p>
        </Transaction>
    )
}

const Transaction = styled.div`
display:flex;
justify-content:space-between;
font-family: 'Raleway', sans-serif;
font-weight:400;
font-size:16px;
margin-bottom:15px;


div:first-child{
    
    display:flex;
    p{
        margin-left:10px;
    }

    p:first-child{
        color: #C6C6C6;
    }
}

>p:nth-child(2){
    color:${a=>a.type==="entrada"?"#03AC00":"#C70000"};
}
`