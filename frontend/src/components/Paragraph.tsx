import type { HTMLAttributes } from "react"
export default function P({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
    return <p className="text-base text-gray-1000 leading-relaxed tracking-wide my-2" {...props}>{children}</p>
}