import './Colabs.css'
export function Colabs(){

    
    let colaboraciones=Array(
        {
            colab:"Future",
            nombre:"Mbappé (Remix)",
            descripcion:"Future estaba en lo alto de mi lista de deseos, trapwise. Es una de mis mayores inspiraciones es el trap. Conocerlo fue genial. El ver su reacción en el estudio, y ver cómo realmente se disfrutó la canción, era super cool tener su bendición en ese lado. No le vi hacer el verso. Me reuní con él y se fue, probablemente, al club, y volvió. Recibí el verso como a las 10 a .m. Creo que grabó a las 8 de la mañana.",
            foto:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/future.png?alt=media&token=b3c70a28-d011-4418-a49a-6f61036fc6ee"],
            calificacion:"6/10",
            id:1        
        },
        {
            colab:"Myke Towers",
            nombre:"Jovenes millonarios, Si la calle llama (Remix), Quedate sola, Etc.",
            descripcion:"Sin duda uno de los juntes mas adorados por los fans. Ya que se han encontrado en una gran variedad de temas entre los cuales podemos encontrar: 'Sigue Bailandome', 'No podemos(Remix)', 'Jovenes Millonarios' y el mas reciente 'Si la calle llama (Remix)'. Simplemente una de las mejores duplas de todo el genero y el trap latino ",
            foto:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/myke.jpg?alt=media&token=1a7893b6-e992-4ed6-9e7a-92aab1811b37"],
            calificacion:"9.5/10",
            id:2
        },
        {
            colab:"J Balvin",
            nombre:"TATA(Remix)",
            descripcion:"Bobby Shmurda siempre fue una de mis colabraciones soñadas yo le texteaba desde que eestaba en la carcel, Cuando le hablé a Balvin sobre 'TATA(Remix)' le conté que lo queria hacer con el. Gracias a balvin esto fue posible. En esta cancion titulada “Tata” Eladio Carrion y J Balvin hacen referencia a la representate del Partido Nuevo Progresista Maria Milagros “Tata” Charbonier. Esta carga con 13 acusaciones que incluyen robo, lavado de dinero, soborno y obstrucción a la justicia.",
            foto:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/balvin.png?alt=media&token=697e9731-ea94-4c3a-8cc7-a2f28f45c316"],
            calificacion:"6/10",
            id:3     
        },
        {
            colab:"Bad Bunny",
            nombre:"Kemba Walker",
            descripcion:"“Kemba Walker” es una canción que lleva el nombre del jugador profesional de baloncesto quien juega para los Boston Celtics. Eladio Carrión y Bad Bunny se juntan por primera vez en esta canción para comparar su éxito y fama con este jugador y con otras personas bien reconocidas",
            foto:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/bb.png?alt=media&token=fc29fe71-ac0f-49cc-9375-2281ea530de9"],
            calificacion:"6/10",
            id:4       
        },
        {
            colab:"Bzrp",
            nombre:"Bzrp Music Session, Vol.40",
            descripcion:"Primero la H, después va la U Después va la M, la A-C-A-O Soy de la H, no la de Travis Yo tengo la salsa, flow Héctor Lavoe",
            foto:["https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/bz.jpg?alt=media&token=36360fc6-f798-46d6-a227-ccb8266944fb"],
            calificacion:"6/10",
            id:5  
        },

    )

    return(
        <>
        <section className="colabs">
           <h1 className='title_Colaps'>Colaboraciones </h1> 
        </section>

        <div className="intro">
            <h1 className=''>Colabs</h1>
            <h4 className='description'>Eladio Carrion ha anunciado probablemente el disco urbano con mejores colaboraciones de los últimos años. El nuevo disco verá la luz el próximo 17 de marzo y se llamará 3MEN2KBRN. El Rapero ha contado con los artistas más grandes del género, además, muchos de ellos son ajenos al reggaetón. 50 cent, Lil Wayne, Quavo, Future son iconos del Hip Hop y trap americano y no se les suele ver fluir por estos sonidos. Son auténticos precursores del movimiento rapero norteamericano. Sin lugar a duda,este disco va a ser icónico ya que contará en un mismo proyecto con artistas como Lil Wayne, 50, Future y por otro lado tener también a Bad Bunny o Ñengo Flow. ¿Conocéis bien a todos estos artistas? ©copyright los40.com</h4>
        </div>
        {
            colaboraciones.map(function(colabracion){
                return(
            
        <div className="container-fluid ">
            <div className="row">
                <h1 className="artist">{colabracion.colab}</h1>
                <div className="col-12 col-md-4">
                    <img src={colabracion.foto} alt="foto" className="img-fluid w-100 tema" />
                </div>
                <div className="col-12 col-md-4">
                    <h3 className='text-center fw-bold colab'>Sobre el Tema</h3>
                    <h3 className="text-center m-5 mt-0 dsc">{colabracion.descripcion}</h3>
                </div>
                <div className="col-12 col-md-4">
                    <h3 className='text-center fw-bold colab'>Colaboracion</h3>
                    <h3 className="text-center fw-bold m-5 ">{colabracion.nombre}</h3>
                </div>
            </div>
        </div>
        )
            })
        }
        <section className="bannerfoot_colabs text-center">
            <div> <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/fondo1-removebg-preview%20(1).png?alt=media&token=1f125e74-cf1d-40b4-8e5c-3634199a5336" alt="" /></div>
        </section>

        </>
    )
}