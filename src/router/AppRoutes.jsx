import { Route, Routes } from "react-router-dom"

import Mascotas from '../pages/Mascotas'
import Home from '../pages/Home'
import AppOutlet from "./AppOutlet"
import Nosotros from "../pages/Nosotros"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppOutlet />}>
                <Route index element={<Home />} />
                <Route path="/mascotas" element={<Mascotas />} />
                <Route path="/nosotros" element={ <Nosotros/> } />
            </Route>
        </Routes>
    )
}

export default AppRoutes