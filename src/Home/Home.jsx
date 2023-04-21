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