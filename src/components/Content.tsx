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

    &::-webkit-scrollbar {
        width: 12px; /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
        background: #e8e8e8; /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #848484; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
        border: 3px solid #e8e8e8; /* creates padding around scroll thumb */
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
