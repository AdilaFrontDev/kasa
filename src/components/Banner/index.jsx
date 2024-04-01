import '../../utiles/styles/App.scss'

function Banner({banner}) {
    return(
        <div className='Banner'>
            <img className='Banner-img' src={banner.picture} alt="banner" />
            <p className='Banner-text'>{banner.text}</p>
        </div>
    )
}

export default Banner