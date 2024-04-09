import '../../utiles/styles/App.scss'
import PropTypes from 'prop-types'


function Card({title, cover}) {
    return(
        <div className='Card'>
            <img className='Card-cover' src={cover} alt="photo de couversture de l'annonce"/>
            <p className='Card-title'>{title}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Card

