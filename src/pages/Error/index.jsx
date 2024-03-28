import '../../utiles/styles/App.scss'
import { Link } from 'react-router-dom'
import Home from '../Home'

function Error() {
    return(
        <div className='Error'>
            <p className='Error__404'>404</p>
            <p className='Error__message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='Error__homeLink' to="/" element={<Home/>}>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error