import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import {Menu} from "../shared/Menu/Menu"
import { Shop } from "../Shop/Shop"
import { Footer } from "../shared/Footer/Footer"
import { Fans } from "../Fans/Fans"
import { Colabs } from "../Colabs/Colabs"
export function Ruta(){
    return(
        <>
        <Menu/>
        
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/fans" element={<Fans />}/>
        <Route path="/colabs" element={<Colabs />}/>
        
        </Routes>
            
        <Footer/>
        </>
    )
}