export const BottonWarning = ({label , buttonText , to})=>{
   return <div className="py-2 text-sm flex justify-center">
    <div>
    {label}
     </div>
    <link className="text-stone-900 pointer underline pl-1  to={to}"></link>
    </div>
}