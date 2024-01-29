import styled from "styled-components";
import logo from "../assets/logo_growtweet.svg";
import paginicial from "../assets/icone_pagina inicial_selecionado.svg";
import explorer from "../assets/icone_explorar.svg";
import perfil from "../assets/icone_perfil.svg";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user.model";

const LeftStyled = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;
    padding: 12px;
    font-family: "Roboto";

    .pag-inicial {
        display: flex;
        flex-direction: row;
        margin-bottom: 4px;
        color: #272728;
    }

    p {
        margin-left: 8px;
        font-size: 16;
        margin-top: 8px;
    }
    #tweetar {
        border: 0px;
        width: 100%;
        padding: 8px;
        border-radius: 16px;
        margin-top: 8px;
        background-color: rgb(29, 155, 240);
        color: white;
    }

    .card-bottom {
        display: flex;
        flex-direction: row;
        margin-bottom: 12px;

        h1 {
            font-size: 16px;
            margin-left: 8px;
        }

        p {
            font-size: 12px;
            margin: 0;
            margin-left: 8px;
        }

        img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
        }
    }

    .button {
        outline: none;
        border: 0;
        background-color: white;
    }
`;

interface LeftProps {
    user: User;
}

export function LeftMenu(props: LeftProps) {
    const navigate = useNavigate();

    const clicarSair = () => {
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        <>
            <LeftStyled id="left">
                <div id="top-left">
                    <img src={logo} alt="Logo Growtwitter" />
                    <div className="pag-inicial" onClick={() => navigate("/home")}>
                        <img src={paginicial} alt="Logo página inicial" />
                        <p>Página Inicial</p>
                    </div>

                    <div className="pag-inicial" onClick={() => navigate("/explorar")}>
                        <img src={explorer} alt="Logo explorer" />
                        <p>Explorer</p>
                    </div>

                    <div onClick={() => navigate("/profile")} className="pag-inicial">
                        <img src={perfil} alt="Logo perfil" />
                        <p>Perfil</p>
                    </div>

                    <button id="tweetar">Tweetar</button>
                </div>

                <div id="button-left">
                    <div className="card-bottom">
                        <img src={props.user.urlPhoto} alt="" />
                        <div>
                            <h1>{props.user.nome}</h1>
                            <p>@{props.user.username}</p>
                        </div>
                    </div>

                    <button className="button" onClick={clicarSair}>
                        Sair
                    </button>
                </div>
            </LeftStyled>
        </>
    );
}
