import { useState, useEffect } from "react"
export function Hook(){

    //antes del retorno configuramos nuestras variables de estado 
    const[contador, setContador]=useState(0)

    //programado el detector de ejecuciones 
    useEffect(function(){
        setContador(contador+1)
    },[])

    //funcion para decir y hacer cuando le de click al botn
    function incrementarCuenta(){
        setContador(contador+1)
    } 


    return(
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-danger m-5 p-3 " onClick={incrementarCuenta}> Click </button>
                        <h2>La cuenta va en: {contador}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}