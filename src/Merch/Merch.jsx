import "./Merch.css"

export function Merch(){

    
    let productos=Array(
    {
        nombre:"Hoddie Sauce Boyz",
        descripcion:"New Era Gorras Milwaukee Brewers - MLB Batting Practice Low Profile 59Fifty Fitted - Azules - Colombia QKOUF83",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/busomerch1.webp?alt=media&token=5965bfc1-0c6a-4990-bd0a-f2d83be2de5c"],
        precio:75,
        popularidad:4.5,
        id:1        
    },
    {
        nombre:"Poster Sauce Boyz Vol. 1",
        descripcion:"New Era Gorras Philadelphia Eagles - NFL Tiger Flect 9Twenty Adjustable - Negras - Colombia TZRDV69",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/cuadro.webp?alt=media&token=167bb344-575d-4e5a-8e05-2f58c5b36463"],
        precio:20,
        popularidad:4.5,
        id:2
    },
    {
        nombre:"T-shirt Eladio Carrion",
        descripcion:"New Era Gorras Los Angeles Chargers - NFL Official Fall Sideline  Stretch Fit - Gris - Colombia CAYVF25",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/camisete.jpeg?alt=media&token=9a5c2ede-4df5-4b5c-84d6-6c612cfad6b5"],
        precio:35,
        popularidad:4.5,
        id:3
        
    },
    {
        nombre:"Sticker Sauce Boyz Vol.2 ",
        descripcion:"New Era Gorras Los Angeles Clippers - NBA Icon 59Fifty Fitted - Azules - Colombia PROJG16",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/stiker1.jpg?alt=media&token=467a0586-bd3f-44f8-9283-e2aa0a3f0b32"],
        precio:127477,
        popularidad:4.5,
        id:4
    },
    {
        nombre:"Hoddie Monarca Sauce Boyz",
        descripcion:"New Era Gorros Pittsburgh Pirates - MLB Sport Knit - Negras - Colombia HJLKM75",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/busomerch2.jpg?alt=media&token=0255d3ac-6c07-4891-b469-2bd7df8cda9a"],
        precio:42900,
        popularidad:4.5,
        id:5
    },    
    {
        nombre:"Poster Sauce Boyz Vol. 2",
        descripcion:"New Era Gorras Cleveland Indians - MLB Clubhouse Collection Low Profile 59Fifty Fitted - Azules - Colombia ZVWAC03",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/poster1.jpg?alt=media&token=daf16912-f97f-4229-87a8-835d984b6fc5"],
        precio:20,
        popularidad:4.5,
        id:6        
    },
    {
        nombre:"Gorra Kemba Walker ",
        descripcion:"New Era Gorras Chicago White Sox -  MLB Batting Practice 39Thirty Stretch Fit - Negras - Colombia PJLRK04",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/gorra%202.png?alt=media&token=126516e0-c2b3-4048-93fd-e81651366e81"],
        precio:50,
        popularidad:4.5,
        id:7
    },
    {
        nombre:"Hoddie Sauce Boyz ",
        descripcion:"New Era Gorros Detroit Lions - NFL Salute To Service Cuff Knit - Negras - Colombia WRBTM75",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/busomerch3.jpg?alt=media&token=1f9145f6-d4d3-4cad-a5c2-3b3323d88597"],
        precio:75,
        popularidad:4.5,
        id:8
        
    },
    {
        nombre:"Gorra Kemba Walker",
        descripcion:"New Era Gorras Charlotte Hornets - NBA Heather Low Profile 59Fifty Fitted - Gris - Colombia FWQOX69",
        fotos:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/gorra%202.png?alt=media&token=126516e0-c2b3-4048-93fd-e81651366e81"],
        precio:165000,
        popularidad:4.5,
        id:9
    }
    )


    return(
        <>
        <section className="banner_Merch">
            <article>
                <figure>
                    <img className="p-0" src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/Screenshot%202024-02-05%20112159.png?alt=media&token=235ebf9f-0b98-4519-95a5-7c96fc1883c1" alt="" />
                </figure>
            </article>
        </section>
        

        <div className="text-center"><h1>ELADIO CARRIÓN</h1></div>
        
        <section className="Shop">
            {
                productos.map(function(producto){
                    return(
                        <div key={producto.id}>
                            <div className="">
                                <div className="product">
                                    <img src={producto.fotos} alt="foto" className="img-fluid h-100 w-100" />
                                    <h3>{producto.nombre}</h3>
                                    <h4>$ {producto.precio}</h4>
                                </div>
                            </div>
                        </div>  
                    )
                })
            }
        </section>
        <section className="bannerfoot ">
            <img  src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/fondo1-removebg-preview%20(1).png?alt=media&token=1f125e74-cf1d-40b4-8e5c-3634199a5336" alt="" />
        </section>
        </>
    )
}