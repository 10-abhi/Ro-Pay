// export const Button = ({label })=>{
//     return <div className="flex justify-center widht-full border rounded bg-slate-900 py-2 ">
//         <button className="text-md text-slate-200 ">{label}</button>
//     </div>
// }

export function Button({label, onClick}) {
    return <button onClick={onClick} type="button" class="w-full text-white bg-gradient-to-r from-teal-700 to-slate-700 hover:from-purple-700 hover:to-red-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
}
  