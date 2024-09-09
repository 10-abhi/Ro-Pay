import {Heading} from "../components/heading"
import {SubHeading} from "../components/subHeading"
import {InputBox} from "../components/inputbox"
import {Button} from "../components/button"
import { BottomWarning } from "../components/bottomWarning"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export function Signup (){
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    
    return <div className="flex justify-center h-screen w-screen bg-[url('/src/assets/unsplashbg.jpg')]" >
       
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-slate-50/10 w-90 text-center p-2 h-max px-4">
        <Heading label={"Sign up"}></Heading>
        <SubHeading label={"Enter Your Information to create an account"}></SubHeading>
        <InputBox label={"First Name"} placeholder={"John"} onChange={e=>{setFirstName(e.target.value)}} ></InputBox>
        <InputBox label={"Last Name"} placeholder={"Doe"} onChange={e=>{setLastName(e.target.value)}}></InputBox>
        <InputBox label={"username"} placeholder={"xyz@gmail.com"} onChange={e=>{setUsername(e.target.value)}}></InputBox>
        <InputBox label={"password"} placeholder={"12345"} onChange={e=>{setPassword(e.target.value)}}></InputBox>
        <Button onClick={async ()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup" , {
                username,
                password,
                firstName,
                lastName
            })
            localStorage.setItem("token" , response.data.token);
            navigate("/dashboard")
        }} label={"Sign up"}></Button>
        </div>
         <BottomWarning label={"Alread have an account?"} buttonText={"Sign in"} to={"/signin"}  ></BottomWarning>
        </div>
    </div>
}

