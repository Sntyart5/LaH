import './Menu.css'
import { Link } from 'react-router-dom'

export function Menu() {
    return (
        <>
        <div className='menu'>

        <nav >
                <Link href="" to="/">Home</Link>
                <Link href="">Discograpy</Link>
                <Link href="">Data</Link>
                <Link to="/shop">Shop</Link>
        </nav>
        </div>

        </>
    )
}

