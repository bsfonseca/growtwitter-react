import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";
import { Tweet } from "../models/tweet.model";
import { User } from "../models/user.model";

export const Home = () => {
    //chamar api
    const [listaTweets, setTweets] = useState<Tweet[]>([]);

    const user: User = {
        id: "4348433",
        name: "Bruna",
        urlPhoto:
            "https://lh3.googleusercontent.com/pw/ABLVV87pC-tZ2XFj3JYHc9OCgCFPgSbTMCL4DGsHT92jPpLEqKjXlJSAE1dxgzbF-V9hZL31dSucjdZ6_wCqD28e_4FHOGLgw6LCbp7l8nLh8qgfgrmJ691yj40DqEIe8beeoqTc86oj16QYhzbtezA4wh-X=w709-h945-s-no-gm",
        username: "@bruna",
    };

    useEffect(() => {
        setTweets([
            {
                content: "lalaalla",
                tipo: "N",
                id: "355353",
                user: user,
            },
            {
                content: "passear",
                tipo: "N",
                id: "9706353",
                user: user,
            },
            {
                content: "dnsafausfhaufbafa",
                tipo: "N",
                id: "212415353",
                user: user,
            },
            {
                content: "passear",
                tipo: "N",
                id: "9706353",
                user: user,
            },
            {
                content: "dnsafausfhaufbafa",
                tipo: "N",
                id: "212415353",
                user: user,
            },
        ]);
    }, []);

    return (
        <>
            <Container>
                <LeftMenu />
                {/* <Content tweets={tweets} /> */}

                <Content tweets={listaTweets} />

                <RightMenu />
            </Container>
        </>
    );
};
