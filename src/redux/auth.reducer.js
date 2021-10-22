import dialogsReducer from "./dialogs.reducer";
import * as axios from "axios";
import {AuthApi} from "../components/Api/Api";

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
            return {...state,
              ...action.data,
                isAuth:true
            }
        default: return state;
    }
}
 const setAuthUserData = (data) => {
    return {type: SET_USER_DATA,data}
};
export const getLoginData = () =>  (dispatch) => {
    AuthApi.me().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data))
        }
    })
}

export default authReducer;