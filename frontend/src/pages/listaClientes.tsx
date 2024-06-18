import { useEffect, useState } from "react";
import Navbar from "../componentes/navbar"
import BuscarClientes from "../funcoes/buscarClientes";
import CardClientes from "../componentes/cardClientes";

const ListaClientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        BuscarClientes()
            .then((clientes) => {
                setClientes(clientes);
            })
            .catch((error) => {
                alert(error.message);
            });
    },[]);

    return (
        <>
            <Navbar/>
            <div className="container-fluid">
                <h3 style={{textAlign: "center"}}> Lista de Clientes </h3>
                {clientes.map((cliente, idx) => (
                    <CardClientes key={idx} clienteEscolhido={cliente}/>
                ))}
            </div>
        </>
    )
}

export default ListaClientes;