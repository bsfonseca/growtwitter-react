import { User } from "./user.model";

export interface Tweet {
    id: string;
    conteudo: string;
    tipo: string;
    usuario: User;
}
