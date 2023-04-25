import "./Shop.css"
import { History } from "../History/History"
export function Shop(){
    return(
        <>
        <section className="banner">
        <div id="carouselExampleRide" class="carousel slide full" data-bs-ride="true">
             <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/banner3.gif?alt=media&token=a4f0533e-db9d-46a4-a9a4-455398ebd770" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
               <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/banner2.jpg?alt=media&token=ffdb249b-4b14-4aee-823f-dd62ac09dfe0" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/banner1.webp?alt=media&token=6f459215-3654-4709-a0bb-752e3939b0c5" class="d-block w-100" alt="..."/>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className='capa'> </div>

        </section>
        <section>
            <History></History>
        </section>
        </>
    )
}