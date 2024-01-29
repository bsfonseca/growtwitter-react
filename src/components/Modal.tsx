import styled from "styled-components";

const ModalStyled = styled.div`
    background-color: rgb(0, 0, 0, 0.4);
    color: #333;
    padding: 40px;

    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    #card {
        background-color: #ddd;
        color: #222;
        padding: 12px;
        border-radius: 8px;
        min-height: 200px;
        min-width: 300px;
    }
`;

export function Modal() {
    return (
        <ModalStyled>
            <div id="card">
                <p>Teste</p>
            </div>
        </ModalStyled>
    );
}
