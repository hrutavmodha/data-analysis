import P from "./components/Paragraph"
import { useEffect, useState } from "react"
export default function App() {
    const [info, setInfo] = useState(0)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND}/sales`, {
            method: "GET",
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setInfo(data.averageSales)
        })
    })
    return (
        <div>
            <P>{info}</P>
        </div>
    )
}