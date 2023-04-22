import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home({token}){
    
    const navigate = useNavigate()
    useEffect(()=>{
        if(!token){
            navigate("/")
        }
    }, [])
    


    return (
        <></>
    )
}