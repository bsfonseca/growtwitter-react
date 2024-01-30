import styled from "styled-components";
import { criarTweet } from "../services/api.service";
import { useState } from "react";
import { User } from "../models/user.model";
import seta from "../assets/X.svg";

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
        background-color: white;
        color: #222;
        padding: 12px;
        border-radius: 8px;
        min-height: 200px;
        min-width: 300px;
    }
    .text {
        border: 0;
        font-size: 14px;
        outline: none;
        resize: none;
    }
    .button-x {
        border: none;
        background-color: white;
    }

    .button-tweet {
        border: 0px;
        padding: 8px;
        border-radius: 16px;
        margin-top: 8px;
        background-color: rgb(29, 155, 240);
        color: white;
    }
`;

interface ModalProps {
    user: User;
    // Adição de uma função (funcionalidade) como uma prop
    fecharModal: () => any;
}

export function Modal(props: ModalProps) {
    const [tweetConteudo, setTweetConteudo] = useState<string>("");

    const submitTweet = async (event: any) => {
        event.preventDefault();

        const body = {
            conteudo: tweetConteudo,
            tipo: "T",
        };

        const result = await criarTweet(body, props.user);

        if (result) {
            window.location.reload();
        }
    };

    return (
        <ModalStyled>
            <div id="card">
                <button className="button-x" type="submit" onClick={props.fecharModal}>
                    <img src={seta} alt="" />
                </button>

                <br />
                <br />
                <form onSubmit={submitTweet}>
                    <div></div>

                    <textarea
                        className="text"
                        placeholder=" Digite seu texto aqui!"
                        value={tweetConteudo}
                        onChange={(e) => setTweetConteudo(e.target.value)}
                        cols={50}
                        rows={10}
                    />

                    <div>
                        <button className="button-tweet">Tweetar</button>
                    </div>
                </form>
                {/* <textarea  cols="40" rows="10"></textarea> */}
            </div>
        </ModalStyled>
    );
}
