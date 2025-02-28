import React from 'react'
import Navbar from '../components/Navbar'
import "./Avisos.css"

function Avisos() {

  return (
    <div>
        <Navbar />
        <h1>Avisos: </h1>
          <div className='avisos'>


        <ul>
            <li>Celulares não pode.</li>
            <li>Joguinho idiota? não pode tambem...</li>
            <li>Ficar vendo foto do menino Ney? na na na...</li>
            <li>Componente começa com letra maiuscula!!!</li>
        </ul>

          </div>
    </div>
  )
}

export default Avisos