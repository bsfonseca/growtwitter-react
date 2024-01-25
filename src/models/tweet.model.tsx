import { User } from "./user.model";

export interface Tweet {
    id: string;
    content: string;
    tipo: string;
    user: User;
}
