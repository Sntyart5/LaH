import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../Home/Home"
import {Menu} from "../shared/Menu/Menu"
import { Merch } from "../Merch/Merch"
import { Footer } from "../shared/Footer/Footer"
import { Fans } from "../Fans/Fans"
import { Colabs } from "../Colabs/Colabs"
import { SauceB } from "../Albums/SauceB/SauceB"
export function Ruta(){
    return(
        <>
        <Menu/>
        
        <Routes>

        <Route path="/LaH/home" element={<Home />} />
        <Route path="/LaH/merch" element={<Merch />}/>
        <Route path="/LaH/fans" element={<Fans />}/>
        <Route path="/LaH/colabs" element={<Colabs />}/>

        <Route path="/LaH/sb" element={<SauceB />}/>
        
        {/* Redirección */}
        <Route
          path="/LaH/*"
          element={<Navigate replace to="/LaH/home" />}
        />
        
        </Routes>
            
        <Footer/>
        </>
    )
}