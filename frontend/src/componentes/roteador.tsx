import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import ListaClientes from "../pages/listaClientes";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListaClientes />} />
                {/* <Route path="/sobre" element={<Sobre />} /> */}
                {/* <Route path="/contato" element={<Contato />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;