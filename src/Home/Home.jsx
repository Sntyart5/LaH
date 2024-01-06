import {Menu} from '../shared/Menu/Menu'
import {History} from '../History/History'
import { Toptracks } from '../Toptracks/Toptracks'
import './Home.css'
import { Discograpy } from '../Discograpy/Discograpy'
export function Home(){
    return(
       <>
       
            <section className='banner'>
                <video autoPlay muted loop>
                    <source src="../../multi/video1.mp4" type="video/mp4"/>
                </video>
                <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/fondo1-removebg-preview%20(1).png?alt=media&token=1f125e74-cf1d-40b4-8e5c-3634199a5336" alt="" />
                <div className='capa'> </div>
            </section>     
       
        <section className='history'>
            <History></History>
        </section>
            <Discograpy/>
        <section>
            <Toptracks/>
        </section>
       </>



            

       
    )
}