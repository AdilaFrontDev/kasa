import '../../utiles/styles/App.scss'

import { useState } from 'react'

import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

function Gallery({pictures}) {
    const [i, updatei] = useState(0)
    const nbPictures = pictures.length

    function nextSlide() {
        if (i < nbPictures - 1) {
            updatei(i+1)
        } else {
            updatei(0)
        }
        console.log('coucou')
    }

    function previousSlide(){
        if (i >=1) {
            updatei(i-1)
        } else {
            updatei(nbPictures - 1)
        }
        console.log('hahahaah')
    }

    if (nbPictures === 1) {
        return (
            <div className='Gallery'>
                <img className='Gallery-img' src={pictures[i]} alt="Photo de la gallerie"/>
            </div>
        )
    } else {
        return(
            <div className='Gallery'>
                <img className='Gallery-img' src={pictures[i]} alt="Photo de la gallerie"/>
                <div className='Gallery-arrows'>
                        <img className='Gallery-arrows-icon' src={arrowLeft} alt="Flèche de navigation gauche" onClick={previousSlide}/>
                        <img className='Gallery-arrows-icon' src={arrowRight} alt="Flèche de navigation droite" onClick={nextSlide}/>
                </div>
                <p className='Gallery-numbering'>{i+1}/{nbPictures}</p>
            </div>
        )
    }


    
}

export default Gallery