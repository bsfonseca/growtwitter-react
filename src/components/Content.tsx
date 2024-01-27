import styled from "styled-components";
import { TweetCard } from "./TweetCard";
import { Tweet } from "../models/tweet.model";
import { User } from "../models/user.model";

const ContentStyled = styled.div`
    flex: 1;

    overflow: auto;
    min-width: 220px;
    background-color: white;
    border: 1px solid #bdbbbb;

    #pagina-inicial {
        color: #4a4141;
        font-size: 24px;
    }
`;

interface ContentProps {
    tweets: Tweet[];
}

export function Content(props: ContentProps) {
    const user: User = {
        id: "4348433",
        nome: "Bruna",
        urlPhoto:
            "https://lh3.googleusercontent.com/pw/ABLVV87pC-tZ2XFj3JYHc9OCgCFPgSbTMCL4DGsHT92jPpLEqKjXlJSAE1dxgzbF-V9hZL31dSucjdZ6_wCqD28e_4FHOGLgw6LCbp7l8nLh8qgfgrmJ691yj40DqEIe8beeoqTc86oj16QYhzbtezA4wh-X=w709-h945-s-no-gm",
        username: "@bruna",
    };

    const tweet1: Tweet = {
        conteudo: "Olá, vamos jantar fora?",
        tipo: "N",
        id: "46464",
        usuario: user,
    };
    const tweet2: Tweet = {
        conteudo: "Floripa ou Rosul?",
        tipo: "N",
        id: "675858",
        usuario: user,
    };

    return (
        <>
            <ContentStyled>
                <p id="pagina-inicial">Página Inicial</p>
                <hr />
                {props.tweets.map((item) => {
                    return <TweetCard tweet={item} key={item.id} />;
                })}
            </ContentStyled>
        </>
    );
}
