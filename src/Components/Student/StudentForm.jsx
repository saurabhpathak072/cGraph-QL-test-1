import { useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CREATE_NEW_STUDENT, GET_SUDENT_LIST } from "../../GraphQL/Query";

const StudentForm = () => {
  const [newStudent, setNewStudent] = useState({});
  const [createStudent,{data,error,loading}] =useMutation(CREATE_NEW_STUDENT,{
    refetchQueries: [
        GET_SUDENT_LIST, // DocumentNode object parsed with gql
        'GetStudentList' // Query name
      ],
  });

  const handleInput = (e) => {

    const id = e.currentTarget.id;
    const value = e.currentTarget.value
    setNewStudent((prevStudent) => {
      return {
        ...prevStudent,
        [id]: value,
      };
    });
  };

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const result = await createStudent({variables:{
        newStudent:{
            ...newStudent,
            age: Number.parseInt(newStudent.age)
        }
    }})

    console.log(result);

  }
  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col xs={"auto"}>
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            className="mb-2"
            id="firstName"
            onChange={handleInput}
            value={newStudent.firstName}
            placeholder="First name"
          />
        </Col>
        <Col xs={"auto"}>
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            className="mb-2"
            id="lastName"
            onChange={handleInput}
            value={newStudent.lastName}
            placeholder="Last name"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={"auto"}>
          <Form.Label htmlFor="age">Age</Form.Label>
          <Form.Control
            value={newStudent.age}
            onChange={handleInput}
            className="mb-2"
            id="age"
            placeholder="Age"
          />
        </Col>
      </Row>
      <Form.Group as={Row} className="my-3">
        <Col lg={6} sm={{ span: 10, offset: 2 }}>
          <Button type="submit"  variant="outline-success">Success</Button>{" "}
        </Col>
      </Form.Group>
    </Form>
  );
};

export default StudentForm;
