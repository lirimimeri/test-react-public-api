import React, { useState } from "react";
import { connect } from "react-redux";

import ContentWrapper from '../../Layout/ContentWrapper'
import User from "./User";
import { Row } from "reactstrap";
import UserProfile from "../UserProfile/UserProfile";


const Users = (props) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [person, setPerson] = useState({})

  const showModalHandler = () => {
    setModalOpen(true)
  }

  const toggleModal = () => {
    setModalOpen(prevState => {
      return !prevState
    })
  }

  const users = props.users.map((user) => {
    return <User
        key={user.id}
        img={"https://mdbootstrap.com/img/Photos/Others/images/" + Math.round((Math.random() * 105)) + ".jpg"}
        id={user.id}
        name={user.name}
        username={user.username}
        city={user.address.city}
        street={user.address.street}
        suite={user.address.city}
        showModal={showModalHandler}
        person={person}
        getperson={() => personProfileHandler(user.id)}
      />
    
  })

  const personProfileHandler = (id) => {
    setPerson(props.users[id-1])
    console.log(props.users[id-1])
  }
  
  return (
    <ContentWrapper>
      <Row>{users}</Row>
      <UserProfile 
        isModalOpen={isModalOpen} 
        person={person}
        toggleModal={toggleModal}/>
    </ContentWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users.data,
    isLoading: state.users.loading,
  }
}

export default connect(mapStateToProps)(Users)