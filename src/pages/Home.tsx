import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";
import { Tweet } from "../models/tweet.model";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user.model";

export const Home = () => {
    const [user, setUser] = useState<User>();
    const navigate = useNavigate();

    useEffect(() => {
        const userStorage = localStorage.getItem("user");

        if (!userStorage) {
            alert("Sessão experida, faça login novamente");
            navigate("/login");
            return;
        }

        setUser(JSON.parse(userStorage));
    }, []);

    //chamar api
    const [listaTweets, setTweets] = useState<Tweet[]>([]);

    useEffect(() => {
        if (!user) {
            return;
        }

        axios.get("http://localhost:3333/tweets").then((result) => {
            setTweets(result.data.data);
        });
    }, [user]);

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

//then: recebe um ok do AXIOS
