import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card';
import { useState } from 'react';
import './Produtos.css'

function Produtos() {

  const [produtos, setProdutos] = useState([
    { nome: 'Teclado', valor: 111, quantidade: 15 ,img: './sela.jpg'},
    { nome: 'Mouse', valor: 75, quantidade: 20 ,img: './cursodejava.jpg'},
    { nome: 'Monitor', valor: 800, quantidade: 10 ,img: './caneca.webp'},
    { nome: 'Gabinete', valor: 350, quantidade: 5 ,img: './sapata.webp'},
    { nome: 'Placa de Vídeo', valor: 2000, quantidade: 7 ,img: './sela 2.webp'},
    { nome: 'Processador', valor: 1500, quantidade: 12 ,img: './sela 3.jpg'},
    { nome: 'Memória RAM', valor: 320, quantidade: 18 ,img: './sela.jpg'},
    { nome: 'HD 1TB', valor: 250, quantidade: 9 ,img: './cursodejava.jpg'},
    { nome: 'SSD 512GB', valor: 450, quantidade: 14 ,img: './sapata.webp'},
    { nome: 'Fonte 600W', valor: 300, quantidade: 6 ,img: './sela 3.jpg'},

    
    { nome: 'Teclado', valor: 111, quantidade: 15 ,img: './sela.jpg'},
    { nome: 'Mouse', valor: 75, quantidade: 20 ,img: './cursodejava.jpg'},
    { nome: 'Monitor', valor: 800, quantidade: 10 ,img: './caneca.webp'},
    { nome: 'Gabinete', valor: 350, quantidade: 5 ,img: './sapata.webp'},
    { nome: 'Placa de Vídeo', valor: 2000, quantidade: 7 ,img: './sela 2.webp'},
    { nome: 'Processador', valor: 1500, quantidade: 12 ,img: './sela 3.jpg'},
    { nome: 'Memória RAM', valor: 320, quantidade: 18 ,img: './sela.jpg'},
    { nome: 'HD 1TB', valor: 250, quantidade: 9 ,img: './cursodejava.jpg'},
    { nome: 'SSD 512GB', valor: 450, quantidade: 14 ,img: './sapata.webp'},
    { nome: 'Fonte 600W', valor: 300, quantidade: 6 ,img: './sela 3.jpg'},
    { nome: 'SSD 512GB', valor: 450, quantidade: 14 ,img: './sapata.webp'},
    { nome: 'Fonte 600W', valor: 300, quantidade: 6 ,img: './sela 3.jpg'},
    { nome: 'Teclado', valor: 111, quantidade: 15 ,img: './sela.jpg'},
    { nome: 'Mouse', valor: 75, quantidade: 20 ,img: './cursodejava.jpg'},
    { nome: 'Monitor', valor: 800, quantidade: 10 ,img: './caneca.webp'},
    { nome: 'Gabinete', valor: 350, quantidade: 5 ,img: './sapata.webp'},
    { nome: 'Placa de Vídeo', valor: 2000, quantidade: 7 ,img: './sela 2.webp'},
    { nome: 'Processador', valor: 1500, quantidade: 12 ,img: './sela 3.jpg'},
    { nome: 'Memória RAM', valor: 320, quantidade: 18 ,img: './sela.jpg'}, 
    { nome: 'Gabinete', valor: 350, quantidade: 5 ,img: './sapata.webp'},
    { nome: 'Placa de Vídeo', valor: 2000, quantidade: 7 ,img: './sela 2.webp'},
    { nome: 'Processador', valor: 1500, quantidade: 12 ,img: './sela 3.jpg'},
    { nome: 'Memória RAM', valor: 320, quantidade: 18 ,img: './sela.jpg'},
    { nome: 'HD 1TB', valor: 250, quantidade: 9 ,img: './cursodejava.jpg'},
    { nome: 'SSD 512GB', valor: 450, quantidade: 14 ,img: './sapata.webp'},
    { nome: 'Fonte 600W', valor: 300, quantidade: 6 ,img: './sela 3.jpg'},





  ]);
    
  return (
    <div>
      <Navbar />
      
       


      <div className='cards'>
        {produtos.map((produto) => (
          <Card produto={produto}/>
        ))}
      </div>


    </div>
  )
}

export default Produtos