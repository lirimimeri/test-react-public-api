import React, { useState } from "react";
import { connect } from "react-redux";

import ContentWrapper from '../../Layout/ContentWrapper'
import User from "./User";
import Spinner from "../../Common/Spinner/Spinner";
import { Row } from "reactstrap";
import UserProfile from "../UserProfile/UserProfile";


const Users = (props) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const showModalHandler = () => {
    setModalOpen(true)
  }

  const toggleModal = () => {
    setModalOpen(prevState => {
      return !prevState
    })
  }

  const users = props.users.map((user) => {
    return props.isLoading ? (
      <Spinner />
    ) : (
      <User
        img={"https://mdbootstrap.com/img/Photos/Others/images/" + Math.round((Math.random() * 105)) + ".jpg"}
        key={user.id}
        name={user.name}
        username={user.username}
        city={user.address.city}
        street={user.address.street}
        suite={user.address.city}
        showModal={showModalHandler}
      />
    );
  });

  

  
  return (
    <ContentWrapper>
      <Row>{users}</Row>
      <UserProfile isModalOpen={isModalOpen} toggleModal={toggleModal}/>
    </ContentWrapper>
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users.data,
    isLoading: state.users.loading,
  }
}

export default connect(mapStateToProps)(Users)