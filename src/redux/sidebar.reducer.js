import dialogsReducer from "./dialogs.reducer";
const initialSidebarState = [{
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
    }];

const sidebarReducer = (state =initialSidebarState, action) => {


    return state;
}
export default sidebarReducer;