import dialogsReducer from "./dialogs.reducer";

const SET_USER_DATA = 'SET_USER_DATA';

const ADD_POST = 'NEW_POST';

const initialProfileState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            const news = {id: 1, message: state.currentArea, likeCount: '100500'};
            return {...state,
              ...action.data,
                isAuth:true
            }
        default: return state;
    }
}
export const setAuthUserData = (data) => {
    return {type: SET_USER_DATA,data}
};
export default authReducer;