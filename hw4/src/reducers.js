function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      default:
        return state;
    }
}


function postReducer(state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = {
                title: action.title,
                content: action.content,
                author: action.author,
                dateCreated: action.dateCreated,
                dateCompleted: action.dateCompleted,
                complete: action.complete,
            };
            return [newTodo , ...state];
        case 'FETCH_POSTS':
            return action.posts;
        default:
        return state;
    }
}


export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postReducer(state.posts, action)
    }
}
