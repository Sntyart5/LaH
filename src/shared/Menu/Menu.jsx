import './Menu.css'
import { Link } from 'react-router-dom'

export function Menu() {
    return (
        <>
        <div className='menu'>

        <nav >
                <Link className='amenu'  to="/">Home</Link>
                <Link className='amenu' to="/colabs">Discograpy</Link>
                <Link className='amenu' to="/fans">Fans</Link>
                <Link className='amenu' to="/shop">Shop</Link>
                <Link className='amenu' to="/hook">Hook</Link>
        </nav>
        </div>

        </>
    )
}

