import { Link } from 'react-router-dom'
import { useState } from 'react';

import Logo from '../../assets/logo-kasa-light.png'
import '../../utiles/styles/App.scss'

function Header() {
    const [isActiveHome, setActiveHome] = useState("false");
    const [isActiveAPropos, setActiveAPropos] = useState("false")
    
    function toogleHome(){
        setActiveHome(!isActiveHome)
        setActiveAPropos("false")   
    }
    function toogleAPropos(){
        setActiveAPropos(!isActiveAPropos)
        setActiveHome("false")
    }

    return(
        <div className='Header'>
            <Link to="/">
                <img className='Header__logo' src={Logo} alt="Logo de Kasa"/>
            </Link>
            <nav className='Header__nav'>
                <Link to="/" className={isActiveHome ? `Header__nav__Link` : `Header__nav__Link--active` } onClick={toogleHome}>Accueil</Link>
                <Link to="/APropos" className={isActiveAPropos? `Header__nav__Link` : `Header__nav__Link--active` } onClick={toogleAPropos}>A Propos</Link>
            </nav>
        </div>
    )
}

export default Header