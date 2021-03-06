import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.resetState();
  }

  /* 
    getStudents() function will get the data through REST API defined in django .
  */ 

  getStudents = () => {
    axios.get(API_URL
      ,{
      headers: {
        'Authorization':`JWT ${localStorage.getItem('token')}`      
      }}
      ).then(res => this.setState({ students: res.data }));
  };

  /*
    This resetState() method is invoked when a user is removed/added so to render the fresh page of with the list
    of user present. 
  */

  resetState = () => {
    this.getStudents();
  };

  render() {
    return (
      <Fragment>
      <center><h4 >
      <b>Welcome  </b><b style={{color:'blue'}}>{this.props.username}</b>
  </h4></center>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <StudentList
              students={this.state.students}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewStudentModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
  }
}

export default Home;