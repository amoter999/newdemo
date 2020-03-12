import request from '@/util/http'
import { AxiosPromise } from "axios/index.d";
// 电影列表展示页面
export function movieList(query: any): AxiosPromise {
    return request({
        url: 'v2/movie/in_theaters',
        method: 'get',
        params: query
    })
}
// 搜索电影接口，此接口用不了，没有权限访问
export function searchMovie(query: any): AxiosPromise {
    return request({
        url: 'v2/movie/search',
        method: 'get',
        params: query
    })
}
// 电影详情页面
export function movieDetail(id: string): AxiosPromise {
    return request({
        url: `v2/movie/subject/${id}`,
        method: 'get',
        // params: query
    })
}
// 获取某个电影的评论
export function comments(id: string): AxiosPromise {
    return request({
        url: `v2/movie/subject/${id}/comments`,
        method: 'get',
    })
}