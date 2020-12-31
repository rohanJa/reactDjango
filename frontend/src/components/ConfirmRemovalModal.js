import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class ConfirmRemovalModal extends Component {
  state = {
    modal: false
  };

  /*
    the toggle() method as the name suggest invert the state of "modal" variable as it is used when 
  */ 

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  // deleteStudent() will delete the user with given primary key and resetState() method will call the fresh list of student present

  deleteStudent = pk => {
    axios.delete(API_URL + pk,{headers: {
      'Authorization':`JWT ${localStorage.getItem('token')}`      
    }}).then(() => {
      this.props.resetState();
      this.toggle();
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <Button color="danger" onClick={() => this.toggle()}>
          Remove
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Do you really wanna delete the student?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={() => this.toggle()}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => this.deleteStudent(this.props.pk)}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModal;