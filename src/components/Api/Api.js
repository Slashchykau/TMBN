import * as axios from "axios";
import React from "react";
const instance = axios.create({
    withCredentials: true,
    baseURL :`https://social-network.samuraijs.com/api/1.0/`,

    headers: {
        'API-KEY':  '97b7a772-1328-454b-bbe0-9a0b8deec16c'
    }

})
export const  UsersApi = {getUsers(pageSize ,currentPage ){
        return   instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {return response.data})
    },
    postDelFollow(followed,id) {
    return followed ? instance.delete(`/follow/${id}`).then(response => { return response.data.resultCode})
        : instance.post(`/follow/${id}`,{}).then(response => { return response.data.resultCode})
    },
    unfollow(userId) {
    return instance.delete()
    },
    follow(userId) {
    return instance.post()
    }

}

