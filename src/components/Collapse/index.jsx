import '../../utiles/styles/App.scss'

import iconCollapse from '../../assets/collapse-icon.png'

function Collapse({title, content}) {
    return(
        <div className='Collapse'>
            <div className='Collapse__item'>
                <p className='Collapse__item-text'>{title}</p>
                <img className='Collapse__item-icon 'src={iconCollapse} alt="Icone collapse"/>
            </div>
            <div className='Collapse-text'>
                {content.map((element) => (
                    <p className='Collapse-text-p' key={content.indexOf(element)}>{element}</p>
                ))}
            </div>
        </div>
    )
}

export default Collapse