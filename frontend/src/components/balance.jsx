export function Balance({value}){
    const val = String(value).slice(0,4);
    return <div className="flex px-16">
        <div className="flex justify-center ml-10 my-3 font-medium text-start text-slate-900 text-md">
        {"Your balance"}
        </div>
        <div className="flex justify-center ml-8 my-3 text-slate-900 text-lg">
        ₹ {val}
        </div>
    </div>
}