import React from "react";
import {
  CardBody,
  Card,
  CardHeader,
  CardText,
  CardTitle,
} from "react-bootstrap";

const CardUI = ({ header, title, description, className }) => {
  return (
    <Card  className={className}>
     {header && <CardHeader>{header}</CardHeader>}
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default CardUI;
