/* eslint-disable jsx-a11y/anchor-is-valid */
import CardProdutos from "../cards/cardProduto";
import { ViewProduto } from "../interface/iProduto";

type props = {
    tema: string;
    produtos: ViewProduto[];
}

export default function ListaProdutosMaisConsumidos (props: props){
    
    return ( 
        <>
            <div className="container-fluid">
                <h3 style={{textAlign: "center"}}> Produtos Mais Vendidos </h3>
                {props.produtos.map((produto, idx) => (
                    <CardProdutos key={idx} produto={produto} consumo='sim'/>
                ))}
            </div>
        </>
    )
}