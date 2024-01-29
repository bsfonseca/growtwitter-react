import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";
import { Tweet } from "../models/tweet.model";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user.model";
import { ContentProfile } from "../components/ContentProfile";

export const Profile = () => {
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

        axios
            .get(`http://localhost:3333/usuario/${user.id}/tweet`, {
                headers: {
                    Authorization: user.token,
                },
            })
            .then((result) => {
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

                {loading || !user ? (
                    <p>Aguarde! Carregando...</p>
                ) : (
                    <ContentProfile tweets={listaTweets} user={user!} />
                )}

                <RightMenu />
            </Container>
        </>
    );
};

//then: recebe um ok do AXIOS
