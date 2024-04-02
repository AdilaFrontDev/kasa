import '../../utiles/styles/App.scss'


function Host({name, picture}) {
    const splitName = name.split(' ')
    return(
        <div className='Host'>
            <div className='Host-name'>
                <p >{splitName[0]}</p>
                <p >{splitName[1]}</p>
            </div>
            
            <img className='Host-picture' src={picture} alt="Photo de l'hôte"/>
        </div>
    )
}

export default Host