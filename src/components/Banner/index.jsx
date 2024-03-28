import '../../utiles/styles/App.scss'
import BannerHome from '../../assets/banner-home.png'
import BannerAPropos from '../../assets/banner-apropos.png'

const imagesBanner = [
    {
        picture: BannerHome,
        text: "Chez vous, partout et ailleurs"
    },
    {
        picture: BannerAPropos,
        text: ""
    }
]
console.log(imagesBanner)

function Banner({picture, text}) {
    return(
        <div className='Banner'>
            <img className='Banner__img' src={picture} alt="banner" />
            <p className='Banner__text'>{text}</p>
        </div>
    )
}

export default Banner