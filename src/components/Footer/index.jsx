import '../../utiles/styles/App.scss'
import Logo from '../../assets/logo-kasa-dark.png'

function Footer() {
    return(
        <div className='Footer'>
            <img src={Logo} className="Footer__logo" alt="Logo Kasa sur fond noir"/>
            <p className="Footer__mentions">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer