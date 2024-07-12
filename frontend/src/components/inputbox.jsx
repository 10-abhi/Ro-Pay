const inputBox = ({label , placeholder})=>{
    return <div>
        <div className="text-md text-left font-bold pb-1 px-2">
             {label}
        </div>
       <input placeholder={placeholder} className="w-full text-slate-500 px-2 py-1 border rounded" />
        
    </div>
}