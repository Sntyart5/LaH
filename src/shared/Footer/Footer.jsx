import './Footer.css'

export function Footer(){
    return(
        <>
        <section className='Footer'>
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-4 text-center">
                    <h2>sntyart5</h2>
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/LaH-removebg-preview.png?alt=media&token=8432a84d-ecd8-46f2-9ad3-d7c2d4ee8fba" alt="" className='imgf'/>
                    </div>
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4 text-center" >
                    <h2>Redes</h2>
                        <ul>
                            <li><i class="bi bi-instagram"> Sntyart5 </i></li>
                            <li><i class="bi bi-facebook"></i> Sntyart5</li>
                            <li><i class="bi bi-twitter"></i> Sntyart5</li>
                            <li><i class="bi bi-twitch"></i> Sntyart5</li>
                        </ul>
                    </div>
                </div>
                <div className="row">


                    <hr />
                    <div className="col-12 text-center">
                        <p>&copy; 2023 - Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
            
        </section>

        </>
    )
}