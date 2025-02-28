import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'

function Home() {

  return (
    <div className='container-home'>
        <Navbar />
        
        <div className='alguma-coisa'>
          <h1>Bem vindo a Home</h1>

          <p>Aqui vamos fazer teste de Roueter do projeto da S.A</p>
        

        </div>
       
    </div>
  )
}

export default Home