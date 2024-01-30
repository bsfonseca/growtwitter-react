import axios from "axios";
import { User } from "../models/user.model";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
});

export async function login(body: any) {
    try {
        const result = await api.post("/login", body);
        return result.data.data;
    } catch (error: any) {
        alert(error.toString());
        return null;
    }
}

export async function listarTudo() {
    {
        try {
            const result = await api.post("/all");
            return result.data.data;
        } catch (error: any) {
            alert(error.toString());
            return null;
        }
    }
}

export async function criarTweet(body: any, user: User) {
    try {
        const result = await api.post(`/usuario/${user.id}/tweet`, body, {
            headers: {
                Authorization: user.token,
            },
        });
        return result.data.data;
    } catch (error: any) {
        alert(error.toString());
        return null;
    }
}
