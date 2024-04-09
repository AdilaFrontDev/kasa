import '../../utiles/styles/App.scss'
import PropTypes from 'prop-types'

function Tag({tags}) {
    return(
        <div className='Tag'>
            {tags.map((tag) => (
                <p key={tags.indexOf(tag)} className='Tag-item'>{tag}</p>
            ))}
        </div>
    )
}

Tag.propTypes = {
    tags: PropTypes.array,
}

export default Tag