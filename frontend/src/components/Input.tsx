import type { InputHTMLAttributes } from "react"
// import type { inputType } from "../types/inputType"
export default function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>){
    return (
        <>
            <input className="w-[275px] h-[30px] px-4 py-2 m-4 rounded-2xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-fray-500 transition duration-200" {...props}/>
            <br/><br/>
        </>
    )    
}