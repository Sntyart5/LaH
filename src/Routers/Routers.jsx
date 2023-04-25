import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import {Menu} from "../shared/Menu/Menu"
import { Shop } from "../shop/Shop"
export function Ruta(){
    return(
        <>
        <Menu/>
        
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        </Routes>

        </>
    )
}