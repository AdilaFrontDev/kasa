import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-kasa-light.png'
import '../../utiles/styles/App.scss'

function Header() {
    return(
        <div className='HederContainer'>
            <img className='HeaderLogo' src={Logo} alt="Logo de Kasa"/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/APropos">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header