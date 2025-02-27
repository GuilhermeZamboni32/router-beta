import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Contato from "../Pages/Contato";
import Avisos from "../Pages/Avisos";
import Produtos from "../pages/Produtos";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/avisos", element: <Avisos />},
    {path: "/produtos", element: <Produtos />},
])

export default router;