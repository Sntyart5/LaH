import './Menu.css'
import { Link } from 'react-router-dom'

export function Menu() {
    return (
        <>
        <div className='menu'>

        <nav >
                <Link className='amenu'  to="/LaH/home">Home</Link>
                <Link className='amenu' to="/LaH/colabs">Discograpy</Link>
                <Link className='amenu' to="/LaH/fans">Fans</Link>
                <Link className='amenu' to="/LaH/merch">Merch</Link>
        </nav>
        </div>

        </>
    )
}

