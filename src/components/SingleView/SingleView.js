import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

import ContentWrapper from "../Layout/ContentWrapper";
import Header from "./Header/Header";
import Spinner from "../Common/Spinner/Spinner";
import UserProfile from "./UserProfile/UserProfile";

class SingleView extends React.Component {
  state = {}

  toggleModal = () => {
    this.setState((prevState) => {
      return { isModalOpen: !prevState.isModalOpen };
    });
  };

  componentDidMount() {
    this.props.onFetchUsers();
    this.props.onFetchTodos();
    // this.props.onFetchPhotos()
  }

  render() {
    const { usersLoading, todosLoading, photosLoading } = this.props;
    return (
      <ContentWrapper>
        {usersLoading || todosLoading || photosLoading ? (
          <Spinner />
        ) : (
          <Header />
        )}
          <UserProfile />
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersLoading: state.users.loading,
    todosLoading: state.todos.loading,
    photosLoading: state.photos.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers()),
    onFetchTodos: () => dispatch(actions.fetchTodos()),
    // onFetchPhotos: () => dispatch(actions.fetchPhotos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleView);
