const UPDATE_NEW_MASSAGE_AREA = 'UPDATE-NEW-MASSAGE-AREA'
const NEW_MESSAGE = 'NEW_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_AREA:
            state.changeMessageArea = action.message;
            return state;
        case NEW_MESSAGE: {
            const message = state.changeMessageArea;
            state.changeMessageArea = '';
            state.messageData.push({id: 6, message: message})
            return state;
        }
        default:
            return state;
    }
}

export const updateNewMessageArea = (message) => {
    return {type: UPDATE_NEW_MASSAGE_AREA, message: message};
}
export const newMessage = () => {
    return {type: NEW_MESSAGE};
}
export default dialogsReducer;