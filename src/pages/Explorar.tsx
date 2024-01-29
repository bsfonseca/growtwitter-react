import styled from "styled-components";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";
import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import { User } from "../models/user.model";
import { useNavigate } from "react-router-dom";

const ExplorerStyled = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;
    border: 1px solid #ddd;

    font-weight: bold;
    font-size: 29px;
    color: #3d3e3e;

    h1 {
        font-size: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid #ddd;
        padding: 8px;
    }

    #p-menor {
        font-size: 10px;
        color: #7e8080;
        margin-top: 16px;
        margin-left: 8px;
    }

    #p-maior {
        font-weight: bold;
        font-size: 12px;
        color: #343535;
        margin-left: 8px;
    }
`;

export function Explorar() {
    const [user, setUser] = useState<User>();
    const navigate = useNavigate();

    useEffect(() => {
        const userStorage = localStorage.getItem("user");

        if (!userStorage) {
            alert("Sessão experida, faça login novamente");
            navigate("/login");
            return;
        }

        setUser(JSON.parse(userStorage));
    }, []);

    if (!user) {
        return;
    }
    return (
        <>
            <Container>
                <LeftMenu user={user} />
                <ExplorerStyled>
                    <h1>Explorar</h1>

                    <p id="p-menor">Esportes - Há 45 min</p>
                    <p id="p-maior">Assunto sobre esportes</p>
                    <p id="p-menor">Assunto do Momento em Brasil</p>
                    <p id="p-maior">Assunto do Momento</p>
                    <p id="p-menor">Música - Assunto do Momento</p>
                    <p id="p-maior">Assunto sobre Música</p>
                    <p id="p-menor">Cinema - Assunto do Momento</p>
                    <p id="p-maior">Assunto sobre Filmes e Cinema</p>
                    <p id="p-menor">Entretenimento - Assunto do Momento</p>
                    <p id="p-maior">Assunto sobre Entretenimento</p>
                    <p id="p-menor">Assunto do Momento em Porto Alegre</p>
                    <p id="p-maior">Assunto do Momento em Porto Alegre</p>
                    <p id="p-menor">Daphne - Principal Assunto do Momento</p>
                    <p id="p-maior">Assunto sobre a Daphne</p>
                </ExplorerStyled>
                <RightMenu />
            </Container>
        </>
    );
}
