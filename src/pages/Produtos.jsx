import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card';
import { useState } from 'react';
import './Produtos.css'

function Produtos() {

  const [produtos, setProdutos] = useState([
    { nome: 'Teclado', valor: 111, quantidade: 15 ,img: './sela.jpg'},
    { nome: 'Mouse', valor: 75, quantidade: 20 },
    { nome: 'Monitor', valor: 800, quantidade: 10 },
    { nome: 'Gabinete', valor: 350, quantidade: 5 },
    { nome: 'Placa de Vídeo', valor: 2000, quantidade: 7 },
    { nome: 'Processador', valor: 1500, quantidade: 12 },
    { nome: 'Memória RAM', valor: 320, quantidade: 18 },
    { nome: 'HD 1TB', valor: 250, quantidade: 9 },
    { nome: 'SSD 512GB', valor: 450, quantidade: 14 },
    { nome: 'Fonte 600W', valor: 300, quantidade: 6 }





  ]);
    
  return (
    <div>
      <Navbar />
        Produtos
       


      <div className='cards'>
        {produtos.map((produto) => (
          <Card produto={produto}/>
        ))}
      </div>


    </div>
  )
}

export default Produtos