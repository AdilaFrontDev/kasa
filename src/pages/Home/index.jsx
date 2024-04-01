// import { useState } from 'react'
import '../../utiles/styles/App.scss'
import {annonces} from '../../datas/annonces'

import BannerHome from '../../assets/banner-home.png'

import Banner from '../../components/Banner'
import Card from '../../components/Crad'


function Home() {

  const banner = { picture: BannerHome, text: 'Chez vous, partout et ailleurs'}

    return (
      <div className='Home'>
        <Banner
          banner = {banner}
        />
        <div className='Home-Cards'>
          {annonces.map((annonce) => (
              <Card
                key={annonce.id}
                title={annonce.title}
                cover={annonce.cover}
              />
          ))}
        </div>
      </div>
    )
}

export default Home
