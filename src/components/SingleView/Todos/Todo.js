import React from 'react'

import { Card, CardBody } from 'reactstrap'

const Todo = ( props ) => {
  return (
    <Card className="col col-xl-8 col-sm-11 text-white m-1 ml-auto mr-auto" color={props.done ? "dark" : "warning"}  >
      <h4>{props.userId}</h4>
      {props.done ? <i class="fa fa-check fa-4x ml-auto"></i> : <i class="fas fa-marker fa-4x ml-auto"></i>}
      <CardBody>
        <h3 style={{textDecoration: props.done ? 'line-through' : 'none'}}>{props.text}</h3>
      </CardBody>
    </Card>
  )
}

export default Todo