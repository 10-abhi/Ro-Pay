import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Users(){
      const [users , setUsers] = useState([]);
      const [filter , setFilter] = useState([]);

       useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
        .then(response=>{setUsers(response.data.user)})
       }, [filter])
     return <div className="h-max w-full pb-28  px-14">
        <div className="text-black text-xl font-bold mt-6 ml-14 pb-2">
            Users
        </div>
        <div className=" my-3 ml-14 mr-28 pb-4">
            <input type="text" onChange={(e)=>{
              setFilter(e.target.value);
            }} placeholder="Search users..."  className="w-full" 
            />
        </div>
        <div>
          {users.map(user => <User user={user}/>)}
        </div>
     </div>
    
    }
function User ({user}){
  const navigate = useNavigate();
 return <div className=" h-20 my-2 ">
      <div className="flex justify-between ml-8 "> <div className="flex">
        <div className=" flex justify-center rounded-full bg-slate-300 pt-2 h-10 w-10 mr-5 ml-7">
         {user.firstName[0].toUpperCase()}
      </div>
      <div className="ml-6 mt-1 font-semibold text-lg">
        {user.firstName} {user.lastName}
      </div></div> 
      <div className=" h-full mr-28 bg-slate-800 flex justify-center text-white rounded-lg w-32"><button onClick={e=>{
        navigate("/send?id="+user._id + "&name="+user.firstName);
      }}>{"Send Money"}</button></div>
    </div>
</div>
}