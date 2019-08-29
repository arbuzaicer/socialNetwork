import * as axios from "axios";

let baseConnect = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "9ec389fe-9426-4fdc-92b5-8c262a4ef8c2"
    }
});

export const DALconnection = {
    profile: {
        authorization() {
            return baseConnect.get(`auth/me`)
                .then(response => {
                    return response.data;
                });
        },
        setUserData(userID) {
            return baseConnect.get(`profile/${userID}`)
        }
    },
    users: {
        getUsers(currentPage, count) {
            return baseConnect.get(`users?page=${currentPage}&count=${count}`)
                .then(response => {
                    return response.data;
                })
        },
        getUsersPages(currentPage, count) {
            return baseConnect.get(`users?page=${currentPage}&count=${count}`)
                .then(response => {
                    return response.data;
                })
        },
        unfollowUser(id) {
            return baseConnect.delete(`follow/${id}`)
                .then(response => {
                    return response.data;
                })
        },
        followUser(id) {
            return baseConnect.post(`follow/${id}`, {})
                .then(response => {
                    return response.data;
                })
        }

    },
};