import React from 'react'

import { Card, CardBody, Col } from 'reactstrap'

const Photo = ( props ) => {
  return (
    <Col className="col-4">
      <Card>
        <img
          alt="test"
          src={ props.image }/>
        <CardBody>
        <h4>{props.title}</h4>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Photo