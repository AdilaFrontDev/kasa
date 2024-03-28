import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-kasa-light.png'
import '../../utiles/styles/App.scss'

function Header() {
    return(
        <div className='Header'>
            <Link to="/">
                            <img className='Header__logo' src={Logo} alt="Logo de Kasa"/>
            </Link>
            <nav className='Header__nav'>
                <Link to="/" className='Header__nav__Link'>Accueil</Link>
                <Link to="/APropos" className='Header__nav__Link'>A Propos</Link>
            </nav>
        </div>
    )
}

export default Header