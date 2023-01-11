import axios from "axios";
import {IUser} from "./entity";

export default class UserApi {
    static getList(): Promise<Array<IUser>> {
        return axios.get("/users");
    }

    static getById(id: number): Promise<IUser> {
        return axios.get(`/users/${id}`);
    }
}