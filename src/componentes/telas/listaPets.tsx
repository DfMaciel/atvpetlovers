/* eslint-disable jsx-a11y/anchor-is-valid */
import { ViewPet } from "../interface/iPet";
import CardPets from "../cards/cardPets";

type props = {
    tema: string;
    pets: ViewPet[];
}

export default function ListaPets(props: props){
    let tema = props.tema
    return (
        <>
            <div className="container-fluid">
                <h3 style={{textAlign: "center"}}> Lista de Pets </h3>
                {props.pets.map((pet, idx) => (
                    <CardPets key={idx} pet={pet}/>
                ))}
            </div>
    </>
    )
}