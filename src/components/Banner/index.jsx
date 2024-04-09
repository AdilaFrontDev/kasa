import '../../utiles/styles/App.scss'
import PropTypes from 'prop-types'


function Banner({banner}) {
    return(
        <div className='Banner'>
            <img className='Banner-img' src={banner.picture} alt="banner" />
            <p className='Banner-text' data-text={banner.text}>{banner.text}</p>
        </div>
    )
}

Banner.propTypes = {
    banner: PropTypes.object,
}

export default Banner