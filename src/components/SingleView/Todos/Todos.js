import React from 'react'
import { connect } from 'react-redux'

import ContentWrapper from '../../Layout/ContentWrapper'
import Todo from './Todo'
import { Row } from 'reactstrap'

const Todos = ( props ) => {

  const todos = props.todos.map(todo => <Todo 
    userId={todo.userId}
    text={todo.title}
    done={todo.completed}/>)
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