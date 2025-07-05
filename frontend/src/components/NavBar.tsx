import { NavLink } from "react-router"
export default function NavBar({ options }: any) {
    return (
        <nav className="flex gap-4 p-4 bg-gray-900 text-white">
            {options.map((opt: any, i: number) => (
                <NavLink key={i} to={opt.path} className={({ isActive }) => isActive ? "font-bold" : "hover:underline"}>
                    {opt.label}
                </NavLink>
            ))}
        </nav>
    )
}