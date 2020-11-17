import React from "react";

import { Button, Modal } from "reactstrap";
import Spinner from "../../Common/Spinner/Spinner";

const UserProfile = (props) => {
  return (
    <div className="page-content page-container vertical-align-center">
      <Modal
        className="modal-lg"
        isOpen={props.isModalOpen}
        toggle={props.toggleModal}
      >
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="row m-l-0 m-r-0">
              <div className="col-sm-4 bg-c-lite-green user-profile">
                <div className="card-block text-center">
                  <div className="m-b-25">
                    {" "}
                    <img
                      src="https://img.icons8.com/bubbles/100/000000/user.png"
                      className="img-radius"
                      alt="User-Profile"
                    />{" "}
                  </div>
                  <h6 className="f-w-600">
                    {props.person && props.person.name}
                  </h6>
                  <p>Web Designer</p>{" "}
                </div>
              </div>
              <div className="col-sm-8">
                <div className="card-block">
                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                    Information
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Email</p>
                      <h6 className="text-muted f-w-400">
                        {props.person && props.person.email}
                      </h6>
                    </div>
                    <div className="col-12">
                      <p className="m-b-10 f-w-600">Phone</p>
                      <h6 className="text-muted f-w-400">
                        {props.person && props.person.phone}
                      </h6>
                    </div>
                  </div>
                  <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                    Adrress
                  </h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <i>
                        {!(props.person && props.person.address) ? (
                          <Spinner />
                        ) : (
                          props.person.address.city
                        )}
                      </i>{" "}
                      <br />
                      <i>
                        {!(props.person && props.person.address) ? (
                          <Spinner />
                        ) : (
                          props.person.address.street
                        )}
                      </i>{" "}
                      <br />
                      <i>
                        {!(props.person && props.person.address) ? (
                          <Spinner />
                        ) : (
                          props.person.address.suite
                        )}
                      </i>{" "}
                      <br />
                      <i>
                        {!(props.person && props.person.address) ? (
                          <Spinner />
                        ) : (
                          props.person.address.zipcode
                        )}
                      </i>{" "}
                      <br />
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Most Viewed</p>
                      <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button color="dark" onClick={props.toggleModal}>
          Dismis
        </Button>
      </Modal>
    </div>
  );
};

export default UserProfile;
