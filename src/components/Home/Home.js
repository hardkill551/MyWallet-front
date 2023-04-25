import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { IoExitOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { UserContext } from "../../ContextAPI/ContextUser";
import Operation from "./Operation";
import { Background, Balance, History, NoHistory } from "./style";


export default function Home(){
    const navigate = useNavigate()
    const lctoken = localStorage.getItem("token")
    const {token} = useContext(UserContext)
    const [transaction, setTransaction] = useState([])
    const [name, setName] = useState("")
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
                if(res.data===false){
                    navigate("/")
                }
                setName(res.data)
            }).catch(err=>{
                alert(err.response.data)
            })
        }
        
        axios.get(process.env.REACT_APP_API+"/home", token).then(res =>{
            setTransaction(res.data)
        }).catch(err=>{
            alert(err.response.data)
        })
    })
    


    return (
        <Background>
            <div>
                <h1>Olá, {name}!</h1>
                <IoExitOutline onClick={disconnect}/>
            </div>
            
            {transaction.length>0?(
            <History>
                {transaction.map((t, i)=>(
                    <Operation key={i} value={t.value} description={t.description} date={t.date} type={t.type}/>
                    ))}
                    <Balance total={total()}>
                        <p>SALDO</p>
                        <p>{total()}</p>
                    </Balance>
            </History>):(<NoHistory>
            <p>
                    Não há registros de entrada ou saída
            </p>
            </NoHistory>)}
            
            
            <div>
                <Link to="/nova-transacao/entrada">
                    <IoAddCircleOutline/>
                    <p>Nova entrada</p>
                </Link>
                <Link to="/nova-transacao/saida">
                    <IoRemoveCircleOutline/>
                    <p>Nova saída</p>
                </Link>
            </div>
        </Background>

    )

    function total(){
        let ct = 0
        for(let i = 0; i<transaction.length;i++){
            if(transaction[i].type==="entrada"){
                ct+=Number(transaction[i].value)
            }
            else{
                ct-=Number(transaction[i].value)
            }
        }
        return ct.toFixed(2)
    }
    function disconnect(){
        localStorage.removeItem("token")
        navigate("/")
    }
}


