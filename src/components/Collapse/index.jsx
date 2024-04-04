import '../../utiles/styles/App.scss'
import React from 'react'

import { useState } from 'react'

import iconCollapse from '../../assets/collapse-icon.png'
import { keyframes } from 'styled-components'



function Collapse({title, content}) {
    const [isActive, setActive] = useState("false")

    function toogleCollapse(){
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
                    <p className={isActive ? 'Collapse-text-p ' : 'Collapse-text-p'} key={content.indexOf(element)}>{element}</p>
                ))}
            </div>
        </div>
    )
}

export default Collapse

