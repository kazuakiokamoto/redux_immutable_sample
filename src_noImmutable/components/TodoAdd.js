import React, { Component } from 'react';

class TodoAdd extends Component {
    render(){
        return(
            <div>
                <form onSubmit={() => this.props.addTodo(this.refs.todoTitle.value)}>
                    <input type="text" ref="todoTitle" placeholder="タイトルを入力" />&nbsp;
                    <input type="submit" value="追加する" />
                </form>
            </div>
        )
    }
}

export default TodoAdd;
