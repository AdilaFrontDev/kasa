import '../../utiles/styles/App.scss'
import PropTypes from 'prop-types'


function Host({name, picture}) {
    // get the name and the first name separated
    const splitName = name.split(' ')
    return(
        <div className='Host'>
            <div className='Host-name'>
                <p >{splitName[0]}</p>
                <p >{splitName[1]}</p>
            </div>
            <img className='Host-picture' src={picture} alt="Photo de l'hôte"/>
        </div>
    )
}

Host.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
}

export default Host