import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import axios from "axios";

export function Send() {
        const [searchparams] = useSearchParams();
        const name = searchparams.get("name");
        const id = searchparams.get("id");
        const [amount , setAmount ] = useState(0);
    return <div className="flex justify-center h-screen bg-black">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-slate-500 shadow-lg rounded-lg"
            >
                <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{name}</h3>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input onChange={(e)=>{
                        setAmount(e.target.value);
                    }}
                        type="number"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white" onClick={()=>{
                        axios.post("https://backend-rho-lilac-22.vercel.app/api/v1/account/transfer" , {

                            to : id ,
                            amount
                        } , {
                           headers : {
                            Authorization : "Bearer " + localStorage.getItem("token")
                           } 
                        })
                    } }>
                        Initiate Transfer
             </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}