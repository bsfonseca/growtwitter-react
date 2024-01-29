import styled from "styled-components";

const RightStyled = styled.div`
    background-color: #ffffff;
    min-width: 180px;

    width: 300px;

    background-color: rgb(233, 233, 233);
    border-radius: 6px;
    padding: 10px;
    margin: 20px;

    #p-titulo {
        font-weight: bold;
        font-size: 14px;
        color: #3d3e3e;
        margin-bottom: 10px;
    }

    #p-meio {
        font-size: 10px;
        color: #7e8080;
        margin-bottom: 2px;
    }

    #p-fim {
        font-weight: bold;
        font-size: 12px;
        color: #343535;
    }

    #mostrar-mais {
        font-weight: bold;
        font-size: 10px;
        color: #539cbe;
        transition: color 0ms;
    }
    #mostrar-mais:hover {
        color: #91e2f0;
    }
`;

/**
 * @todo refatorar para ficar componentizado
 *
 */

export function RightMenu() {
    return (
        <div>
            <RightStyled>
                <p id="p-titulo">O que está acontecendo?</p>
                <p id="p-meio">Esportes - Há 45 min</p>
                <p id="p-fim">Assuntos sobre esportes</p>
                <br />
                <p id="p-meio">Assunto do Momento em Brasil</p>
                <p id="p-fim">Assunto do Momento</p>
                <br />
                <p id="p-meio">Música - Assunto do Momento</p>
                <p id="p-fim">Assunto sobre Música</p>
                <br />
                <p id="p-meio">Cinema - Assunto do Momento</p>
                <p id="p-fim">Assunto sobre Filmes e Cinema</p>
                <br />
                <p id="mostrar-mais">Mostrar mais</p>
            </RightStyled>
        </div>
    );
}
