import type { HTMLAttributes } from "react"
export function H1({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return <h1 className="text-5xl font-bold text-gray-1000 tracking-tight leading-tight my-4 text-center" {...props}>{children}</h1>
}
export function H2({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return <h2 className="text-4xl font-bold text-gray-1000 tracking-tight leading-tight my-4 text-center" {...props}>{children}</h2>
}
export function H3({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className="text-3xl font-bold text-gray-1000 tracking-tight leading-tight my-4 text-center" {...props}>{children}</h3>
}
export function H4({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return <h4 className="text-2xl font-bold text-gray-1000 tracking-tight leading-tight my-4 text-center" {...props}>{children}</h4>
}
export function H5({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return <h5 className="text-xl font-bold text-gray-1000 tracking-tight leading-tight my-4 text-center" {...props}>{children}</h5>
}
export function H6({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return <h6 className="text-l font-bold text-gray-1000 tracking-tight leading-tight my-4 text-center" {...props}>{children}</h6>
}