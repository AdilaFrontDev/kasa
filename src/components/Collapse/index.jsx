import '../../utiles/styles/App.scss'

import { useState } from 'react';

import iconCollapse from '../../assets/collapse-icon.png'

function Collapse({title, content}) {
    const [isActive, setActive] = useState("false");

    function toogleCollapse(){
        setActive(!isActive)   
    }
    return(
        <div className='Collapse'>
            <div className='Collapse__item'>
                <p className='Collapse__item-text'>{title}</p>
                <img className='Collapse__item-icon 'src={iconCollapse} alt="Icone collapse" onClick={toogleCollapse}/>
            </div>
            <div className={isActive ? 'Collapse-text--hiden' : 'Collapse-text'}>
                {content.map((element) => (
                    <p className='Collapse-text-p ' key={content.indexOf(element)}>{element}</p>
                ))}
            </div>
        </div>
    )
}

export default Collapse