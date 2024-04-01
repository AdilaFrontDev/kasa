import '../../utiles/styles/App.scss'

import { useParams } from 'react-router-dom'

import {annonces} from '../../datas/annonces'

import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'



function FicheLogement() {
    const {annonceId} = useParams()
    console.log(annonceId)
    const annonce = annonces.find((obj) => (obj.id === annonceId))
    console.log(annonce)
    return(
        <div className='FicheLogement'>
            <img src={annonce.cover} className='FicheLogement__img'/>
            <div className='FicheLogement__details'>
                <div className='FicheLogement__details_1'>
                    <div>
                        <h1 className='FicheLogement__details_1-title'>{annonce.title}</h1>
                        <p className='FicheLogement__details_1-location'>{annonce.location}</p>
                    </div>
                   
                </div>
                <div className='FicheLogement__details_2'>

                </div>
            </div>
            <div className='FicheLogement__collapse'>
                {/* utilisation d'un map informations extraites du JSON et utilisation de props */}
                <Collapse
                    key="Description"
                    title="Description"
                    content={[annonce.description]}
                />
                <Collapse
                    key="Équipements"
                    title="Équipements"
                    content={annonce.equipments}
                />
            </div>
        </div>
    )
}


export default FicheLogement