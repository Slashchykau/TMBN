import {ProfileApi, UsersApi} from "../components/Api/Api";

const ADD_POST = 'NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialProfileState = {
    postsData: [{id: 1, message: "I'm think that, react it nice framework!", likeCount: '100500'},
        {id: 2, message: "I'm great. What you think about react?", likeCount: '11'},
        {id: 3, message: "I'm fine thanks. And you?", likeCount: '13'},
        {id: 4, message: "How, are you?", likeCount: '10'}],
    profile: null,
    status: ''
}


const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case ADD_POST:
            const news = {id: 5, message: action.newPost, likeCount: '100500'};
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
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => (p.id != action.postId))
            }

        default:
            return state;

    }

}
export const createPostAction = (newPost) => {
    return {type: ADD_POST, newPost}
};
export const deletePostAction = (postId) => {
    return {type: DELETE_POST, postId}
};
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile};
}

export const setUserStatus = (status) => {

    return {type: SET_STATUS, status};
}

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await UsersApi.getProfile(userId)
    dispatch(setUserProfile(response.data))

}
export const getUserStatus = (userId) => async (dispatch) => {
    const response = await ProfileApi.getStatus(userId)
    dispatch(setUserStatus(response.data))

}
export const upUserStatus = (message) => async (dispatch) => {
    const response = await ProfileApi.upStatus(message)
    if (response.statusCode === 0) {
        dispatch(setUserStatus(response.messages))
    }

}
export default profileReducer;