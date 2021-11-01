import dialogsReducer from "./dialogs.reducer";
import * as axios from "axios";
import {AuthApi} from "../components/Api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

const initialProfileState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


const authReducer = (state = initialProfileState, action) => {
debugger;
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
   return  AuthApi.me().then(response => {
        if(response.data.resultCode === 0) {
            let {id,login,email} = response.data.data

            dispatch(setAuthUserData(id,login,email,true))

        }
    })
}

export const login = (email, password, rememberMe) =>  (dispatch) => {
    AuthApi.login(email, password, rememberMe).then(response => {

        if(response.data.resultCode === 0) {
            dispatch(getLoginData())


        } else {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
            dispatch(stopSubmit('Login',{_error: message}))
        }
    })
}
export const logout = () =>  (dispatch) => {
    AuthApi.logout().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null,null,null,false))

        }
    })
}

export default authReducer;