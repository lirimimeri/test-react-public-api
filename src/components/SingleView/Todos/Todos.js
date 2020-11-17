import React from 'react'
import { connect } from 'react-redux'

import ContentWrapper from '../../Layout/ContentWrapper'
import Todo from './Todo'
import { Row } from 'reactstrap'
import axios from 'axios'

const Todos = ( props ) => {

  const getTodoHandler = (id) => {
    axios.put('https://jsonplaceholder.typicode.com/todos/' + id)
    .then(res => {
      console.log(res)
    })
    // todos[id].props.done = !todos[id].props.done

  }

  const todos = props.todos.map(todo => <Todo 
    key={todo.id}
    userId={todo.userId}
    text={todo.title}
    done={todo.completed}
    todo={() => getTodoHandler(todo.id - 1)}/>)
  return (
    <ContentWrapper>
    <Row>
      {todos}
    </Row>
    </ContentWrapper>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

export default connect(mapStateToProps)(Todos)