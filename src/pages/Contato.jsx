import React from 'react'
import Navbar from '../components/Navbar'
import "./Contato.css"

function Contato() {
  return (
    <div>
        <Navbar />
        <div className='container-contato'>
          <h1>Contato</h1>

          <h2>Fone: 35960835</h2>
          <h2>Email: gjht@359.com</h2>
          <h2>Local: Rua 123</h2>
          

        </div>
    </div>
  )
}

export default Contato