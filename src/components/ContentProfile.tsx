import styled from "styled-components";
import { TweetCard } from "./TweetCard";
import { Tweet } from "../models/tweet.model";
import { User } from "../models/user.model";
import icone from "../assets/icone_seta.svg";
import { Navigate, useNavigate } from "react-router-dom";

const ContentStyled = styled.div`
    flex: 1;
    overflow: auto;
    min-width: 220px;
    background-color: white;
    border: 1px solid #ddd;

    #pagina-inicial {
        color: #413b3b;
        font-size: 18px;
        font-weight: bold;
        padding: 8px;
    }
`;

const PerfilStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 8px;
    border-bottom: 1px solid #ddd;

    .perfil-name {
        margin-left: 8px;
        margin-bottom: 8px;
        font-weight: bold;
    }

    .icone-princ {
        display: flex;
        flex-direction: row;

        img {
            margin-left: 4px;
        }
    }

    .photo {
        img {
            height: 80px;
            width: 80px;
            border-radius: 50%;
            margin-left: 8px;
            margin-left: 12px;
        }
    }
    h1 {
        font-size: 20px;
        margin-left: 14px;
        color: #413b3b;
    }

    p {
        font-size: 12px;
        margin-left: 14px;
        color: #413b3b;
        margin-bottom: 8px;
    }
`;

interface ContentProfileProps {
    tweets: Tweet[];
    user: User;
}

export function ContentProfile(props: ContentProfileProps) {
    const navigate = useNavigate();

    const voltar = () => {
        return navigate("/home");
    };

    return (
        <>
            <ContentStyled>
                <PerfilStyled>
                    <div className="icone-princ">
                        <img src={icone} alt="icone-seta" onClick={voltar} />
                        <div className="perfil-name">Perfil de @{props.user.nome}</div>
                    </div>

                    <div className="photo">
                        <img src={props.user.urlPhoto} alt="fotoPerfil" />
                        <h1>{props.user.nome}</h1>
                        <p>@{props.user.username}</p>
                    </div>
                </PerfilStyled>

                {props.tweets.map((item) => {
                    return <TweetCard tweet={item} key={item.id} />;
                })}
            </ContentStyled>
        </>
    );
}
