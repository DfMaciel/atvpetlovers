/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import CardClientes from "../cards/cardClientes";
import { ViewCliente } from "../interface/iCliente";

type props = {
    tema: string;
    clientes: ViewCliente[];
}

export default function ListaClienteConsumoValor (props: props) {
    const [tipoBusca, setTipoBusca] = useState<string>('')
    const handleTipoBusca = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setTipoBusca(value)
    }
    let tema = props.tema
    return (
        <>
            <div className="container-fluid">
                <h3 style={{textAlign: "center"}}> Maior Consumo (Em valor) </h3>
                <select name="tipoBusca" className="form-control" style={{marginTop: '1%', marginBottom: '2%'}} onChange={handleTipoBusca} aria-label="Tipo de busca" aria-describedby="basic-addon1">
                        <option value="" selected disabled>Selecione o tipo de pesquisa</option>
                        <option value="produto">Produtos</option>
                        <option value="servico">Serviços</option>
                </select>
                {props.clientes.map((cliente, idx) => (
                    <CardClientes consumo='sim' key={idx} cliente={cliente}/>
                ))}
            </div>
    </>
    )
}