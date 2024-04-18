import { useEffect, useState } from 'react'
import axios from 'axios'


const useLogin = ()=>{
    const [isLogin ,setIsLogin]= useState(false)

    useEffect(()=>{
        axios.get("api/listings/token")
        .then(res=>setIsLogin(true) ).catch(err=>setIsLogin(false))
    },[])

    return isLogin;
}

export default useLogin