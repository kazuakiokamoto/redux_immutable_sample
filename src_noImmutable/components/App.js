import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import * as TodoActions from '../actions/actions';

class App extends Component {
    render() {
        const { todoData, actions } = this.props;
        return (
            <div>
                <TodoAdd addTodo={actions.addTodo} />
                <TodoList
                    data={this.props.todoData}
                    actions={actions}
                />
            </div>
        )
    }
}

// redux connect
function mapStateToProps(state) {
    return {
        todoData: state.todoData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
