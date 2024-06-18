import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import ListaClientes from "../pages/listaClientes";
import CadastroCliente from "../pages/cadastrarCliente";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListaClientes />} />
                <Route path="/cadastro" element={<CadastroCliente />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;