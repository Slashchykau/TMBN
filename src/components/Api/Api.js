import * as axios from "axios";
import React from "react";
const instance = axios.create({
    withCredentials: true,
    baseURL :`https://social-network.samuraijs.com/api/1.0/`,

    headers: {
        'API-KEY':  '97b7a772-1328-454b-bbe0-9a0b8deec16c'
    }

})
export const  UsersApi = {
    getUsers(pageSize ,currentPage ){
        return   instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {return response.data})
    },
    postDelFollow(followed,id) {
    return followed ? instance.delete(`/follow/${id}`).then(response => { return response.data.resultCode})
        : instance.post(`/follow/${id}`,{}).then(response => { return response.data.resultCode})
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }

}
export const AuthApi = {
    me() {
         return  instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return  instance.post(`auth/login`,{email, password, rememberMe});
    },
    logout() {
        return  instance.delete(`auth/login`)
    },
}
export const ProfileApi = {
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    upStatus(status) {
        return instance.put(`profile/status/`,{status})
    }

}
