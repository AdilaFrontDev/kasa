import '../../utiles/styles/App.scss'

import { useParams } from 'react-router-dom'

import {annonces} from '../../datas/annonces'

import Collapse from '../../components/Collapse'
import Host from '../../components/Host'
import Tag from '../../components/Tag'
import Star from '../../components/Star'



function FicheLogement() {
    const {annonceId} = useParams()
    const annonce = annonces.find((obj) => (obj.id === annonceId))
    const host = annonce.host

    
    return(
        <div className='FicheLogement'>
            <img src={annonce.cover} className='FicheLogement__img'/>
            <div className='FicheLogement__details'>
                <div className='FicheLogement__details__1'>
                    <h1 className='FicheLogement__details__1-title'>{annonce.title}</h1>
                    <p className='FicheLogement__details__1-location'>{annonce.location}</p>
                    <Tag
                        tags={annonce.tags}
                    />
                </div>
                <div className='FicheLogement__details_2'>
                    <Host
                        name={host.name}
                        picture={host.picture}
                    />
                   <Star
                        rating={annonce.rating}
                   />
                </div>
            </div>
            <div className='FicheLogement__collapse'>
                {/* utilisation d'un map informations extraites du JSON et utilisation de props */}
                <Collapse
                    className="FicheLogement__collapse-item"
                    key="Description"
                    title="Description"
                    content={[annonce.description]}
                />
                <Collapse
                    className="FicheLogement__collapse-item"
                    key="Équipements"
                    title="Équipements"
                    content={annonce.equipments}
                />
            </div>
        </div>
    )
}


export default FicheLogement