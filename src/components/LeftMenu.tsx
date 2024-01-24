import styled from "styled-components";
import logo from "../assets/logo_growtweet.svg";
import paginicial from "../assets/icone_pagina inicial_selecionado.svg";
import explorer from "../assets/icone_explorar.svg";
import perfil from "../assets/icone_perfil.svg";

const LeftStyled = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-family: "Roboto";

    .pag-inicial {
        display: flex;
        flex-direction: row;
        margin-bottom: 8px;
        color: #272728;
    }
`;

export function LeftMenu() {
    return (
        <>
            <LeftStyled id="left">
                <div id="top-left">
                    <img src={logo} alt="Logo Growtwitter" />
                    <div className="pag-inicial">
                        <img src={paginicial} alt="Logo página inicial" />

                        <p>Página Inicial</p>
                    </div>

                    <div className="pag-inicial">
                        <img src={explorer} alt="Logo explorer" />
                        <p>Explorer</p>
                    </div>

                    <div className="pag-inicial">
                        <img src={perfil} alt="Logo perfil" />
                        <p>Perfil</p>
                    </div>

                    <button>Tweetar</button>
                </div>

                <div id="bottom-left">
                    <div>Card daphne</div>
                    <button>Sair</button>
                </div>
            </LeftStyled>
        </>
    );
}
