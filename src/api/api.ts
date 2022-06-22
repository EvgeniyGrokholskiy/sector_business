import axios from "axios";

import {IPost} from "../types/types";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const api = {
    getAllPosts() {
        return instance.get<Array<IPost>>("posts/")
    },
    getCurrentPage(currentPage: number) {
        return instance.get<Array<IPost>>(`posts/?_page=${currentPage}&_limit=10`)
    }
}