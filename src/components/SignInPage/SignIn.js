import { useState } from "react"
import Background from "./style"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"



export default function SignIn({setToken}){
    const [user, setUser] = useState({email: "", password: ""})
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()
    return(
        <Background>
            <form onSubmit={enter}>
            <h1>MyWallet</h1>
            <input disabled={disabled} type="email" onChange={e => setUser({...user, email:e.target.value})}placeholder="E-mail"/>
            <input disabled={disabled} type="password" onChange={e=>setUser({...user, password:e.target.value})}placeholder="Senha"/>
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
            setToken({headers:{
                Authorization: `Bearer ${res.data.token}` 
            }})
            navigate("/home")
        }).catch(err => {
            alert(err.response.data.message)
            setDisabled(false)
        })
    }
    
}


