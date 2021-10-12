import React from 'react';

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
                }]
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
        if (action.type === "ADD-POST") {
                const news = {id: 1, message: this._state.profilePage.currentArea, likeCount: '100500'};
                this._state.profilePage.postsData.push(news);
                this._state.profilePage.currentArea = '';

                this._callSubscriber(this.getState());

        } else if (action.type === "CHANGE-AREA") {

                this._state.profilePage.currentArea = action.text;
                this._callSubscriber(this.getState());
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

}
window.store = store;
export default store;