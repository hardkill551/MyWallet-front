import { useContext, useEffect, useState } from "react"
import Background from "./style"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"
import { UserContext } from "../../ContextAPI/ContextUser"



export default function SignIn(){
    const token = localStorage.getItem("token")
    useEffect(()=>{
        if(token){
            axios.get(process.env.REACT_APP_API+"/active", {headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then(res=>{
                if(res.data){
                    navigate("/home")
                }
            }).catch(err=>{
                alert(err.response.data)
            })
        }
    }, [])


    const [user, setUser] = useState({email: "", password: ""})
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()
    const {setToken} = useContext(UserContext)
    
    return(
        <Background>
            <form onSubmit={enter}>
            <h1>MyWallet</h1>
            <input disabled={disabled} value={user.email} type="email" onChange={e => setUser({...user, email:e.target.value})}placeholder="E-mail"/>
            <input disabled={disabled} value={user.password}type="password" onChange={e=>setUser({...user, password:e.target.value})}placeholder="Senha"/>
            <button disabled={disabled} type="submit">{disabled ? <ThreeDots color="white"/>: "Entrar"}</button>
            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
            </form>
        </Background>
    )
    function enter(e){
        e.preventDefault()
        setDisabled(true)
        if(!user.email||!user.password){
            setDisabled(false)
            return alert("Preencha todos os campos!")

        }
        axios.post(process.env.REACT_APP_API, user).then(res => {
            setToken(res.data)
            localStorage.setItem("token", res.data)
            navigate("/home")
        }).catch(err => {
            alert(err.response.data)
            setDisabled(false)
        })
    }
    
}


