import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify'

import * as actions from "../../store/actions/actions";
import ContentWrapper from "../Layout/ContentWrapper";
import Header from "./Header/Header";
import Spinner from "../Common/Spinner/Spinner";
import UserProfile from "./UserProfile/UserProfile";

const SingleView = props => {

  const { onFetchUsers, onFetchTodos } = props

  useEffect(() => {
    onFetchUsers();
    onFetchTodos();
  }, [onFetchTodos, onFetchUsers])

  const { firstLogin, email } = props
  if(firstLogin && email) {
    const name = email.substring(0, email.lastIndexOf('@')) 
    toast('Welcome '+name, {
      type: 'info',
      position: 'bottom-center',
      hideProgressBar: true,
      draggable: true,
      closeOnClick: true
    })
    props.onFirstLogin()
  }
  
    const { usersLoading, todosLoading, photosLoading } = props;
    return (
      <ContentWrapper>
        <ToastContainer />
        {usersLoading || todosLoading || photosLoading ? (
          <Spinner />
        ) : (
          <Header />
        )}
          <UserProfile />
          {console.log(props.firstLogin, props.email, props.loading)}
      </ContentWrapper>
    );

}

const mapStateToProps = (state) => {
  return {
    usersLoading: state.users.loading,
    todosLoading: state.todos.loading,
    firstLogin: state.loginData.firstLogin,
    email: state.loginData.email,
    loading: state.loginData.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers()),
    onFetchTodos: () => dispatch(actions.fetchTodos()),
    onFirstLogin: () => dispatch(actions.firstLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleView);