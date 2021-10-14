const UPDATE_NEW_MASSAGE_AREA = 'UPDATE-NEW-MASSAGE-AREA'
const NEW_MESSAGE = 'NEW_MESSAGE';
const initialDialogsState = {
    messageData: [{id: 1, message: 'Hi'},
        {id: 2, message: 'hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'I am fine thanks!'}],
    dialogsData: [{
        id: 1,
        name: 'Vasa',
        avatarLink: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
        {
            id: 2,
            name: 'Sveta',
            avatarLink: 'https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: 3,
            name: 'Galya',
            avatarLink: 'https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: 4,
            name: 'Arnest',
            avatarLink: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }],
    changeMessageArea: ''
};

const dialogsReducer = (state =initialDialogsState, action) => {
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