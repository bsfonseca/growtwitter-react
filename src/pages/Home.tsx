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
    const [loading, setLoading] = useState<boolean>(false);

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

        setLoading(true);

        axios.get(import.meta.env.VITE_API_BASEURL + "/tweets").then((result) => {
            setLoading(false);

            setTweets(result.data.data);
        });
    }, [user]);

    if (!user) {
        return;
    }

    return (
        <>
            <Container>
                <LeftMenu user={user} />

                {loading ? <p>Aguarde! Carregando...</p> : <Content tweets={listaTweets} />}

                <RightMenu />
            </Container>
        </>
    );
};

//then: recebe um ok do AXIOS
