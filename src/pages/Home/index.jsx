// import { useState } from 'react'
import '../../utiles/styles/App.scss'
import {annonces} from '../../datas/annonces'

import BannerHome from '../../assets/banner-home.png'

// import Banner from '../../components/Banner'
import Card from '../../components/Crad'


function Home() {

  return (
    <div className='Home'>
      <div className='Home__Banner'>
        <img className='Home__Banner-img'  src={BannerHome}/>
        <p className='Home__Banner-text'>Chez vous, partout et ailleurs</p>
      </div>
      
      {/* <Banner/> */}
      <div className='Home-Cards'>
        {annonces.map((annonce) => (
            <Card
            title={annonce.title}
            cover={annonce.cover}
            />
        ))}
        
      </div>
      
      
    </div>
  )
}

export default Home
