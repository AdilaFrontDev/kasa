import '../../utiles/styles/App.scss'
import { Link } from 'react-router-dom'


function Crad({title, cover}) {
    return(
        <div className='Card'>
            <img className='Card-cover' src={cover} alt="photo de couversture de l'annonce"/>
            <p className='Card-title'>{title}</p>
        </div>
    )
}

export default Crad