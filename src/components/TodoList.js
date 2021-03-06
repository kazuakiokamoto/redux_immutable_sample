import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        const {data, index, actions} = this.props;
        if (data.isEditing()) {
            return(
                <li>
                    <form onSubmit={() => actions.changeTodo(index, data.save(this.refs.todoTitle.value))}>
                        <input style={{ width : '200px' }} type="text" ref="todoTitle" defaultValue={data.get('title')} />&nbsp;
                        <input type="submit" value="保存する" />
                    </form>
                </li>
            )
        }
        return(
            <li>
                <span style={{ display : 'inline-block', width : '200px' }}>{data.get('title')}</span>&nbsp;
                <a href="#" onClick={() => actions.changeTodo(index, data.edit())}>編集</a>&nbsp;
                <a href="#" onClick={() => actions.removeTodo(index)}>削除</a>
            </li>
        )
    }
}

class TodoList extends Component {
    render() {
        const items = this.props.data.get('items');
        return(
            <ul>
                {
                    items.map((item, index) => (
                        <TodoItem
                            key={index}
                            data={item}
                            index={index}
                            actions={this.props.actions}
                        />
                    ))
                }
            </ul>
        )
    }
}

export default TodoList;
