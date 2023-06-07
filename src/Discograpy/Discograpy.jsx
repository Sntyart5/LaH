import './Discograpy.css' 
import { Link } from 'react-router-dom'

export function Discograpy(){
    return(
        <>
        <h1>DISCOGRAPY</h1>
        <div className="container disco">


            <div className="row">
                <div className="col-12 col-md-4 divsb">
                <Link to="/sb">
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/sauceboys.jpg?alt=media&token=7443446e-3ddd-4396-b5db-053976c9f5ed" alt="" className="sb img-fluid w-100  " />
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/logosb-removebg-preview.png?alt=media&token=617a34dc-6b34-4e85-aa02-f6c3ac74484f" alt=" " />
                </Link>
                </div>
                <div className="col-12 col-md-4 divsb"> 
                <Link>
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/sbcp.jpg?alt=media&token=d339ae2d-1a2b-4505-80aa-bb7f79d8ae8d" alt="" className="care img-fluid w-100 "/>
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/sbcp-removebg-preview.png?alt=media&token=1f2d50f4-df06-4d6b-a414-33f1ad00be3d" alt="" />
                </Link>
                </div>

                <div className="col-12 col-md-4 divsb">
                <Link>
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/monarca.jpg?alt=media&token=653f1de0-677f-4d7b-8604-03a260632d79" alt="" className="monarca img-fluid w-100 "/>
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/logomon-removebg-preview.png?alt=media&token=d1720352-4791-4378-827e-975f01c8efcf" alt="" />
                </Link>
                </div>
            </div>
           

            <div className="row">
                <div className="col-12 col-md-4 divsb">
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/Sen2Kbron.jpg?alt=media&token=84c61210-f2c0-4180-8f99-c838226201b4" alt="" className="sb img-fluid w-100 " />
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/Sen2Kbron-removebg-preview-removebg-preview.png?alt=media&token=efbe1bab-1c9b-428d-80ab-3b469ecd36dc" alt="" />
                </div>
                <div className="col-12 col-md-4 divsb"> 
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/sauceboys2.jpg?alt=media&token=8d22c4d3-d3ee-4ac7-a5d0-7a013cdb1079" alt="" className="care img-fluid w-100 "/>
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/sb2-removebg-preview.png?alt=media&token=303682b3-16b9-44fd-9ce4-caa1a675778f" alt="" />
                </div>
                <div className="col-12 col-md-4 divsb">
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/Sen2Kbron2.jpg?alt=media&token=97b0e05a-c298-4f8a-ba71-90ff3c775150" alt="" className="monarca img-fluid w-100 "/>
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/LaH-removebg-preview.png?alt=media&token=8432a84d-ecd8-46f2-9ad3-d7c2d4ee8fba" alt="" />
                </div>

            </div>
            <div className="row">
                <div className="col-12 col-md-4 divsb">
                </div>
                <div className="col-12 col-md-4 divsb"> 
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/3men2kbron.png?alt=media&token=e10a0dac-ea1e-454c-8de4-3f0dcc667f66" alt="" className="care img-fluid w-100 "/>
                    <img src="https://firebasestorage.googleapis.com/v0/b/men2kbron.appspot.com/o/3men2-removebg-preview.png?alt=media&token=8e4f2008-80cc-4af3-9c2a-a5785ba094d7" alt="care img-fluid w-100" />
                </div>


            </div>
        </div>
        </>
    )
}