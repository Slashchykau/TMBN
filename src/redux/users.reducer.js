const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'


const initialUsersState = {
    users: [
        // {id: 1, followed: true, photoURL: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', fullName: 'Korovatskiy Stanislav', status: 'nice guy', location: {city: 'Warsaw', country: 'Poland'}},
        // {id: 2, followed: false, photoURL: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', fullName: 'Borshchou Victor', status: 'bad guy', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3, followed: false, photoURL: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', fullName: 'Pozdnyak Gleb', status: 'better guy', location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 4, followed: true, photoURL: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', fullName: 'Kolosov Vitaliy', status: 'the best guy', location: {city: 'Moscow', country: 'Russia'}}
    ],
    pageSize: 5,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: true

};

const usersReducer = (state = initialUsersState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    debugger;
                    if(u.id === action.userId) {
                        return {...u, followed : !u.followed}
                    } else return u;

        })
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT : {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_FETCHING : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state;

    }
}

export const toggleFollow = (userId) => {
    return {type: TOGGLE_FOLLOW, userId};
}
export const setUsers = (users) => {
    return { type: SET_USERS, users}
}
export const setCurrent = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalCount = (totalUsersCount) => {
    return { type: SET_TOTAL_COUNT, totalUsersCount}
}
export const setToggleFetching = (isFetching) => {
    return { type: TOGGLE_FETCHING, isFetching}
}

export default usersReducer;