import '../../utiles/styles/App.scss'

function Tag({tags}) {
    return(
        <div className='Tag'>
            {tags.map((tag) => (
                <p key={tags.indexOf(tag)} className='Tag-item'>{tag}</p>
            ))}
        </div>
    )
}

export default Tag