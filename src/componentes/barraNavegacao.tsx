/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styles from '../styles/navbar.module.css'

type props = {
    tema: string,
    botoes: {nome: string, 
        dropdownItems: {
        nome: string 
    }[]}[],
    selecionarView: Function
}

export default class BarraNavegacao extends Component<props>{
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this)
    }


    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = this.props.botoes.map(botao =>
                <li key={botao.nome} className="nav-item dropdown">
                    <a className={`nav-link dropdown-toggle ${styles.navItem}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {botao.nome}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {botao.dropdownItems.map((item, index) =>
                            <li key={index}>
                                <a className={`dropdown-item ${styles.dropdownItems}`} href="#" onClick={(e) => this.props.selecionarView(item.nome, e)}>{item.nome}</a>
                            </li>
                        )}
                    </ul>
                </li>
            )
            return lista
        }
    }

    render() {
        let tema = this.props.tema
        return (
            <>
                <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: tema, marginBottom: 10 }}>
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">PetLovers</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {this.gerarListaBotoes()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}