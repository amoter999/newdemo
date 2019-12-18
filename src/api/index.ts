import request from '@/util/http'
import { AxiosPromise } from "axios/index.d";

export function movieList(query: any): AxiosPromise {
    return request({
        url: 'v2/movie/in_theaters',
        method: 'get',
        params: query
    })
}
export function searchMovie(query: any): AxiosPromise {
    return request({
        url: 'v2/movie/search',
        method: 'get',
        params: query
    })
}
export function movieDetail(id: string): AxiosPromise {
    return request({
        url: `v2/movie/subject/${id}`,
        method: 'get',
        // params: query
    })
}



