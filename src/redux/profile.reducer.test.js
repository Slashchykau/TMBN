import profileReducer, {createPostAction, deletePostAction} from "./profile.reducer";

const state = {
    postsData: [{id: 1, message: "I'm think that, react it nice framework!", likeCount: '100500'},
        {id: 2, message: "I'm great. What you think about react?", likeCount: '11'},
        {id: 3, message: "I'm fine thanks. And you?", likeCount: '13'},
        {id: 4, message: "How, are you?", likeCount: '10'}],}

test('adding a new post', () => {
    const action = createPostAction('89 lessons')
    const newState = profileReducer(state,action)
    expect(newState.postsData.length).toBe(5);
});

test('correct message output', () => {
    const action = createPostAction('were');
    const newState = profileReducer(state, action);
    expect(newState.postsData[4].message).toBe('were')
})

test ('checking the length of the array after deleting the post', () => {
    const action = deletePostAction(1);
    const newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
})
