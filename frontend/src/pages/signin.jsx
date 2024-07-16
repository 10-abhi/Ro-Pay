import { Heading } from "../components/heading";
import { SubHeading } from "../components/subHeading";
import { InputBox } from "../components/inputbox";
import { Button } from "../components/button";
import { BottomWarning } from "../components/bottomWarning";
export function Signin (){
    
  return  <div className="flex justify-center bg-slate-400 h-screen">
    <div className="flex flex-col justify-center">
      <div className="w-96 bg-white rounded-lg text-center px-4 p-2 h-max"> 
       
     <Heading label={"Sign In"} ></Heading>
     <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
     <InputBox label={"Email" } placeholder={"xyz@example.com"}></InputBox>
     <InputBox label={"Password"} placeholder={"123456"}></InputBox>
     <Button label={"Sign In"}></Button></div>
     <BottomWarning label={"Don't have an account? "} buttonText={"Sign Up"} to={"/signup"}></BottomWarning>
   </div></div> 
}