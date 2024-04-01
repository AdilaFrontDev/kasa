// import { useState } from 'react'
import '../../utiles/styles/App.scss'
import {annonces} from '../../datas/annonces'
import { Link } from 'react-router-dom'

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
            <Link key={annonce.id} to={`/FicheLogement/${annonce.id}`}>
              <Card
                key={annonce.id}
                title={annonce.title}
                cover={annonce.cover}
              />
            </Link>  
              
          ))}
        </div>
      </div>
    )
}

export default Home
