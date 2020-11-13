import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Spinner from "../../Common/Spinner/Spinner";
import TimeNow from './TimeNow'

const Header = (props) => {
  const cursor = {
    cursor: "pointer",
  };


  return (
    <div>
      <TimeNow />
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6">
          {/* START card- */}
          <div className="card bg-green border-0">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-3">
                  <em className="fa fa-user fa-5x"></em>
                </div>
                <div className="col-9 text-right">
                  <div className="text-lg">
                    {props.users && props.users.length}
                  </div>
                  <p className="m-0">Users</p>
                </div>
              </div>
            </div>
            <a className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex">
              <span style={cursor} onClick={() => props.history.push("/users")}>
                View Details
              </span>
              <span className="ml-auto" style={cursor} onClick={() => props.history.push("/users")}>
                <em className="fa fa-chevron-circle-right"></em>
              </span>
            </a>
          </div>
          {/* END card- */}
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          {/* START card- */}
          <div className="card bg-warning border-0">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-3">
                  <em className="fa fa-tasks fa-5x"></em>
                </div>
                <div className="col-9 text-right">
                  <div className="text-lg">
                    {props.todos && props.todos.length}
                    </div>
                  <p className="m-0">Todos</p>
                </div>
              </div>
            </div>
            <a className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex">
              <span style={cursor} onClick={() => props.history.push("/todos")}>
                View Details
              </span>
              <span className="ml-auto" style={cursor} onClick={() => props.history.push("/todos")}>
                <em className="fa fa-chevron-circle-right"></em>
              </span>
            </a>
          </div>
          {/* END card- */}
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          {/* START card- */}
          <div className="card bg-primary border-0">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-3">
                  <em className="fa fa-comments fa-5x"></em>
                </div>
                <div className="col-9 text-right">
                  <div className="text-lg">26</div>
                  <p className="m-0">Posts</p>
                </div>
              </div>
            </div>
            <a className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex">
              <span style={cursor} onClick={() => props.history.push("/posts")}>
                View Details
              </span>
              <span className="ml-auto" style={cursor} onClick={() => props.history.push("/posts")}>
                <em className="fa fa-chevron-circle-right"></em>
              </span>
            </a>
            {/* END card- */}
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          {/* START card- */}
          <div className="card bg-danger border-0">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-3">
                  <em className="far fa-image fa-5x"></em>
                </div>
                <div className="col-9 text-right">
                  <div className="text-lg">
                    {props.photos && props.photos.length}
                  </div>
                  <p className="m-0">Gallery</p>
                </div>
              </div>
            </div>
            <a className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex">
              <span
                style={cursor}
                onClick={() => props.history.push("/gallery")}
              >
                View Details
              </span>
              <span className="ml-auto" style={cursor} onClick={() => props.history.push("/gallery")}>
                <em className="fa fa-chevron-circle-right"></em>
              </span>
            </a>
          </div>
          {/* END card- */}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users : state.users.users.data,
    todos : state.todos.todos,
    photos: state.photos.photos,
  }
}

export default connect(mapStateToProps)(withRouter(Header))
