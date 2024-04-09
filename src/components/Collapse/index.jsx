import '../../utiles/styles/App.scss'
import PropTypes from 'prop-types'

import { useState } from 'react'

import iconCollapse from '../../assets/collapse-icon.png'

function Collapse({title, content}) {
    const [isActive, setActive] = useState("false")

    // this function allows to toggle the transition and animation 
    function toogleCollapse(e){
        e.preventDefault()
        e.stopPropagation()
        setActive(!isActive)   
    }
    return(
        <div className='Collapse'>
            <div className='Collapse__item'>
                <p className='Collapse__item-text'>{title}</p>
                <img className={isActive ?'Collapse__item-icon' : 'Collapse__item-icon turnDown'} src={iconCollapse} alt="Icone collapse" onClick={toogleCollapse}/>
            </div>
            <div className={isActive ? ' Collapse-text hidden' : 'Collapse-text show '}>
                {content.map((element) => (
                    <p className='Collapse-text-p' key={content.indexOf(element)}>{element}</p>
                ))}
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array,
}

export default Collapse

