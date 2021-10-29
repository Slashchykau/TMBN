
import {ProfileApi, UsersApi} from "../components/Api/Api";

const ADD_POST = 'NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialProfileState = {
    postsData: [{id: 1, message: "I'm think that, react it nice framework!", likeCount: '100500'},
        {id: 1, message: "I'm great. What you think about react?", likeCount: '11'},
        {id: 1, message: "I'm fine thanks. And you?", likeCount: '13'},
        {id: 1, message: "How, are you?", likeCount: '10'}],
    profile: null,
    status: ''
}


const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case ADD_POST:
            const news = {id: 1, message: action.newPost, likeCount: '100500'};
            return {
                ...state,
                postsData: [...state.postsData, news],
                currentArea: ''
            }


        case SET_STATUS:
            return {
                ...state,

                status: action.status
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default:
            return state;

    }

}
export const createPostAction = (newPost) => {
    return {type: ADD_POST, newPost}
};
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile};
}
export const setUserStatus = (status) => {

    return {type: SET_STATUS, status};
}
export const getUserProfile = (userId) => (dispatch) => {
    UsersApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getUserStatus = (userId) => (dispatch) => {
    ProfileApi.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}
export const upUserStatus = (message) => (dispatch) => {
    ProfileApi.upStatus(message).then(response => {
        if(response.statusCode === 0){
            dispatch(setUserStatus(response.messages))
        }
    })
}
export default profileReducer;