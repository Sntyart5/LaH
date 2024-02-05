import {Menu} from '../shared/Menu/Menu'
import {History} from '../History/History'
import { Toptracks } from '../Toptracks/Toptracks'
import { Discograpy } from '../Discograpy/Discograpy'
import './Home.css'
import 'animate.css';

export function Home(){
    return(
       <>
       
            <section className='banner'>
                <video autoPlay muted loop src='https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/video1.mp4?alt=media&token=0bf8e7f9-6cbd-4eb7-a24f-9745f7ba1d1e'></video>
                <img className='logo animate__animated animate__fadeInDown' src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/fondo1-removebg-preview%20(1).png?alt=media&token=1f125e74-cf1d-40b4-8e5c-3634199a5336" alt="" />
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