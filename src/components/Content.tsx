import styled from "styled-components";
import { TweetCard } from "./TweetCard";
import { Tweet } from "../models/tweet.model";

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
        border-bottom: 1px solid #ddd;
    }
`;

interface ContentProps {
    tweets: Tweet[];
}

export function Content(props: ContentProps) {
    return (
        <>
            <ContentStyled>
                <p id="pagina-inicial">Página Inicial</p>

                {props.tweets.map((item) => {
                    return <TweetCard tweet={item} key={item.id} />;
                })}
            </ContentStyled>
        </>
    );
}
