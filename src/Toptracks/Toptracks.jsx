import "./Toptracks.css"

import { consultarCanciones } from "../services/servicioCanciones"
import { useState, useEffect } from 'react'
export function Toptracks(){
    

    

    const [canciones,setCanciones]=useState(null)
    const [estaCargando,setEsCargando]=useState(true)
    useEffect(function(){
        consultarCanciones().then(function(respuesta){
            console.log(respuesta.tracks)
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
                
            <h1 className="title2">Top Global Tracks</h1>

            {
                canciones.map(function(cancion){
                    return(

                        


                        <div className="container track border rounded shadow-lg  ">

                            <div className="row rounded ">
                                <div className="col-md-12 text-center  names rounded-top ">
                                    <h3 className="m-3">{cancion.name}</h3>

                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-3 col-12">
                                    <img className="case" src={cancion.album.images[0].url}/>
                                </div>
                                
                                <div className="col-md-3 col-12">
                                    <h3 id="audioContainer">{cancion.artists[0].name} </h3>
                                    
                                </div>


                                <div className="col-md-3 col-12">
                                    <audio className="shadow" controls src={cancion.preview_url}></audio>
                                </div>

                                <div className="col-md-3 col-12 text-center pt-5 ">
                                    <p>Popularity</p>
                                    <h4>{cancion.popularity}/100</h4>
                                </div>
                            </div>
                        </div>


)
})
}

<div className="nose "></div>
<hr className="m-5 p-5" />

        </>
        )
    }
}