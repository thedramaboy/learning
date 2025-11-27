import axios, { type AxiosPromise } from "axios";

export interface HasId {
    id?: number;
}

export class ApiSync<T extends HasId> {

    public rootUrl: string;

    constructor(rootUrl: string) {
        this.rootUrl = rootUrl;
    }

    fetch (id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save (data: T): AxiosPromise {

        const { id } = data;
        if(id) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            return axios.post(this.rootUrl, data)
        }
    }
}