import '../../utiles/styles/App.scss'


import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'



function FicheLogement() {
     
    return(
        <div className='FicheLogement'>
            <img className='FicheLogement__img'/>
            <div className='FicheLogement__details'>
                <div className='FicheLogement__details_1'>
                    <div>
                        <h1 className='FicheLogement__details_1-title'></h1>
                        <p className='FicheLogement__details_1-location'></p>
                    </div>
                    <Tag/>
                </div>
                <div className='FicheLogement__details_2'>
                
                </div>
            </div>
            <div className='FicheLogement__collapse'>
                {/* utilisation d'un map informations extraites du JSON et utilisation de props */}
                <Collapse/>
            </div>
        </div>
    )
}


export default FicheLogement