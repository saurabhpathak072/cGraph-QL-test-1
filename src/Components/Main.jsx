import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SUDENT_LIST } from "../GraphQL/Query";
import { Col, Container, Row } from "react-bootstrap";
import CardUI from "./UI/Card";
import StudentForm from "./Student/StudentForm";

const Main = () => {
  const { data, loading, error } = useQuery(GET_SUDENT_LIST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log("data : ", data);
  return (
    <Container>
      <Row>
        <Col className="" sm={12} md={6}>
          <div className="align-items-center justify-content-center minHeight100vh d-flex">
            <StudentForm />
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="maxheight100vh overflow-auto">

          {data.students?.map((student) => {
            return (
              <CardUI
                className="py-2 m-3"
                description={`Hello! ${student.firstName} ${student.lastName}, Age : ${student.age}`}
                key={student.id}
              />
            );
          })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
