import {Menu} from '../shared/Menu/Menu'
import {History} from '../History/History'
import './Home.css'
import { Discograpy } from '../Discograpy/Discograpy'
export function Home(){
    return(
       <>
       
            <section className='banner'>
                <video autoPlay muted loop>
                    <source src="../../multi/video1.mp4" type="video/mp4"/>
                </video>
                <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/fondo1-removebg-preview%20(1).png?alt=media&token=91b8a4f3-fbd3-433e-b456-2db88ca846ab" alt="" />
                <div className='capa'> </div>
            </section>     
       
        <section className='history'>
            <History></History>
        </section>
            <Discograpy/>
        <section>

        </section>
       </>



            

       
    )
}