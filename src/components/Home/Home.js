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
        
        axios.get(process.env.REACT_APP_API+"/home", token).then(res =>{
            setTransaction(res.data)
        }).catch(err=>{
            alert(err.response.data)
        })
    })
    


    return (
        <Background>
            <div>
                <h1>Olá, Fulano!</h1>
                <IoExitOutline/>
            </div>
            
            {transaction.length>0?(
            <History>
                {transaction.map(t=>(
                    <Operation value={t.value} description={t.description} date={t.date} type={t.type}/>
                    ))}
                    <Balance>
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
        transaction.forEach(t=>{
            if(t.type==="entrada"){
                ct+=t.value
            }
            else{
                ct-=t.value
            }
            
        })
        return ct
    }
}


