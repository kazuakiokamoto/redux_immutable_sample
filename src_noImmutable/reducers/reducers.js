import { combineReducers } from 'redux';
import * as types from '../const/actionTypes';

import initialTodos from '../data/initialTodos'; // import initial todos

const initialState = {
    items : []
};

const todoData = (state = initialState, action) => {

    switch (action.type) {

        case types.GET_TODO:
            return {
                ...state,
                items: initialTodos
            }

        case types.ADD_TODO:
            return {
                ...state,
                items: [
                    {
                        title   : action.title,
                        editing : false
                    },
                    ...state.items
                ]
            }

        case types.EDIT_TODO:
            return {
                ...state,
                items: state.items.map((item, index) =>
                    action.index === index ?
                        { ...item, editing : true } :
                        item
                )
            }

        case types.SAVE_TODO:
            return {
                ...state,
                items: state.items.map((item, index) =>
                    action.index === index ?
                        { title : action.title , editing : false } :
                        item
                )
            }

        case types.REMOVE_TODO:
            return {
                ...state,
                items: state.items.filter((item, index) => action.index !== index)
            }

        default:
            return state;
    }
}

export default combineReducers({
    todoData
});
