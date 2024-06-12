/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styles from '../styles/navbar.module.css'

interface props {
    tema: string,
    botoes: {nome: string, 
        dropdownItems: {
        nome: string 
    }[]}[],
    selecionarView: Function
}

export default function BarraNavegacao (props: props) {

    const gerarListaBotoes = () => {
        if (props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = props.botoes.map(botao =>
                <li key={botao.nome} className="nav-item dropdown">
                    <a className={`nav-link dropdown-toggle ${styles.navItem}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {botao.nome}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {botao.dropdownItems.map((item, index) =>
                            <li key={index}>
                                <a className={`dropdown-item ${styles.dropdownItems}`} href="#" onClick={(e) => props.selecionarView(item.nome, e)}>{item.nome}</a>
                            </li>
                        )}
                    </ul>
                </li>
            )
            return lista
        }
    }
    let tema = props.tema
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
                            {gerarListaBotoes()}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}