import { useNavigate } from "react-router-dom";
import { login } from "../services/api.service";
import styled from "styled-components";
import { useState } from "react";

const LoginStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: #f2f2f2;

    .tela-principal {
        display: flex;
        flex-direction: row;
        max-width: 720px;
        border-radius: 10px;
        overflow: hidden;
        align-items: center;
        background-color: white;
    }

    .grow-esquerda {
        background-color: #61b8ef;
        display: flex;
        flex-direction: column;
        padding: 24px;
        min-height: 300px;

        h1 {
            color: white;
        }

        p {
            color: white;
            margin-bottom: 4px;
        }

        #p-grow {
            font-size: 12px;
            margin-bottom: 12px;
            margin-top: 8px;
        }
    }

    .grow-direita {
        padding: 24px;
        display: flex;
        flex-direction: column;
        min-width: 40%;

        input {
            border: 1px solid #ccc;
            border-radius: 6px;
            padding: 6px;
            margin-bottom: 8px;
            width: 100%;
            margin-top: 4px;
        }

        button {
            border: 0px;
            width: 100%;
            padding: 8px;
            border-radius: 6px;
            margin-top: 4px;
            background-color: #61b8ef;
            color: white;

            &:disabled {
                background-color: #ccc;
                color: #444;
            }
        }

        label {
            font-size: 14px;
            color: #777;
        }

        h1 {
            text-align: center;
            font-size: 24px;
            color: #444;
            margin-bottom: 8px;
        }
    }
`;

export const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const submitLogin = async (event: any) => {
        event.preventDefault();

        // 1 - Monta body da request

        const body = {
            username: event.target.username.value,
            senha: event.target.password.value,
        };

        setLoading(true);

        // 2 - Chama a API p fazer login
        const result = await login(body);

        setLoading(false);

        // 3 - Direciona a página p home

        if (result) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/home");
        }
    };

    return (
        <LoginStyled>
            <div className="tela-principal">
                <div className="grow-esquerda">
                    <h1>Growtwitter</h1>

                    <p id="p-grow">Trabalho final do bloco intermediário</p>

                    <p>
                        O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam
                        uma experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte
                        desta comunidade que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e
                        a disseminação de ideias.
                    </p>
                </div>
                <div className="grow-direita">
                    <h1>Entrar no Growtwitter</h1>
                    <form onSubmit={submitLogin}>
                        <div>
                            <label htmlFor="">Username</label>
                            <input type="text" name="username" required />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" required />
                        </div>
                        <div>
                            <button disabled={loading}>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </LoginStyled>
    );
};
