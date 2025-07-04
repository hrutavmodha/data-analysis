import Button from "./components/Button"
import { H1 } from "./components/Headings"
import P from "./components/Paragraph"
import { useState } from "react"
export default function App() {
    const [sale, setSale] = useState<number>(0)
    const [tops, setTops] = useState([])
    const getSales = () => {
        fetch('http://localhost:8000/sales', {
            method: 'GET'
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setSale(data.averageSales)
        }).catch((error) => {
            alert('Error occured')
            console.log(error)
        })
    }
    const getTops = () => {
        fetch('http://localhost:8000/tops', {
            method: 'GET'
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setTops(data.top3Brands)
        }).catch((error) => {
            alert('Error occured')
            console.log(error)
        })
    }
    return (
        <div>
            <H1>Welcome to vehicle analytics dashboard</H1>
            <Button onClick={getSales}>Get Average Sales</Button>
            {sale !== 0 ? <P>The average sales of the car-seller was about {sale} rupees`</P> : <P>Click the above button to get average sales information here</P>}
            <Button onClick={getTops}>Top Sold Items</Button>
            {tops.length > 0 ?
                <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden" border={2}>
                    <thead>
                        <th>Battery / Mileage</th>
                        <th>Brand</th>
                        <th>Ex-Showroom Price (₹ Lakhs)</th>
                        <th>Fuel Type</th>
                        <th>Is EV?</th>
                        <th>Launch Year</th>
                        <th>Model</th>
                        <th>Monthly Sales (Units)</th>
                        <th>Segment</th>
                        <th>Variants</th>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {tops.map((top, i) => (
                            <tr className="hover:bg-gray-50" key={i}>
                                <td>{top["Battery / Mileage"]}</td>
                                <td>{top["Brand"]}</td>
                                <td>{top["Ex-Showroom Price (₹ Lakhs)"]}</td>
                                <td>{top["Fuel Type"]}</td>
                                <td>{top["Is EV?"]}</td>
                                <td>{top["Launch Year"]}</td>
                                <td>{top["Model"]}</td>
                                <td>{top["Monthly Sales (Units)"]}</td>
                                <td>{top["Segment"]}</td>
                                <td>{top["Variants"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                : <P>Click the above button to get top 3 vehicles here</P>}
        </div>
    )
}