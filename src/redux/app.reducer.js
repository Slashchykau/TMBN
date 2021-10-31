
import {getLoginData} from "./auth.reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';



const initialProfileState = {
    initialized: false,

}


const appReducer = (state = initialProfileState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state,
                initialized:true
            }
        default: return state;
    }
}
 const initializeSuccess = () => ( {type: INITIALIZED_SUCCESS})

export const initializeApp = () =>  (dispatch) => {
    const response = dispatch(getLoginData())
    response.then(()=> ( dispatch(initializeSuccess())))
}

export default appReducer;