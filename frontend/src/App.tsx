import { BrowserRouter as Router, Routes, Route } from "react-router"
import { routes } from './routes'
import NavBar from "./components/NavBar"
export default function App() {
    return (
        <Router>
            <NavBar options={routes}/>
            <Routes>
                {routes.map((route, i) =>(
                    <Route key={i} path={route.path} element={<route.element/>}/>
                ))}
            </Routes>
        </Router>
    )
}