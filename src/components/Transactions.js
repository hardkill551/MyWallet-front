import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { UserContext } from "../ContextAPI/ContextUser"
import { IoExitOutline} from "react-icons/io5";
import { ThreeDots } from "react-loader-spinner"

export default function Transactions(){
    const [disabled, setDisabled] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    const lctoken = localStorage.getItem("token")
    useEffect(()=>{
        if (params.tipo!=="saida"&&params.tipo!=="entrada" ){
            navigate("/home")
        }
        if(!lctoken){
            navigate("/")
        }
        if(lctoken){
            axios.get(process.env.REACT_APP_API+"/active", {headers:{
                    Authorization:`Bearer ${lctoken}`
                }
            }).then(res=>{
                if(!res.data){
                    navigate("/")
                }
            }).catch(err=>{
                alert(err.response.data)
            })
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
            <input disabled={disabled} type="number" value={comes.value} onChange={e => setComes({...comes, value: e.target.value})} placeholder="Valor"/>
            <input disabled={disabled} type="text" value={comes.description} onChange={e=>setComes({...comes, description:e.target.value})} placeholder="Descrição"/>
            <button disabled={disabled} type="submit">{disabled ? <ThreeDots color="white"/>:`Salvar ${params.tipo==="saida"?"saída":"entrada"}`}</button>
            </form>
        </Background>
    )

    function entry(e){
        e.preventDefault()
        setDisabled(true)
        if(!comes.description || !comes.value){
            setDisabled(false)
            return alert("Preencha todos os campos!")
        }
        if(comes.value<=0){
            setDisabled(false)
            return alert("O valor não pode ser negativo ou nulo!")
        }
        axios.post(process.env.REACT_APP_API+"/transacao/"+params.tipo, comes, {headers: {
            Authorization: `Bearer ${lctoken}`
        }}).then(res=>{
            setComes({value: "", description: ""})
            setDisabled(false)
        }).catch(err=>{
            setDisabled(false)
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
    font-size:26px;
    align-items:center;
    svg{
        margin-top:22px;
        height:58px;
    }
}
`