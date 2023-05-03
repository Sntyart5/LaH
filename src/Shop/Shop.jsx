import "./Shop.css"
import { History } from "../History/History"


export function Shop(){

    
    let productos=Array(
    {
        nombre:"Hoddie Sauce Boyz",
        descripcion:"New Era Gorras Milwaukee Brewers - MLB Batting Practice Low Profile 59Fifty Fitted - Azules - Colombia QKOUF83",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/busomerch1.webp?alt=media&token=5965bfc1-0c6a-4990-bd0a-f2d83be2de5c","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen1-2.jpg?alt=media&token=ed91e082-736e-4b63-8f58-fc99ea98cb56"],
        precio:75,
        popularidad:4.5,
        id:1        
    },
    {
        nombre:"Poster Sauce Boyz Vol. 1",
        descripcion:"New Era Gorras Philadelphia Eagles - NFL Tiger Flect 9Twenty Adjustable - Negras - Colombia TZRDV69",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/cuadro.webp?alt=media&token=167bb344-575d-4e5a-8e05-2f58c5b36463","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen2-2.jpg?alt=media&token=9b377101-a860-4c62-97e9-cd72e723264f"],
        precio:20,
        popularidad:4.5,
        id:2
    },
    {
        nombre:"T-shirt Eladio Carrion",
        descripcion:"New Era Gorras Los Angeles Chargers - NFL Official Fall Sideline  Stretch Fit - Gris - Colombia CAYVF25",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/camisete.jpeg?alt=media&token=9a5c2ede-4df5-4b5c-84d6-6c612cfad6b5","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen3-2.jpg?alt=media&token=9016e1b6-d57f-419a-af81-8662138d7ae9"],
        precio:35,
        popularidad:4.5,
        id:3
        
    },
    {
        nombre:"Sticker Sauce Boyz Vol.2 ",
        descripcion:"New Era Gorras Los Angeles Clippers - NBA Icon 59Fifty Fitted - Azules - Colombia PROJG16",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/stiker1.jpg?alt=media&token=467a0586-bd3f-44f8-9283-e2aa0a3f0b32","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen4-2.jpg?alt=media&token=493aafbc-8415-45fa-9ec2-a62de9e9c82e"],
        precio:127477,
        popularidad:4.5,
        id:4
    },
    {
        nombre:"Hoddie Monarca Sauce Boyz",
        descripcion:"New Era Gorros Pittsburgh Pirates - MLB Sport Knit - Negras - Colombia HJLKM75",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/busomerch2.jpg?alt=media&token=0255d3ac-6c07-4891-b469-2bd7df8cda9a","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen5-2.jpg?alt=media&token=4f649eb2-2231-4370-84e7-854003855904"],
        precio:42900,
        popularidad:4.5,
        id:5
    },    
    {
        nombre:"Poster Sauce Boyz Vol. 2",
        descripcion:"New Era Gorras Cleveland Indians - MLB Clubhouse Collection Low Profile 59Fifty Fitted - Azules - Colombia ZVWAC03",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/poster1.jpg?alt=media&token=daf16912-f97f-4229-87a8-835d984b6fc5","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/gorra6-2.jpg?alt=media&token=983a57e1-e813-4f4d-9ff6-4b8dfeb0e3fa"],
        precio:20,
        popularidad:4.5,
        id:6        
    },
    {
        nombre:"Gorra Kemba Walker ",
        descripcion:"New Era Gorras Chicago White Sox -  MLB Batting Practice 39Thirty Stretch Fit - Negras - Colombia PJLRK04",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/gorra%202.png?alt=media&token=126516e0-c2b3-4048-93fd-e81651366e81","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen7-2.jpg?alt=media&token=63df56ca-dfff-4d70-a9fa-3242adc49de2"],
        precio:50,
        popularidad:4.5,
        id:7
    },
    {
        nombre:"Hoddie Sauce Boyz ",
        descripcion:"New Era Gorros Detroit Lions - NFL Salute To Service Cuff Knit - Negras - Colombia WRBTM75",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/busomerch3.jpg?alt=media&token=1f9145f6-d4d3-4cad-a5c2-3b3323d88597","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen8-2.jpg?alt=media&token=c8dfe0d9-dacc-400e-963f-40b967f7a5d5"],
        precio:75,
        popularidad:4.5,
        id:8
        
    },
    {
        nombre:"Gorra Kemba Walker",
        descripcion:"New Era Gorras Charlotte Hornets - NBA Heather Low Profile 59Fifty Fitted - Gris - Colombia FWQOX69",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/gorra1.png?alt=media&token=e901f55a-d9ed-423a-92be-f70c87ee80d6","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen9-2.jpg?alt=media&token=74262c33-ad87-46b7-8ebb-57c4ecec7c8d"],
        precio:165000,
        popularidad:4.5,
        id:9
    }
    )


    return(
        <>
        <section className="banner2">

        <div className="container-fluid">

        <div id="carouselExampleRide" class="carousel slide " data-bs-ride="true">
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

        </div>
        </section>
        

        <div className="text-center"><h1>ELADIO CARRIÓN</h1></div>
        
        <section className="row row-cols-1 row-cols-md-3 g-3 tienda">

            {
                productos.map(function(producto){
                    return(
                        <div key={producto.id}>
                            <div className="col">
                                <div className="card h-100 shadow">
                                    <img src={producto.fotos} alt="foto" className="img-fluid w-100" />
                                    <h3 className="text-center fw-bold">{producto.nombre}</h3>
                                    <h4 className="mt-3 text-center">$ {producto.precio}</h4>
                                </div>
                            </div>
                        </div>  
                        
                    )
                })
            }



        </section>
        <section className="bannerfoot text-center">
            <div className="logo2"> <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/fondo1-removebg-preview%20(1).png?alt=media&token=1f125e74-cf1d-40b4-8e5c-3634199a5336" alt="" /></div>
        </section>
        </>
    )
}