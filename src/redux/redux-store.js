import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar.reducer";
import dialogsReducer from "./dialogs.reducer";
import profileReducer from "./profile.reducer";
import usersReducer from "./users.reducer";



const reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarFriends: sidebarReducer,
    users: usersReducer
});

const store = createStore(reducers);

export default store;