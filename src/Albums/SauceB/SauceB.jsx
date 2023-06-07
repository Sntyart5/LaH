import './SauceB.css'

import { consultarCanciones } from '../../services/servicioCanciones'
import { useState, useEffect } from 'react'

export function SauceB(){

    const [canciones,setCanciones]=useState(null)
    const [estaCargando,setEsCargando]=useState(true)
    useEffect(function(){
        consultarCanciones().then(function(respuesta){
            setCanciones(respuesta.tracks)
            setEsCargando(false)
        })
    },[])
    if(estaCargando){
        return(
            <>
            <br /><br /><br />
            <h3>Estoy Cargando...</h3></>
        )
    }else{
        return(
        <>
            <section className="bannerSb">
                
            </section>

            {
                canciones.map(function(cancion){
                    return(
                        <audio controls src={cancion.preview_url}></audio>
                   
                    )
                })
            }


            <h1>Hola Sauce Boyz</h1>
        </>
        )
    }


}