import { useState } from 'react'
import '../../utiles/styles/App.scss'

import Banner from '../../components/Banner'
import Card from '../../components/Crad'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>COUCOU</h1>
      <Banner/>
      <div className='AppDiv'>
        <Card/>
      </div>
      
      
    </>
  )
}

export default App
