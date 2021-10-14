import React from 'react';
import profileReducer from "./profile.reducer";
import dialogsReducer from "./dialogs.reducer";
import sidebarReducer from "./sidebar.reducer";

const store = {
    _state: {

        dialogsPage: {
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
        },

        profilePage: {
            postsData: [{id: 1, message: "I'm think that, react it nice framework!", likeCount: '100500'},
                {id: 1, message: "I'm great. What you think about react?", likeCount: '11'},
                {id: 1, message: "I'm fine thanks. And you?", likeCount: '13'},
                {id: 1, message: "How, are you?", likeCount: '10'}],
            currentArea: 'a',
        },
        sidebarFriends: [{
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
            }]

    },


    getState() {
        return this._state;
    },
    _callSubscriber() {
        alert('render')
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarFriends = sidebarReducer(this._state.sidebarFriends, action);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

}

window.store = store;
export default store;