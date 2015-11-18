class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { todos: props.todos }
  }

  render() {
    const { todos } = this.state,
          todoList = todos.map(todo => <Todo todo={todo} />)

    return (
      <ul className="list-group">
        { todoList }
      </ul>
    )
  }
}

window.TodoList = TodoList
