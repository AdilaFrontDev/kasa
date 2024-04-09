import '../../utiles/styles/App.scss'
import PropTypes from 'prop-types'


function Banner({banner}) {
    return(
        <div className='Banner'>
            <img className='Banner-img' src={banner.picture} alt="banner" />
            <p className='Banner-text'>{banner.text}</p>
        </div>
    )
}

Banner.propTypes = {
    banner: PropTypes.string,
}

export default Banner