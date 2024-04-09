import '../../utiles/styles/App.scss'
import PropTypes from 'prop-types'


import { useState } from 'react'

import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

function Gallery({pictures}) {
    // set the index to 0
    const [i, updatei] = useState(0)
    // get the number of pictures
    const nbPictures = pictures.length

    // this fonction allows to go to the next slide
    function nextSlide() {
        if (i < nbPictures - 1) {
            updatei(i+1)
        } else {
            updatei(0)
        }
    }

    // this fonction allows to go to the previous slide
    function previousSlide(){
        if (i >=1) {
            updatei(i-1)
        } else {
            updatei(nbPictures - 1)
        }
    }

    if (nbPictures === 1) {
        // if there is only one picture we don't shox the numbering and the arrows
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


Gallery.propTypes = {
    pictures: PropTypes.array,
}

export default Gallery