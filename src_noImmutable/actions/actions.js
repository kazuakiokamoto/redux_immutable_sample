import * as types from '../const/actionTypes';

export function getInitialTodos() {
    return {
        type : types.GET_TODO
    }
}

export function addTodo(title) {
    return {
        type : types.ADD_TODO,
        title
    }
}

export function editTodo(index) {
    return {
        type : types.EDIT_TODO,
        index
    }
}

export function saveTodo(index, title) {
    return {
        type : types.SAVE_TODO,
        index,
        title
    }
}

export function removeTodo(index) {
    return {
        type : types.REMOVE_TODO,
        index
    }
}
