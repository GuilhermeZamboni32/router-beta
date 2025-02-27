import React from 'react'
import './Card.css'
/**{ nome: 'Teclado', valor: 111, quantidade: 15 } */

function Card(props) {
   // let produto = props.produto
   const {nome, valor, quantidade, img} = props.produto

  return (
    <div className='container-card'>

        <p>
        {nome} 

        </p>


        <p>
         Preço: R$:{valor} 
        </p> 


        
        <p>
          Estoque:{quantidade}
        </p>

       
          
        <img className='img' src={img} alt="" />
        
         
        
    </div>
  )
}

export default Card