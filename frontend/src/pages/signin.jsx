import { Heading } from "../components/heading";
import { SubHeading } from "../components/subHeading";
import { InputBox } from "../components/inputbox";
import { Button } from "../components/button";
import { BottomWarning } from "../components/bottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export function Signin (){
      const [username , setUsername] = useState("");
      const [password , setPassword] = useState("");
      const navigate = useNavigate();
  return  <div className="flex justify-center bg-slate-400 h-screen">
    <div className="flex flex-col justify-center">
      <div className="w-96 bg-white rounded-lg text-center px-4 p-2 h-max"> 
       
     <Heading label={"Sign In"} ></Heading>
     <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
     <InputBox label={"Email" } placeholder={"xyz@example.com"} onChange={e=>{setUsername(e.target.value)}}></InputBox>
     <InputBox label={"Password"} placeholder={"123456"} onChange={e=>{setPassword(e.target.value)}}></InputBox>
     <Button label={"Sign In"} onClick={async()=>{
        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
           username,
           password
         })
         if(response.status == 200){
          navigate("/dashboard");
         }
     }} ></Button></div>
     <BottomWarning label={"Don't have an account? "} buttonText={"Sign Up"} to={"/signup"}></BottomWarning>
   </div></div> 
}