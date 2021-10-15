import dialogsReducer from "./dialogs.reducer";

const ADD_POST = 'NEW_POST';
const CHANGE_AREA = 'CHANGE_AREA';
const initialProfileState = {
    postsData: [{id: 1, message: "I'm think that, react it nice framework!", likeCount: '100500'},
        {id: 1, message: "I'm great. What you think about react?", likeCount: '11'},
        {id: 1, message: "I'm fine thanks. And you?", likeCount: '13'},
        {id: 1, message: "How, are you?", likeCount: '10'}],
    currentArea: 'a',
}


const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case ADD_POST:
            const news = {id: 1, message: state.currentArea, likeCount: '100500'};
            return {...state,
                postsData : [...state.postsData,news],
                currentArea: ''
            }

        case CHANGE_AREA:
            return {...state,
                currentArea : action.text};

        default: return state;

    }

}
export const createPostAction = () => {
    return {type: ADD_POST}
};
export const createChangeArea = (text) => {
    return {type: CHANGE_AREA, text: text};
}
export default profileReducer;