class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      name: props.todo.name,
      complete: props.todo.complete
    }
  }

  onChange(ev) {
    this.setState({ complete: !this.state.complete })
  }

  render() {
    const { name, complete } = this.state

    return (
      <li className="list-group-item">
        <span style={{ textDecoration: complete ? 'line-through' : null }}>{ name }</span>
        <span className="badge">
          <label style={{ marginBottom: 0 }}>
            {complete ? "Complete" : "Pending"}
            <input type='checkbox' onClick={this.onChange.bind(this)} checked={complete} style={{ display: 'none' }} />
          </label>
        </span>
      </li>
    )
  }
}

window.Todo = Todo
