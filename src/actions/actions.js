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

// 編集と保存のアクションを統合
// モデル側で変更されたtodoをactionへ渡す
export function changeTodo(index, todo) {
    return {
        type : types.CHANGE_TODO,
        index,
        todo
    }
}

export function removeTodo(index) {
    return {
        type : types.REMOVE_TODO,
        index
    }
}
