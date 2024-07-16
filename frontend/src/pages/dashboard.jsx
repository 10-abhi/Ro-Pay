import { Appbar } from "../components/appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/users"
export function Dashboard() {
     return <div className="pt-4 px-10"> 
     <div className="rounded-lg bg-slate-300">
      <Appbar></Appbar>
        <Balance value={"20000"}></Balance>
        <Users></Users>
        </div></div>
}