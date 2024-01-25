import styled from "styled-components";
import { Tweet } from "../models/tweet.model";

const CardStyled = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #cbc8cb;
    padding: 8px;

    .tweet-photo {
        width: 80px;
    }

    .tweet-conteudo {
        flex: 1;
    }

    .tweet-titulo {
        display: flex;
        flex-direction: row;
        align-items: center;

        .tweet-user {
            font-weight: bold;
        }
        span {
            margin-right: 8px;
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
            height: 60px;
            width: 60px;
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
                <img src={props.tweet.user.urlPhoto} alt="foto perfil" />
            </div>
            <div className="tweet-conteudo">
                <div className="tweet-titulo">
                    <h1 className="tweet-user">{props.tweet.user.name}</h1>
                    <span>@{props.tweet.user.username}</span>
                    <span>* 3h</span>
                </div>
                <div className="tweet-text">{props.tweet.content}</div>
                <div className="tweet-botao">
                    <div>bot1</div>
                    <div>bot2</div>
                </div>
            </div>
        </CardStyled>
    );
}
