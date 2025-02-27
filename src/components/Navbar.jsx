import { Link } from "react-router-dom"
import "./Navbar.css"


function Navbar() {
  return (
    <div className="container-navbar">
        <Link className="texto" to="/">Home</Link>
        <Link className="texto" to="/contato">Contato</Link>
        <Link className="texto" to="/avisos"> Avisos</Link>
        <Link className="texto" to="/produtos">produtos</Link>

    </div>
  )
}

export default Navbar