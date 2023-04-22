import { Link, useNavigate } from "react-router-dom";
import Background from "./style";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp(){
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)
    const [signIn, setSignIn] = useState({name: "", email: "", password: "", confirmPassword: ""})
    return(
        <Background>
            <form onSubmit={register}>
                <h1>MyWallet</h1>
                <input disabled={disabled} onChange={e => setSignIn({...signIn, name: e.target.value})}type="text" placeholder="Nome"/>
                <input disabled={disabled} onChange={e => setSignIn({...signIn, email: e.target.value})}type="email"placeholder="E-mail"/>
                <input disabled={disabled} onChange={e => setSignIn({...signIn, password: e.target.value})}type="password" placeholder="Senha"/>
                <input disabled={disabled} onChange={e => setSignIn({...signIn, confirmPassword: e.target.value})} type="password" placeholder="Confirme a senha"/>
                <button disabled={disabled} type="submit">{disabled ? <ThreeDots color="white"/>:"Cadastrar"}</button>
                <Link to="/">Já tem uma conta? Entre agora!</Link>
            </form>

        </Background>
    )
    function register(e){
        e.preventDefault()
        setDisabled(true)
        if(!signIn.name || !signIn.email || !signIn.password || !signIn.confirmPassword){
            setDisabled(false)
            return alert("Preencha todos os campos!")
            
        }
        if (signIn.password!==signIn.confirmPassword){
            setDisabled(false)
            return alert("As duas senhas devem ser iguais!")
            
        }
        const sign = {...signIn}
        delete sign.confirmPassword
        axios.post(process.env.REACT_APP_API, sign).then(res=>{
            navigate("/")
        }).catch(err=>{
            alert(err.response.data.message)
            setDisabled(false)
        })
    }
}