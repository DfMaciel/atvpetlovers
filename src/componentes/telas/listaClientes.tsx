/* eslint-disable jsx-a11y/anchor-is-valid */
import CardClientes from "../cards/cardClientes";
import { ViewCliente } from "../interface/iCliente";

type props = {
    tema: string;
    clientes: ViewCliente[];
}

export default function ListaCliente (props: props) {
    let tema = props.tema
    return (
        <>
            <div className="container-fluid">
                <h3 style={{textAlign: "center"}}> Lista de Clientes </h3>
                {props.clientes.map((cliente, idx) => (
                    <CardClientes consumo='' key={idx} cliente={cliente}/>
                ))}
            </div>
        </>
    )
}