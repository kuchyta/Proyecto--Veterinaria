import { Outlet } from "react-router-dom"

import Header from "../components/Header/Header"
import Footer from "../components/Footer"

const AppOutlet = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default AppOutlet