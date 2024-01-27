import styled from "styled-components";
import { Tweet } from "../models/tweet.model";

const CardStyled = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ddd;
    color: rgb(51, 51, 51);
    padding: 8px 12px;

    .tweet-photo {
        margin-right: 12px;
    }

    .tweet-conteudo {
        flex: 1;
        font-size: 14px;
    }

    .tweet-titulo {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;

        .tweet-user {
            font-weight: bold;
            font-size: 14px;

            margin-right: 6px;
        }
        span {
            margin-right: 4px;
        }
    }

    .tweet-botao {
        margin-top: 8px;
        display: flex;
        flex-direction: row;
        div {
            margin-right: 8px;
        }
    }

    .tweet-photo {
        img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
        }
    }
`;

export interface TweetCardProps {
    tweet: Tweet;
}

export function TweetCard(props: TweetCardProps) {
    return (
        <CardStyled>
            <div className="tweet-photo">
                <img src={props.tweet.usuario.urlPhoto} alt="foto perfil" />
            </div>
            <div className="tweet-conteudo">
                <div className="tweet-titulo">
                    <h1 className="tweet-user">{props.tweet.usuario.nome}</h1>
                    <span>@{props.tweet.usuario.username}</span>
                    <span>* 3h</span>
                </div>
                <div className="tweet-text">{props.tweet.conteudo}</div>
                <div className="tweet-botao">
                    <div>bot1</div>
                    <div>bot2</div>
                </div>
            </div>
        </CardStyled>
    );
}
