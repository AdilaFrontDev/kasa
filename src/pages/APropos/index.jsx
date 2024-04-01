import '../../utiles/styles/App.scss'

import { aproposItems } from '../../datas/aproposItems'

import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

import BannerAPropos from '../../assets/banner-apropos.png'



function APropos() {
    
    const banner = { picture: BannerAPropos, text: ''}

    return(
        <div className='APropos'>
            <Banner
                banner = {banner}
            />
            <div className='APropos__description'>
                {aproposItems.map((item) => (
                    <Collapse
                    key={item.title}
                    title={item.title}
                    content={item.content}
                    />
                ))}
                
            </div>
        </div>
    )
}

export default APropos