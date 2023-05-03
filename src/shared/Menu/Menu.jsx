import './Menu.css'
import { Link } from 'react-router-dom'

export function Menu() {
    return (
        <>
        <div className='menu'>

        <nav >
                <Link href="" to="/">Home</Link>
                <Link to="/colabs">Discograpy</Link>
                <Link to="/fans">Fans</Link>
                <Link to="/shop">Shop</Link>
        </nav>
        </div>

        </>
    )
}

