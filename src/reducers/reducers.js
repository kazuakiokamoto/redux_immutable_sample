import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import * as types from '../const/actionTypes';

import Todo from './models/todo'; // todoModel
import initialTodos from '../data/initialTodos'; // import initial todos

const initialState = fromJS({
    items : []
});

const todoData = (state = initialState, action) => {

    switch (action.type) {

        case types.GET_TODO:
            return state.set('items', fromJS(initialTodos).map(todo => new Todo(todo)));

        // 編集と保存のアクションを統合
        case types.CHANGE_TODO:
            return state.setIn(['items', action.index], action.todo);

        case types.ADD_TODO:
            return state.update('items', (items) => items.unshift(new Todo({ title: action.title })));

        case types.REMOVE_TODO:
            return state.update('items', (items) => items.delete(action.index));

        default:
            return state;
    }
}

export default combineReducers({
    todoData
});
