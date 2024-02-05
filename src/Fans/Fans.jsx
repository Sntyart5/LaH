import './Fans.css'
export function Fans(){
    return(
        <>
        <section className='formulario '>
        <h1>FANS</h1>

            <div className='login-form  '>
                <h1>Login</h1>
                <form action="">
                    <p>Username</p>
                    <input type="text" name="" id="" />
                    <p>Email</p>
                    <input type="email" name="email" id="" />
                    <input type="submit" value="Enviar" className='btn btn-success'/>

                </form>
            </div>
        </section>

        <section className='formfan'>
            <div className="row">
                <div className="col-md-12 ">
                    
                    <form action="">
                        <div className="ask">
                        <h3>¿Donde nacio Eladio Carrión?</h3>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Humacao - Puerto Rico</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> California - Estados Unidos</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Cali - Colombia </label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Dalas - Estados Unidos</label> <br />
                        </div>

                        <div className="ask">
                        <h3>¿Cuantos albunes de estudio tiene Eladio Carrión?</h3>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 8 </label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 6</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 7 </label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 2</label> <br />
                        </div>

                        <div className="ask">
                        <h3>¿De cual de estos "Remix" No hace parte Eladio Carrón?</h3>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Mi error(Remix)</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> No podemos (Remix)</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Arreglamos (Remix) </label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Te Bote(Remix)</label> <br />
                        </div>

                        <div className="ask">
                        <h3>¿Cuantos Cholis realizo Eladio Carrion en Puerto Rico?</h3>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 3 </label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 1</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> 5</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Ninguno </label> <br />
                        </div>

                        <div className="ask">
                        <h3>¿Cual de los siguientes temas no es un trap?</h3>
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Tata </label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Ele Uve</label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Si la calle llama </label> <br />
                            <label htmlFor=""><input type="checkbox" name="" id="" /> Cuarentena </label> <br />
                        </div>
                 

                    </form>
                </div>
            </div>

        </section>
        </>
    )
}