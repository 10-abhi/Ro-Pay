import axios from "axios"
import { Appbar } from "../components/appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/users"
import { useEffect, useState } from "react"

export function Dashboard() {
  const [balance , setBalance] = useState(null);
      useEffect(()=>{
        const fetchbalance = async ()=>{
        const token = localStorage.getItem("token");
        if(!token){
           return("invalid token");
        }
        try{
        
        const response = await axios.get("https://backend-rho-lilac-22.vercel.app/api/v1/account/balance", {
          headers:{
            Authorization: `Bearer ${token}`
          }
         })
         setBalance(response.data.balance);
       
        }catch(err){console.error(err);}
      }
      fetchbalance();
    }
    , [])
     return <div className=" h-screen w-screen py-4 px-2 bg-black"> 
     <div className="rounded-lg bg-slate-500 h-full w-full">
      <Appbar></Appbar>
        <Balance  value={balance}></Balance>
        <Users></Users>
        </div></div>
}