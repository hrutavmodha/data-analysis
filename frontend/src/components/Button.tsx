import type { ButtonHTMLAttributes } from "react";
export default function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <>
            <button className="bg-blue-600 w-[200px] h-[40px] text-white px-4 py-2 m-2 rounded-xl hover:bg-blue-700 transition-all duration-200" {...props}>{children}</button>
            <br /><br />
        </>
    )
}