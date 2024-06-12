/* eslint-disable jsx-a11y/anchor-is-valid */
import CardServicos from "../cards/cardServico";
import { ViewServico } from "../interface/iServico";

type props = {
    tema: string;
    servicos: ViewServico[];
}

export default function ListaServicosMaisConsumidos (props: props) {
    return ( 
        <>
            <div className="container-fluid">
                <h3 style={{textAlign: "center"}}> Serviços Mais Consumidos </h3>
                {props.servicos.map((servico, idx) => (
                    <CardServicos key={idx} servico={servico} consumo='sim'/>
                ))}
            </div>
        </>
    )
}