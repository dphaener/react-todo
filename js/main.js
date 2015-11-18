class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      todos: props.todos,
      inputValue: ''
    }
  }

  inputChanged(ev) {
    this.setState({ inputValue: ev.target.value })
  }

  addTodo(ev) {
    ev.preventDefault()

    let todo = {
          name: ev.target[0].value,
          complete: false
        },
        todos = this.state.todos

    todos.push(todo)

    this.setState({ todos: todos, inputValue: '' })
  }

  render() {
    const { todos, inputValue } = this.state

    return (
      <div className="col-lg-6 col-lg-offset-3">
        <br /><br />
        <form onSubmit={this.addTodo.bind(this)} className="form-inline">
          <div className="form-group">
            <input 
              type='text' 
              className="form-control"
              placeholder="New Todo"
              value={inputValue}
              onChange={this.inputChanged.bind(this)} 
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <TodoList todos={todos} />
      </div>
    )
  }
}

var todos = [
  {
    name: 'Buy milk',
    complete: false
  }
]

ReactDOM.render(<App todos={todos} />, document.getElementById('app'))
