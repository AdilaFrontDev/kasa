import '../../utiles/styles/App.scss'

import { useParams, useLocation } from 'react-router-dom'

import {annonces} from '../../datas/annonces'

import Collapse from '../../components/Collapse'
import Host from '../../components/Host'
import Tag from '../../components/Tag'
import Star from '../../components/Star'
import Gallery from '../../components/Gallery'
import Error from '../Error'


function FicheLogement() {
    const {annonceId} = useParams()

    let location = useLocation()
    const idList = annonces.map((id) => (`/FicheLogement/${id.id}`))
    const isIdChecked= idList.includes(location.pathname)
    console.log(isIdChecked)
    
    if (!isIdChecked) {
        return <Error/>
    } else if (isIdChecked) {
        const annonce = annonces.find((obj) => (obj.id === annonceId))
        const host = annonce.host
        return(
            <div className='FicheLogement'>
                <Gallery
                    pictures={annonce.pictures}
                />
                <div className='FicheLogement__details'>
                    <div className='FicheLogement__details__goodInformation'>
                        <h1 className='FicheLogement__details__goodInformation-title'>{annonce.title}</h1>
                        <p className='FicheLogement__details__goodInformation-location'>{annonce.location}</p>
                        <Tag
                            tags={annonce.tags}
                        />
                    </div>
                    <div className='FicheLogement__details__rateAndHost'>
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
}

export default FicheLogement