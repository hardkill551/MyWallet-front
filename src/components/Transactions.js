import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { UserContext } from "../ContextAPI/ContextUser"
import { IoExitOutline} from "react-icons/io5";

export default function Transactions(){

    const params = useParams()
    const navigate = useNavigate()
    const lctoken = localStorage.getItem("token")
    useEffect(()=>{
        
        if(!lctoken){
            navigate("/")
        }
        if(lctoken){
            axios.get(process.env.REACT_APP_API+"/active", {
                headers:{
                    token:lctoken
                }
            }).then(res=>{
                if(!res.data){
                    navigate("/")
                }
            }).catch(err=>{
                alert(err.response.data)
            })
        }
        if (params.tipo!=="saida"&&params.tipo!=="entrada"){
            navigate("/home")
        }
    })

    
    const {token} = useContext(UserContext)
    const [comes, setComes] = useState({value: "", description: ""})
    
    return (
        <Background>
            <form onSubmit={entry}>
            <div>
            <h1>{`Nova ${params.tipo==="saida"?"saída":"entrada"}`}</h1>
            <IoExitOutline onClick={()=>{navigate("/home")}}/>
            </div>
            <input type="number" value={comes.value} onChange={e => setComes({...comes, value: e.target.value})} placeholder="Valor"/>
            <input type="text" value={comes.description} onChange={e=>setComes({...comes, description:e.target.value})} placeholder="Descrição"/>
            <button type="submit">{`Salvar ${params.tipo==="saida"?"saída":"entrada"}`}</button>
            </form>
        </Background>
    )

    function entry(e){
        e.preventDefault()
        if(!comes.description || !comes.value){
            return alert("Preencha todos os campos!")
        }
        if(comes.value<=0){
            return alert("O valor não pode ser negativo ou nulo!")
        }
        axios.post(process.env.REACT_APP_API+"/transacao/"+params.tipo, comes, token).then(res=>{
            setComes({value: "", description: ""})
        }).catch(err=>{
            alert(err.response.data)
        })
    }
}

const Background = styled.div`
background-color:#8C11BE;
width: 100vw;
height: 100vh;
display:flex;
flex-direction:column;
font-family: 'Raleway', sans-serif;
padding:25px;
form div:first-child{
    display:flex;
    justify-content:space-between;
    color: white;
    font-size:26px;
    font-weight:700;
    margin-bottom:22px;
    svg{
        font-size:36px;
    }
    
}

button{
    align-items:center;
}
`