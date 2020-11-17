import React from 'react'

import { Card, CardBody } from 'reactstrap'

const Todo = ( props ) => {
  const onClickHandler = () => {
    props.todo()
  }
  return (
    <Card onClick={onClickHandler} className="col-11 col-lg-8 col-m-0 text-white m-1 ml-auto mr-auto" color={props.done ? "dark" : "warning"}  >
      <h4>{props.userId}</h4>
      {props.done ? <i className="fa fa-check fa-4x ml-auto"></i> : <i className="fas fa-marker fa-4x ml-auto"></i>}
      <CardBody>
        <h3 style={{textDecoration: props.done ? 'line-through' : 'none'}}>{props.text}</h3>
      </CardBody>
    </Card>
  )
}

export default Todo