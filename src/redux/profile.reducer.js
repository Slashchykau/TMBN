import dialogsReducer from "./dialogs.reducer";

const ADD_POST = 'NEW_POST';
const CHANGE_AREA = 'CHANGE_AREA';


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const news = {id: 1, message: state.currentArea, likeCount: '100500'};
            state.postsData.push(news);
            state.currentArea = '';
            return state;
        case CHANGE_AREA:
            state.currentArea = action.text;
            return state;
        default:
            return state;
    }

}
export const createPostAction = () => {
    return {type: ADD_POST}
};
export const createChangeArea = (text) => {
    return {type: CHANGE_AREA, text: text};
}
export default profileReducer;