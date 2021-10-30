import dialogsReducer from "./dialogs.reducer";
import * as axios from "axios";
import {AuthApi} from "../components/Api/Api";

const SET_USER_DATA = 'SET_USER_DATA';

const ADD_POST = 'NEW_POST';

const initialProfileState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


const authReducer = (state = initialProfileState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state,
              ...action.payload
            }
        default: return state;
    }
}
 const setAuthUserData = (userId,login,email,isAuth) => ( {type: SET_USER_DATA, payload:{userId,login,email,isAuth}})

export const getLoginData = () =>  (dispatch) => {
    AuthApi.me().then(response => {
        if(response.data.resultCode === 0) {
            let {userId,login,email} = response.data.data
            dispatch(setAuthUserData(userId,login,email,true))

        }
    })
}

export const login = (email, password, rememberMe) =>  (dispatch) => {
    AuthApi.login(email, password, rememberMe).then(response => {
        console.log('полученны данные' ,{response})
        if(response.data.resultCode === 0) {
            dispatch(getLoginData())



        }
    })
}
export const logout = (email, password, rememberMe) =>  (dispatch) => {
    AuthApi.logout().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null,null,null,false))

        }
    })
}

export default authReducer;